'use client';
import { useUser } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';
import { useEffect, experimental_useOptimistic as useOptimistic, useRef } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { Button, Input, Skeleton } from 'ui';

import { PostEntity } from '../../models/schema';
import { Post } from './post';

export function Feed({ posts, createPost }: { posts?: PostEntity[] | undefined; createPost: any }) {
  const { user } = useUser();
  const { pending } = useFormStatus();

  const [optimisticPosts, addOptimisticPost] = useOptimistic<PostEntity[] | undefined, PostEntity>(
    posts,
    (state, newPost) => [
      {
        content: newPost.content,
        id: 0,
        saving: true,
        authorId: user?.id,
        createdAt: new Date(),
        authorName: user?.firstName,
      },
      ...(state as PostEntity[]),
    ],
  );
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [inputRef.current]);

  return (
    <>
      <div className="flex gap-10 mt-10 flex-row">
        <form
          action={async (formData: FormData) => {
            const content = formData.get('content') as string;

            if (content) {
              formRef.current?.reset();
              inputRef?.current?.focus();
              addOptimisticPost({ id: 0, createdAt: new Date(), content: content, authorId: '13' });
              await createPost(formData);
            }
          }}
          ref={formRef}
        >
          <div className="flex gap-5 flex-row">
            <Input placeholder="Post Content" name="content" />
            <Button type="submit" variant={'default'} className="w-[500px]" disabled={pending}>
              {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Post
            </Button>
          </div>
        </form>
      </div>
      <div className="mt-5 flex overflow-auto flex-col gap-3 p-5">
        {optimisticPosts?.map((post: PostEntity) => (
          <>
            <div className="space-y-2 flex gap-3 flex-col">
              {post.saving && <Skeleton className="h-20 w-full" />}
              <Post key={post.id} post={post} />
            </div>
          </>
        ))}
      </div>
    </>
  );
}
