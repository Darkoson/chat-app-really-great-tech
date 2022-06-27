declare module "express-session" {
  interface SessionData {
    userId: any;
  }
}
import { Request } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/user";

import { isEmailValid } from "../shared/validators/email-validator";
import { isPasswordValid } from "../shared/validators/password-validator";
import { IInfo, ILogin, IRegister, IUsers } from "../graphql/interfaces";

const saltRounds = 10;

export const getUser = async (id: any): Promise<User | IInfo> => {
  let user = await User.findOneBy({ id });
  return user ? user : { messages: ["user does not exist !"] };
};

export const getUserContacts = async (id: any): Promise<IUsers | IInfo> => {
  let users = await User.createQueryBuilder("User")
    .where("User.id != :id", { id })
    .getMany();
  return { users };
};

export const getUserVisibleContacts = async (
  id: any
): Promise<IUsers | IInfo> => {
  let users = await User.createQueryBuilder("Users")
    .where("Users.id != :id", { id })
    .getMany();
  return { users };
};

export const login = async (
  { email, password }: ILogin,
  req: Request
): Promise<User | IInfo> => {
  console.log("user id is : ", req.session.userId);
  console.log("session id is : ", req.session.id);

  try {
    const user = await User.findOneBy({ email });

    if (!user) {
      return { messages: ["Wrong Email."] };
    }

    if (!user.confirmed) {
      return {
        messages: ["User's registration email yet is not yet confirmed."],
      };
    }
    const passwordMatch = await bcrypt.compare(password, user?.password);
    if (!passwordMatch) {
      return {
        messages: ["Wrong Password."],
      };
    }

    if (!req.session.userId) {
      req.session.userId = user.id;
      console.log("Userid is set to: ", user.id);
    } else {
      console.log("user id exist already, it's:", user.id);
    }

    return user;
  } catch (error) {
    console.log("server error: ", error);

    return {
      messages: [
        "The server is temporarly unavailable, pleaes try again later",
      ],
    };
  }
};

export const register = async (
  input: IRegister,
  req: Request
): Promise<User | IInfo> => {
  const pwdResult = isPasswordValid(input.password);

  //checking if the email is valid
  const trimmedEmail = input.email.trim().toLowerCase();
  const emailErrorMsg = isEmailValid(trimmedEmail);
  if (emailErrorMsg) {
    return {
      messages: [emailErrorMsg],
    };
  }

  //checking if the password is valid
  if (!pwdResult.isValid) {
    return { messages: [pwdResult.message] };
  }

  try {
    //checking if the email does not exist already
    let existingUser = await User.findOneBy({ email: input.email });
    if (existingUser) {
      return { messages: ["Email already in use"] };
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(input.password, salt);

    // saving the user into the database
    const user = await User.create({
      ...input,
      email: trimmedEmail,
      password: hashedPassword,
    }).save();

    // initializing the pasword for security purpose
    user.password = "";
    return user;
  } catch (err) {
    console.log(err);
    return {
      messages: [
        "The server is temporarly unavailable, pleaes try again later",
      ],
    };
  }
};
