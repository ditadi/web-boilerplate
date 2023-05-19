import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	email: text('email').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

export const posts = pgTable('posts', {
	id: serial('id').primaryKey(),
	content: text('content').notNull(),
	authorId: text('author_id').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
});

export interface PostEntity {
	id: number;
	content: string;
	author?: {
		firstName?: string;
		profileImageUrl?: string;
	};
	authorId?: string;
	createdAt: Date;
	saving?: boolean;
}
