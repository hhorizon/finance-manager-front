export type PrivateBankCurrency = {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
};

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

// ///////////////////// //

export type TransactionType = "spending" | "incoming";

export type Transaction = {
  _id: string;
  type: TransactionType;
  category: string;
  sum: number;
  date: Date;
  comment: string;
};

export type AllTransactionsData = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  page: number;
  totalPages: number;
  totalTransaction: number;
  transaction: Transaction[];
  nextPage: number | null;
};

export type AllTransactionsResponse = {
  payload: AllTransactionsData;
};

export type AddTransactionResponse = {
  payload: Transaction;
};

export type AddTransactionRequestBody = Omit<Transaction, "_id">;
