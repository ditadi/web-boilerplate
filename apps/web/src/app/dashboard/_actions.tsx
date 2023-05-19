'use server';

import { revalidatePath } from 'next/cache';
import { db } from '../../db/adapter';
import { posts } from '../../models/schema';
import { currentUser } from '@clerk/nextjs/dist/server-helpers.server';
import { desc } from 'drizzle-orm';
import { clerkClient } from '@clerk/nextjs';

export async function createPost(props: FormData) {
  const postContent = props.get('content') as string;
  const user = await currentUser();
  if (!user) return;
  try {
    const response = await db.insert(posts).values({ content: postContent, authorId: user.id }).returning();
    revalidatePath(`/`);

    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getPosts() {
  try {
    const response = await db.select().from(posts).orderBy(desc(posts.createdAt));

    return await Promise.all(
      response.map(async (post) => {
        const author = await clerkClient.users.getUser(post.authorId);
        return { ...post, author: { firstName: author.firstName as string, profileImageUrl: author.profileImageUrl } };
      }),
    );
  } catch (e) {
    console.log(e);
  }
}