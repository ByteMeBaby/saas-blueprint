// To send magic login links we are using nodemailer, which does not work in an edge environment.
// As a work around we seperated out the AuthJS configurations into two files.
// Using @/auth.js file with middleware will results in errors, as middleware operates
// in an edge environment. Consequently, configurations compatible with the edge have been
// separated into config/auth/index.ts. For more information, read here: https://authjs.dev/guides/upgrade-to-v5#edge-compatibility

import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import type { Adapter } from "@auth/core/adapters";
import { DynamoDB, DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { DynamoDBAdapter } from "@auth/dynamodb-adapter";
import { NextAuthConfig } from "next-auth";

const dynamoDbConfig: DynamoDBClientConfig = {
  region: process.env.AWS_DYNAMODB_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_DYNAMODB_KEY as string,
    secretAccessKey: process.env.AWS_DYNAMODB_SECRET as string,
  },
  endpoint: "http://ddb-local:8000",
};

const client = DynamoDBDocument.from(new DynamoDB(dynamoDbConfig), {
  marshallOptions: {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
});

const config = {
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, trigger }) {
      if (user) {
        token.userId = user.id;
        console.log("update triggered");
      }

      if (token.userId && trigger === "update") {
        console.log("update triggered");
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.userId;
      return session;
    },
  },
  providers: [Github, Google],
  pages: {
    signIn: "/auth/auth",
  },
  session: {
    strategy: "jwt",
  },
  adapter: DynamoDBAdapter(client, {
    tableName: process.env.AWS_DYNAMODB_TABLE_NAME,
  }) as Adapter,
} satisfies NextAuthConfig;

export default config;
