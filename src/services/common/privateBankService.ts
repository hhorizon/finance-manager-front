import axios from "axios";
import { PrivateBankCurrency } from "../../types";

type GetCurrencyResponse = {
  currency: PrivateBankCurrency[];
};

export const getCurrency = async () => {
  const { data } = await axios.get<GetCurrencyResponse>(
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",
  );

  return data.currency;
};
