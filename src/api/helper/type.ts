export interface CoinReturn {
  // attr
  name: string;
  symbol: string;
  lastUpdate: string;
  unit: string;
  // market
  marketCap: number;
  volume: number;
  currentPrice: number;
  high24Price: number;
  low24Price: number;
}

export interface TokenReturn {
  // attr
  name: string;
  symbol: string;
  lastUpdate: string;
  unit: string;
  // contract
  platform: string;
  address: string;
  // market
  marketCap: number;
  volume: number;
  currentPrice: number;
  high24Price: number;
  low24Price: number;
}

export interface ErrorReturn {
  status: number;
  msg: string;
}
