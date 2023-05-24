
CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`content` text NOT NULL,
	`author_id` integer NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	FOREIGN KEY (`author_id`) REFERENCES `users`(`id`)
);
