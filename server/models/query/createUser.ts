import { UserDataType } from "./type";


export const createUser =
  ({ User }: { User: any }) =>
  async ({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    gender,
    birthdate,
    address,
    accountType,
  }: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    gender: string;
    birthdate: string;
    address: string;
    accountType: string;
  }): Promise<UserDataType> => {
    let user = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      address,
      birthdate,
      gender,
      accountType,
    });

    return await user.save();
  };

