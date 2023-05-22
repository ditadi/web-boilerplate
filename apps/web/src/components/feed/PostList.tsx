import { Skeleton } from 'ui';
import { PostEntity } from '../../models/schema';
import { PostItem } from './PostItem';

export function PostList({ posts }: { posts?: PostEntity[] }) {
  return (
    <div className="mt-5 flex overflow-auto flex-col gap-3 p-5">
      {posts?.map((post: PostEntity) => (
        <div key={post.id} className="space-y-2 flex gap-3 flex-col">
          {post.saving && <Skeleton className="h-20 w-full" />}
          <PostItem key={post.id} post={post} />
        </div>
      ))}
    </div>
  );
}
