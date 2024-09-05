export type AppContextType = {
  isDark: boolean;
  exchangesList: object[];
  addToFavs: (coin: any) => void;
  removeFromFavs: (coin: any) => void;
  favsList: object[];
} | null;
