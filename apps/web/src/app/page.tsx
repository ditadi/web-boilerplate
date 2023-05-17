import { UserButton } from '@clerk/nextjs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button, Checkbox, Input } from 'ui';

export default function Home() {
  return (
    <main className="flex gap-20 flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Ditadi Boilerplate</h1>
      <UserButton />
      <div className="flex items-center justify-center flex-col">
        <div className="flex  w-full max-w-sm items-center space-x-2">
          <Button variant="destructive" size={'lg'}>
            Secondary
          </Button>
        </div>
      </div>
    </main>
  );
}
