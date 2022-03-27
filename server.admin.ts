import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import PostResolver from "./admin/services/post/post.resolver";
import { PrismaClient } from "@prisma/client";

const app: express.Application = express();
const path = "/admin/graphql";
const PORT = process.env.PORT || 4000;
const prisma = new PrismaClient({
  //log: ["query", "info", "warn", "error"],
});

const main = async () => {
  const schema = await buildSchema({
    resolvers: [PostResolver],
    validate: false,
  });

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    tracing: true,
    context: {
      prisma,
    },
  });

  apolloServer.applyMiddleware({ app, path });

  app.listen(PORT, () => {
    console.log(`🚀 started http://localhost:${PORT}${path}`);
  });
};

main();
