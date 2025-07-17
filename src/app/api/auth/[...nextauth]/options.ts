import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { BACKEND_API_URL } from "../../apiConfig";

const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const endPoint = `${BACKEND_API_URL}auth/login`;
        console.log(req);

        const response = await fetch(endPoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
        let data = null;
        try {
          data = await response.json();
        } catch (err) {
          console.log(err);
          throw new Error("Internal Server Error");
        }
        if (!response.ok || !data?.success || !data?.data)
          throw new Error(data.message || "Invalid credentials");
        const { user, token } = data.data;
        return {
          ...user,
          id: user._id,
          token,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, trigger, session }) {
      // console.log(token,user, trigger, session);
      if (trigger === "update" && session?.user) {
        token.user = session?.user;
        token.name = session?.user?.name;
      } else if (user) {
        token.name = user.name;
        token.user = user;
      }
      return token;
    },
    session({ session, token }) {
      if (token) session.user = token.user as typeof session.user;
      // console.log(session, token);
      return session;
    },
    redirect({ url, baseUrl }) {
      console.log("redirect callback", url, baseUrl);
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      return url;
    },
  },
};

export default authOptions;
