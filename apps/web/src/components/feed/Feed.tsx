'use client';
import { useUser } from '@clerk/nextjs';
import { experimental_useOptimistic as useOptimistic } from 'react';

import { PostEntity } from '../../models/schema';

import { NewPost } from './NewPost';
import { PostList } from './PostList';

export function Feed({ posts, createPost }: { posts?: PostEntity[] | undefined; createPost: (props: FormData) => {} }) {
  const { user } = useUser();
  const [optimisticPosts, addOptimisticPost] = useOptimistic<PostEntity[] | undefined, PostEntity>(
    posts,
    (state, newPost) => [
      {
        content: newPost.content,
        id: 0,
        saving: true,
        createdAt: new Date(),
        author: {
          id: 0,
          name: user?.firstName ? user?.firstName : '',
          picture: user?.profileImageUrl,
        },
      },
      ...(state as PostEntity[]),
    ],
  );
  return (
    <>
      <div className="flex gap-10 mt-10 flex-row">
        <NewPost createPost={createPost} updateUIWithNewPost={addOptimisticPost} />
      </div>
      <PostList posts={optimisticPosts} />
    </>
  );
}
