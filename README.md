This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Account {
  id                String  @id @default(cuid()) @map("_id")
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid()) @map("_id")
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(cuid()) @map("_id")
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  Post          Post[]
  Comment       Comment[]
}

model VerificationToken {
  identifier String   @id @map("_id")
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

model Category {
  id    String  @id @default(cuid()) @map("_id")
  slug  String  @unique
  title String
  img   String?
  Posts Post[]
}

model Post {
  id        String    @id @default(cuid()) @map("_id")
  createdAt DateTime @default(now())
  slug      String    @unique
  title     String
  desc      String
  img       String?
  views     Int       @default(0)
  catSlug   String
  cat       Category  @relation(fields: [catSlug], references: [slug])
  userEmail String
  user      User      @relation(fields: [userEmail], references: [email])
  comments  Comment[]
}

model Comment {
  id        String   @id @default(cuid()) @map("_id")
  createdAt DateTime @default(now())
  desc      String
  userEmail String
  user      User     @relation(fields: [userEmail], references: [email])
  postSlug  String
  post      Post     @relation(fields: [postSlug], references: [slug])
}

