/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { Spin } from "antd";
import AuthApi from "apis/AuthApi";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getSignoutUri } from "utils/getSignoutUri";
// import { IUser } from 'interface/user.interface';

// type UserContextValues = {
//   user?: IUser;
//   getUser: () => void;
//   signOut: () => void;
// };

const UserContext = createContext<any>(undefined as never);

const useUser = (): any => useContext(UserContext);

const UserProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [user, setUser] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [user, setUser] = useState<IUser>();

  const handleRemoveToken = () => {
    localStorage.removeItem("token");
    window.location.replace(getSignoutUri());
  };

  const { mutate: getUser } = useMutation({
    mutationFn: AuthApi.getMe,
    onSuccess: (response) => {
      setUser(response);
      setIsLoading(false);
    },
    onError: (error) => {
      handleRemoveToken();
    },
  });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setIsLoading(false);
      return;
    }
    getUser();
  }, []);

  const signOut = () => {
    handleRemoveToken();
  };

  return (
    <UserContext.Provider value={{ user, getUser, signOut, isLoading }}>
      <Spin className="!max-h-full" size="large" spinning={isLoading}>
        {children}
      </Spin>
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
