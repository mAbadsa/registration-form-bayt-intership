import { Request, Response, NextFunction } from "express";
import { resData } from "../../types/response.t";
import { createUser, getUser } from "../../models/query";

const signup =
  ({
    User,
    boomify,
  }: {
    User: any;
    boomify: (statusCode: number, message: string) => void;
  }) =>
  async (req: Request, res: Response<resData>, next: NextFunction) => {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      gender,
      accountType,
      address,
      birthdate,
    } = req.body;
    console.log({ body: req.body });
    try {
      const user = await getUser({ User })({ email });
      if (user) {
        // return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        throw boomify(400, "User already exist.");
      }
      const _user = await createUser({ User })({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        address,
        gender,
        birthdate,
        accountType,
      });
      return res.status(201).json({
        success: true,
        statusCode: 201,
        message: "Signed up successfully",
        data: {
          id: _user.id,
          firstName: _user.firstName,
          lastName: _user.lastName,
          phoneNumber: _user.phoneNumber,
          email: _user.email,
          gender: _user.gender,
          accountType: _user.accountType,
          address: _user.address,
          birthdate: _user.birthdate,
        },
      });
    } catch (error: any) {
      next(error);
    }
  };

export default signup;

