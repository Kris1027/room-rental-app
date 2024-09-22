// types.d.ts

import NextAuth from "next-auth";

declare module "next-auth" {
	interface User {
		userId?: string;
		isAdmin?: boolean;
	}

	interface Session {
		user: User;
	}
}
