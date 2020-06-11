import {
  instance,
  coinFormat,
  errorFormat,
  CoinReturn,
  ErrorReturn,
} from './helper';

export const fetchCoin = async (
  name: string,
  currency: string,
): Promise<CoinReturn|ErrorReturn> => {
  try {
    const response = await instance.get(`/coins/${name}`);
    return coinFormat(response, currency);
  } catch (err) {
    return errorFormat(err);
  }
};

export const fetchSyncCoin = (
  name: string,
  currency: string,
  callback: (err: ErrorReturn|null, data?: CoinReturn) => void,
): void => {
  instance.get(`/coins/${name}`)
    .then(response => {
      callback(null, coinFormat(response, currency));
    })
    .catch(err => {
      callback(errorFormat(err));
    });
};
