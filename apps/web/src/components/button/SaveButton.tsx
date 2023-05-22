'use client';
import { Loader2 } from 'lucide-react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { Button } from 'ui';

export const SaveButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant={'default'} className="w-[500px]" disabled={pending}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
};
