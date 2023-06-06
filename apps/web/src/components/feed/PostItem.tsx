import React from 'react';
import {
  Avatar,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from 'ui';
import { PostEntity } from '../../models/schema';
import { getRelativeTime } from '../../utils/utils';
import { Menu, Pen, Trash } from 'lucide-react';
import Link from 'next/link';
import { deletePost } from '../../app/dashboard/_actions';

export function PostItem({ post }: { post: PostEntity }) {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <div className="flex flex-row items-center gap-5 w-full">
          <div className="flex flex-[0.8] items-center gap-5">
            <Avatar>
              <AvatarImage src={post.author.picture} />
            </Avatar>
            <CardDescription>{post.author.name}</CardDescription>
          </div>
          <div className="flex flex-[0.2]">
            <CardDescription>{getRelativeTime(post.createdAt.getTime())}</CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem className="cursor-pointer">
                <Pen className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                <Link href={{ pathname: `/post/${post.id}/edit` }}>Edit Post</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer text-red-500"
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                <Trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                Delete Post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <span>{post.content}</span>
      </CardContent>
    </Card>
  );
}
