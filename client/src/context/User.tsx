import {
  createContext,
  ReactElement,
  ReactNode,
  ProviderProps,
  FC,
} from "react";
import { UserContextType } from "../type";

export const UserContext = createContext<UserContextType>({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
});

const UserProvider: FC<{
  children: ReactElement | ReactNode | string | undefined;
  value: { [key: string]: any };
}> = ({ children, value }) => {
  return (
    <UserContext.Provider
      value={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      }}
    >
      {{ children }}
    </UserContext.Provider>
  );
};

export default UserProvider;

