import { UserDataType } from "./type";

export const getUser =
  ({ User }: { User: any }) =>
  async ({ email }: { email: string }): Promise<UserDataType> => {
    let user = await User.findOne({ email });
    return user;
  };

