import { Avatar, AvatarImage, Card, CardContent, CardDescription, CardHeader, CardTitle } from 'ui';
import { PostEntity } from '../../models/schema';
import React from 'react';
import { getRelativeTime } from '../../utils/utils';

const Post = ({ post }: { post: PostEntity }) => {

	return (
		<Card className="w-96">
			<CardHeader>
				<div className="flex flex-row items-center gap-5 w-full">
					<div className="flex flex-[0.8] items-center gap-5">
						<Avatar>
							<AvatarImage src={post.author?.profileImageUrl} />
						</Avatar>
						<CardDescription>{post.author?.firstName}</CardDescription>
					</div>
					<div className="flex flex-[0.2]">
						<CardDescription>{getRelativeTime(post.createdAt.getTime())}</CardDescription>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<span>{post.content}</span>
			</CardContent>
		</Card>
	);
};

export { Post };