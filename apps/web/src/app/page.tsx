import { UserButton } from '@clerk/nextjs';
import { Checkbox } from 'ui';

export default function Home() {
  return (
    <main className="flex gap-20 flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Ditadi Boilerplate</h1>
      <UserButton />
      <div className="flex items-center justify-center flex-col">
        <div className="flex  w-full max-w-sm items-center space-x-2">
          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">You agree to our Terms of Service and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
