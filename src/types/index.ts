export type TransactionType = "spending" | "incoming";

export type Category = { name: string; color: string };

export type CategoriesList = {
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

export type AddCategoryFormValues = {
  type: TransactionType;
  name: string;
};

export type AddTransactionFormValues = {
  category: { name: string; color: string };
  sum: number;
  date: Date;
  comment: string;
};

export type StatisticsCategories = Array<{
  name: string;
  sum: number;
  color: string;
}>;

export type StatisticsCategoriesData = {
  categories: StatisticsCategories;
  totalSum: number;
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

export type LoginResponseData = {
  token: string;
  user: User;
};

export type LoginResponse = {
  payload: LoginResponseData;
};

export type RefreshCurrentResponsData = {
  user: User;
};

export type RefreshCurrentResponse = {
  payload: RefreshCurrentResponsData;
};

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
  categories: CategoriesList;
};

export type AllTransactionsResponse = {
  payload: AllTransactionsData;
};

export type AddTransactionRequestBody = Omit<Transaction, "_id" | "balance">;

export type AddTransactionResponse = {
  payload: Transaction;
};

export type UpdateTransactionData = {
  transaction: Transaction;
};

export type UpdateTransactionResponse = {
  payload: UpdateTransactionData;
};

export type DeleteTransactionData = {
  transaction: Transaction;
};

export type DeleteTransactionResponse = {
  payload: DeleteTransactionData;
};

export type UpdateBalanceData = {
  balance: number | null;
};

export type UpdateBalanceResponse = {
  payload: UpdateBalanceData;
};

export type Statistics = {
  incomingStatistics: StatisticsCategoriesData;
  spendingStatistics: StatisticsCategoriesData;
};

export type StatisticsData = {
  statistics: Statistics;
};

export type StatisticsResponse = {
  payload: StatisticsData;
};

export type AddCategoryData = {
  categories: CategoriesList;
};

export type AddCategoryResponse = {
  payload: AddCategoryData;
};
