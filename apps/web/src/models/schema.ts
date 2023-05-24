import { UserJSON, UserWebhookEvent } from '@clerk/nextjs/dist/server';
import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const users = sqliteTable(
  'users',
  {
    id: integer('id').primaryKey(),
    providerId: text('provider_id').notNull(),
    providerType: text('provider_type').notNull(),
    firstName: text('name'),
    lastName: text('last_name'),
    profilePicture: text('profile_picture_url'),
    email: text('email').notNull(),
    createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
  },
  (users) => ({
    providerIdIdx: uniqueIndex('provider_id_idx').on(users.providerId),
  }),
);

export const auth_sso = sqliteTable('auth_sso', {
  id: text('id').primaryKey(),
  provider: text('provider').notNull(),
  thirdPartyProvider: text('third_party_provider').notNull(),
  userId: integer('user_id').references(() => users.id),
});

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  content: text('content').notNull(),
  authorId: integer('author_id')
    .notNull()
    .references(() => users.id),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`),
});

export function userParser(user: UserWebhookEvent): Omit<UserEntity, 'id'> {
  const userRaw = user.data as UserJSON;
  return {
    firstName: userRaw.first_name,
    lastName: userRaw.last_name,
    email: userRaw.email_addresses[0].email_address,
    profilePicture: userRaw.profile_image_url,
    createdAt: new Date(userRaw.created_at),
    providerId: userRaw.id,
    providerType: userRaw.email_addresses[0].verification?.strategy as string,
  };
}

export type UserEntity = {
  providerId: string;
  providerType: string;
  firstName?: string;
  lastName?: string;
  email: string;
  profilePicture?: string;
  createdAt: Date;
};

// Drizzle have a better way to handle this
type DBPostType = {
  id: number;
  content: string;
  createdAt: Date | null;
  authorId: number | null;
  authorName: string | null;
  authorProfile: string | null;
};

export function postParser(rawPosts: DBPostType[]): PostEntity[] {
  return rawPosts.map((rawPost) => {
    return {
      id: rawPost.id,
      content: rawPost.content,
      createdAt: rawPost.createdAt ? rawPost.createdAt : new Date(),
      author: {
        id: rawPost.authorId ? rawPost.authorId : 0,
        name: rawPost.authorName ? rawPost.authorName : '',
        picture: rawPost.authorProfile ? rawPost.authorProfile : '',
      },
    };
  });
}

export interface PostEntity {
  id: number;
  content: string;
  createdAt: Date;
  author: {
    id: number;
    name?: string;
    picture?: string;
  };
  saving?: boolean | null;
}
