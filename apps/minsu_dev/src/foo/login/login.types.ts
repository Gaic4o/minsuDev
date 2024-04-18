import { ReactNode } from 'react';

export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface AuthContextType {
  login: (email: string, password: string) => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}
