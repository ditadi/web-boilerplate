'use client';
import { useRouter, useParams } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle, Input } from 'ui';
import { SaveButton } from '../button/SaveButton';
import { updatePost } from '../../app/dashboard/_actions';
import React from 'react';

export function EditPost() {
  const router = useRouter();
  const params = useParams();

  const formRef = React.useRef<HTMLFormElement>(null);
  const inputRef = React.useRef<HTMLFormElement>(null);

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Lets edit your post</DialogTitle>
        </DialogHeader>
        <form
          action={async (formData: FormData) => {
            const content = formData.get('content') as string;
            console.log(content);
            if (content) {
              formRef.current?.reset();
              inputRef?.current?.focus();
              await updatePost(+params.id, content);
              router.back();
            }
          }}
          ref={formRef}
        >
          <div className="flex gap-5 flex-col">
            <Input placeholder="Post Content" name="content" />
            <SaveButton label="Update Post" size="small" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
