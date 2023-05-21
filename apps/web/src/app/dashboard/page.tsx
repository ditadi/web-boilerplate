import { UserButton } from '@clerk/nextjs';
import { createPost, getPosts } from './_actions';
import { Feed } from '../../components/feed/Feed';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex h-screen flex-col items-center  p-24">
      <div className="flex flex-row gap-5 items-center">
        <h1 className="text-4xl font-bold">Ditadi Boilerplate Dashboard</h1>
        <UserButton />
      </div>
      <Feed posts={posts} createPost={createPost} />
    </main>
  );
}
