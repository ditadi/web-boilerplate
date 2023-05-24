'use client';
import { useEffect, useRef } from 'react';

import { Input } from 'ui';
import { SaveButton } from '../button/SaveButton';
import { PostEntity } from '../../models/schema';

export function NewPost({
  createPost,
  updateUIWithNewPost,
}: {
  createPost: (props: FormData) => {};
  updateUIWithNewPost: (action: PostEntity) => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [inputRef.current]);

  return (
    <form
      action={async (formData: FormData) => {
        const content = formData.get('content') as string;
        if (content) {
          formRef.current?.reset();
          inputRef?.current?.focus();
          updateUIWithNewPost({ id: 0, createdAt: new Date(), content: content, author: { id: 0 } });
          await createPost(formData);
        }
      }}
      ref={formRef}
    >
      <div className="flex gap-5 flex-row">
        <Input placeholder="Post Content" name="content" />
        <SaveButton label="Create Post" />
      </div>
    </form>
  );
}
