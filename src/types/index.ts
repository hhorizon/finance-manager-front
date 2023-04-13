export type PrivateBankCurrency = {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
};

export interface IUser {
  name: string;
  email: string;
  password: string;
  subscription: string;
  avatarURL: string;
  token: string | null;
  verify: boolean;
  verificationToken: string;
  // isValidPassword: (passwod: string) => Promise<boolean>;
}

export interface IContact {
  name: string;
  email: string;
  password: string;
  phone: string;
  favorite: boolean;
  // owner: ObjectId;
}

export interface UserDocument extends Document, IUser {}

export interface ContactDocument extends Document, IContact {}

export type UserCredential = {
  email: string;
  password: string;
};

// export type CustomJwtPayload = JwtPayload & {
//   id: string;
// };

export type Subscription = "starter" | "pro" | "business";

// //////////////////////////////////////////////
export type RegistrationCredential = {
  email: string;
  password: string;
  name: string;
};

export type LoginCredential = {
  email: string;
  password: string;
};

export type UserData = {
  name: string | null;
  email: string | null;
  subscription: string | null;
};

export type LoginResponsePayload = {
  token: string;
  user: UserData;
};

export type LoginResponse = {
  payload: LoginResponsePayload;
};

export type RefreshCurrentPayload = {
  user: UserData;
};

export type RefreshCurrentResponse = {
  payload: RefreshCurrentPayload;
};
