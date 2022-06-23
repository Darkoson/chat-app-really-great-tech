import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "../graphql/typedefs";
import { resolvers } from "../graphql/resolvers";
import {Express} from "express"
import { GqlContext } from "../graphql/context";
import { ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginLandingPageProductionDefault } from "apollo-server-core";

export const startGqlServer = async (app: Express): Promise<ApolloServer> => {
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      context: (ctx: GqlContext): GqlContext => ctx,
      plugins: [
        process.env.NODE_ENV == "production"
          ? ApolloServerPluginLandingPageProductionDefault()
          : ApolloServerPluginLandingPageGraphQLPlayground(),
      ],
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    
  return apolloServer
};



