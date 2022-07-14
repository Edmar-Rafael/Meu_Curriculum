import { MouseEvent, ReactNode } from "react";

export type PersonalDataType = {
  fullName?: string;
  birthday?: string;
  zipCode?: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  complement?: string;
  email?: string;
  phone?: string;
  textArea?: string;
}

export type UserProps = {
  id: number;
  token: string;
  name: string;
  password: string;
}

export type ButtonType = {
  children?: ReactNode;
  isCustom?: boolean;
  pdf?: boolean;
  text?: string;
  to_register?: boolean;
  fa_eye_button?: boolean;
  type?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}