import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

import { getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
