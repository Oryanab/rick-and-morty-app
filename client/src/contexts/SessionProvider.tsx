import React, { createContext, useCallback, useContext, useState } from "react";

interface User {
  username: string;
  email: string;
  password: string;
}

interface SessionContextProps {
  children: React.ReactNode;
}

interface SessionContextReturnType {
  user: User | null;
  isLoading: boolean;
  login: () => void;
  register: () => void;
}

const SessionContext = createContext<SessionContextReturnType | null>(null);

export const SessionProvider: React.FC<SessionContextProps> = ({
  children,
}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkSession = useCallback(() => {}, []);
  const login = useCallback(() => {}, []);
  const register = useCallback(() => {}, []);

  const value: SessionContextReturnType = {
    user,
    login,
    register,
    isLoading,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
