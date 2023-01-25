import { Document } from "mongoose";

export interface User extends Document {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  gender: string;
  birthdate: Date;
  address: string;
  accountType: string;
  createdAt: Date;
}

