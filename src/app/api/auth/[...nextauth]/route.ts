import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { DefaultSession, NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
    };
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  callbacks: {
    session: ({ session, user }) => {
      session.user.id = user.id;
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
