import {
  instance,
  tokenFormat,
  errorFormat,
  TokenReturn,
  ErrorReturn,
} from './helper';

export const fetchToken = async (
  name: string,
  currency: string,
  tokenContractAddress: string,
): Promise<TokenReturn|ErrorReturn> => {
  try {
    const response = await instance.get(`/coins/${name}/contract/${tokenContractAddress}`);
    return tokenFormat(response, currency);
  } catch (err) {
    return errorFormat(err);
  }
};

export const fetchSyncToken = (
  name: string,
  currency: string,
  tokenContractAddress: string,
  callback: (err: ErrorReturn|null, data?: TokenReturn) => void,
): void => {
  instance.get(`/coins/${name}/contract/${tokenContractAddress}`)
    .then(response => {
      callback(null, tokenFormat(response, currency));
    })
    .catch(err => {
      callback(errorFormat(err));
    });
};
