// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { authOptions } from "./authOptions";

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
