import { GQLResult, ISendMessage } from "../graphql/interfaces";
import { Chat } from "../models/chat";

export const sendMessage = async (chat: ISendMessage): Promise<GQLResult> => {
  let result: GQLResult = { ok: true, res: { info: "" } };
  try {
    await Chat.create({ ...chat }).save();
  } catch (error) {
    result.ok = false;
    result.res = { info: error.message };
  }
  return result;
};

export const getMessages = async (
  userId1: string,
  userId2: string
): Promise<GQLResult> => {
  let result: GQLResult = { ok: true, res: { info: "" } };
  try {
    let chats = await Chat.getRepository().find({
      where: [
        { senderId: userId1, receiverId: userId2 },
        { senderId: userId2, receiverId: userId1 },
      ],
      order: { created_at: "ASC" },
    });

    result.res = { chats };
    return result;
  } catch (error) {
    result.ok = false;
    result.res = { info: error.message };
  }
  return result;
};
