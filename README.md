## Ditadi Boilerplate

Hello, I created this repo to test and try all new stuff in web development.

Web Development is moving forward blazing-fast and new techniques and libraries are borning all day.

Maybe this repo help you if you trying to set up:

- Turborepo
- NextJS App Routing (w/ Parallel Routing)
- Server Actions
- useOptimistic
- useFormStatus
- React Server Components
- Tailwind
- shadcn/UI
- Drizzle
- TursoDB
- Clerk
- Eslint, Prettier, CC, Husky

I will continue updating this repo with new things, maybe you can suggest :)

**Feel free to clone, test, or maybe start as the initial point of your new project.**

TODO:

- Substitute nodeJS for Rust in Vercel Serverless functions
  </br> </br>

# How to run?

## 1: Generate Auth and DB keys

<b>TursoDB:</b></br>
1: Download turso-cli (https://turso.tech) </br>

- `brew install chiselstrike/tap/turso` </br>
  or</br>
- `curl -sSfL https://get.tur.so/install.sh | bash`
  </br>

<br>2: Create the Database</br>
`turso db create {{database_name}}`</br>
`turso db show {{database_name}}`</br>

Copy the DATABASE_URL generated above to store on .env below.
</br></br>

3: Create the Auth Token</br>
`turso db tokens create {{database_name}} -e none`</br>
Copy the token generate above to store on .env below.
</br>
</br>

<b>ClerkJS:</b></br>
1: Create an account on Clerk (https://clerk.com) and copy the
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY.
</br>
2: On Clerk Path, add the same configurations below <i>(Maybe is not necessary)</i>

## 2: Migration

You should create and run the migrations to create your database tables.</br></br>
<b>1: Generate the Migration</b></br>
```cd apps/web```</br></br>
```npx drizzle-kit generate:sqlite```</br></br>
<b>2: Push to DB</b></br>
```turso db shell {{database_name}} < migrations/{{migration_file}}.sql```
</br>

## 3: Create .env

Create .env file on the root and put the keys above.

```
    {
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY={{NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}}
        CLERK_SECRET_KEY={{CLERK_SECRET_KEY}}
        NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
        NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
        NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
        NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
        DATABASE_URL={{DATABASE_URL}}
        DATABASE_AUTH_TOKEN= {{DATABASE_AUTH_TOKEN}}
    }
```

## 3: Install and Run the App

On the root </br>
`pnpm install` </br>
`pnpm dev`

Check http://localhost:3000
