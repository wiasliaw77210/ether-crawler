import { AxiosResponse, AxiosError } from 'axios';
import { dateParser } from './date';
import { CoinReturn, TokenReturn, ErrorReturn } from './type';

export const coinFormat = (
  response: AxiosResponse,
  currency: string,
): CoinReturn => ({
  // attr
  name: response.data['name'],
  symbol: response.data['symbol'],
  lastUpdate: dateParser(response.data['last_updated']),
  unit: currency,
  // market
  marketCap: response.data.market_data.market_cap[currency],
  volume: response.data.market_data.total_volume[currency],
  currentPrice: response.data.market_data.current_price[currency],
  high24Price: response.data.market_data.high_24h[currency],
  low24Price: response.data.market_data.low_24h[currency],
});

export const tokenFormat = (
  response: AxiosResponse,
  currency: string,
): TokenReturn => ({
  // attr
  name: response.data['name'],
  symbol: response.data['symbol'],
  lastUpdate: dateParser(response.data['last_updated']),
  unit: currency,
  // contract
  platform: response.data['asset_platform_id'],
  address: response.data['contract_address'],
  // market
  marketCap: response.data.market_data.market_cap[currency],
  volume: response.data.market_data.total_volume[currency],
  currentPrice: response.data.market_data.current_price[currency],
  high24Price: response.data.market_data.high_24h[currency],
  low24Price: response.data.market_data.low_24h[currency],
});

export const errorFormat = (
  err: AxiosError,
): ErrorReturn => ({
  status: err?.response?.status || 500,
  msg: err?.response?.data.error,
});
