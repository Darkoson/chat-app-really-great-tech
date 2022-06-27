import { User } from "../models/user";
import * as userService from "../services/user-service";
import { GqlContext } from "./context";
import { GQLResult, ILogin, IRegister } from "./interfaces";

// default initialization of the graphQl result
const gqlResult: GQLResult = { ok: true, res: {} };

export const resolvers = {
  Data: {
    __resolveType(obj: any, context: GqlContext, info: any) {
      if (obj.messages) {
        return "Info";
      }
      if (obj.users) {
        return "Users";
      }
      return "User";
    },
  },

  Query: {
    me: async (_: any, __: any, ctx: GqlContext): Promise<GQLResult> => {
      try {
        if (!ctx.req.session?.userId) {
          gqlResult.ok = false;
          gqlResult.res = { messages: ["User not logged in."] };
        } else {
          let id = ctx.req.session.userId;
          gqlResult.ok = true;
          gqlResult.res = await userService.getUser(id);
        }
        return gqlResult;
      } catch (ex) {
        throw ex;
      }
    },
    getAllUserContacts: async (
      obj: any,
      args: { id: string },
      ctx: GqlContext,
      info: any
    ): Promise<GQLResult> => {
      try {
        gqlResult.ok = true;
        gqlResult.res = await userService.getUserContacts(args.id);
        console.log("args=", args);
        console.log("res=", gqlResult.res);

        return gqlResult;
      } catch (ex) {
        throw ex;
      }
    },
  },

  Mutation: {
    login: async (
      _: any,
      args: { input: ILogin },
      ctx: GqlContext
    ): Promise<GQLResult> => {
      try {
        gqlResult.res = await userService.login(args.input, ctx.req);
        gqlResult.ok = gqlResult.res instanceof User;
        return gqlResult;
      } catch (ex) {
        throw ex;
      }
    },
    register: async (
      _: any,
      args: { input: IRegister },
      ctx: GqlContext
    ): Promise<GQLResult> => {
      try {
        gqlResult.res = await userService.register(args.input, ctx.req);
        gqlResult.ok = gqlResult.res instanceof User;
        return gqlResult;
      } catch (ex) {
        console.log(ex.message);
        throw ex;
      }
    },
    logout: async (_: any, __: any, ctx: GqlContext): Promise<GQLResult> => {
      try {
        ctx.req.session?.destroy((err: any) => {
          if (err) {
            console.log("failed to destroy the session");
            return;
          }
          console.log("logged out successfully", ctx.req.session?.userId);
        });
        gqlResult.res = { messages: ["logged out successfully"] };

        gqlResult.res = { messages: ["logged out successfully"] };
        gqlResult.ok = true;
        return gqlResult;
      } catch (ex) {
        throw ex;
      }
    },
  },
};
