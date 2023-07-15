export type AppContextType = {
  isDark: boolean;
  coinsList: object[];
  exchangesList: object[];
  addToFavs: (coin: any) => void;
  removeFromFavs: (coin: any) => void;
  favsList: object[];
} | null;
