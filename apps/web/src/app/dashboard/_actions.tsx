'use server';

import { revalidatePath } from 'next/cache';
import { db } from '../../db/adapter';
import { PostEntity, postParser, posts, users } from '../../models/schema';
import { desc, eq } from 'drizzle-orm';
import { auth } from '@clerk/nextjs';

export async function createPost(props: FormData) {
  const postContent = props.get('content') as string;

  const { userId: providerUserId } = auth();

  if (!providerUserId) return;

  try {
    const userId = await db.select().from(users).where(eq(users.providerId, providerUserId)).get();

    const response = await db.insert(posts).values({ content: postContent, authorId: userId.id }).returning().get();
    revalidatePath('/');
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getPosts(): Promise<PostEntity[] | undefined> {
  try {
    const rawPosts = await db
      .select({
        id: posts.id,
        content: posts.content,
        createdAt: posts.createdAt,
        authorId: users.id,
        authorName: users.firstName,
        authorProfile: users.profilePicture,
      })
      .from(posts)
      .leftJoin(users, eq(users.id, posts.authorId))
      .orderBy(desc(posts.createdAt))
      .all();

    const postsData = postParser(rawPosts);

    return postsData;
  } catch (e) {
    console.log(e);
  }
}

export async function deletePost(postId: number) {
  try {
    await db.delete(posts).where(eq(posts.id, postId)).run();
    revalidatePath('/');
  } catch (e) {
    console.log(e);
  }
}

export async function updatePost(postId: number, content: string) {
  try {
    await db.update(posts).set({ content: content }).where(eq(posts.id, postId)).run();
    revalidatePath('dashboard');
  } catch (e) {
    console.log(e);
  }
}
