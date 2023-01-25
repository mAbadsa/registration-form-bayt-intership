export interface UserDataType {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  gender?: string;
  birthdate?: string;
  email: string;
  password: string;
  confirmPassword;
  address?: string;
  accountType: string;
}

export type UserContextType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

