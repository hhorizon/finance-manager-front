export type TransactionType = "spending" | "incoming";

export type Category = { name: string; color: string };

export type Categories = {
  incoming: Array<Category>;
  spending: Array<Category>;
};
export type Period = {
  startDate: string;
  endDate: string;
};

export type Transaction = {
  _id: string;
  type: TransactionType;
  category: Category;
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

export type AddFormValues = {
  category: string;
  sum: number;
  date: Date;
  comment: string;
};

export type StatisticsByCategories = {
  categories: Array<{
    name: string;
    sum: number;
    color: string;
  }>;
  totalSum: number;
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
export type RefreshCurrentResponsData = {
  user: User;
};

export type RefreshCurrentResponse = {
  payload: RefreshCurrentResponsData;
};

// // get all transactions
export type AllTransactions = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  page: number;
  totalPages: number;
  totalTransaction: number;
  transactions: Transaction[];
  nextPage: number | null;
};

export type AllTransactionsData = {
  transactions: AllTransactions;
  balance: number | null;
  categories: Categories;
};

export type AllTransactionsResponse = {
  payload: AllTransactionsData;
};

// // add transaction
export type AddTransactionRequestBody = Omit<Transaction, "_id" | "balance">;

export type AddTransactionResponse = {
  payload: Transaction;
};

// //update transaction
export type UpdateTransactionData = {
  transaction: Transaction;
};

export type UpdateTransactionResponse = {
  payload: UpdateTransactionData;
};

// //delete transaction
export type DeleteTransactionData = {
  transaction: Transaction;
};

export type DeleteTransactionResponse = {
  payload: DeleteTransactionData;
};

// // update balance
export type UpdateBalanceData = {
  balance: number | null;
};

export type UpdateBalanceResponse = {
  payload: UpdateBalanceData;
};

// // get statistics
export type Statistics = {
  incomingStatistics: StatisticsByCategories;
  spendingStatistics: StatisticsByCategories;
};

export type StatisticsData = {
  statistics: Statistics;
};

export type StatisticsResponse = {
  payload: StatisticsData;
};
