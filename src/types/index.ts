export type TransactionType = "spending" | "incoming";
export type Categories = {
  incoming: Array<string>;
  spending: Array<string>;
};

export type Transaction = {
  _id: string;
  type: TransactionType;
  category: string;
  sum: number;
  date: Date;
  balance: number;
  comment: string;
};

export type User = {
  name: string | null;
  email: string | null;
  balance: number | null;
  subscription: string | null;
  categories: Categories;
};

export type PrivateBankCurrency = {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
};

export type RegistrationFormValues = {
  email: string;
  password: string;
  repeatedPassword: string;
  name: string;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

// Axios types
// // registration
export type RegistrationCredential = {
  email: string;
  password: string;
  name: string;
};

// // login
export type LoginCredential = {
  email: string;
  password: string;
};

export type LoginResponseData = {
  token: string;
  user: User;
};

export type LoginResponse = {
  payload: LoginResponseData;
};

// // current
export type RefreshCurrentData = {
  user: User;
};

export type RefreshCurrentResponse = {
  payload: RefreshCurrentData;
};

// // get all transactions
export type AllTransactionsData = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  page: number;
  totalPages: number;
  totalTransaction: number;
  transactions: Transaction[];
  nextPage: number | null;
  balance: number;
};

export type AllTransactionsResponse = {
  payload: AllTransactionsData;
};

// // add transaction
export type AddTransactionRequestBody = Omit<Transaction, "_id" | "balance">;

export type AddTransactionResponse = {
  payload: Transaction;
};

// // update balance
export type UpdateBalanceData = {
  balance: number | null;
};

export type UpdateBalanceResponse = {
  payload: UpdateBalanceData;
};
