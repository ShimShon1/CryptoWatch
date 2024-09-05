export type AppContextType = {
  isDark: boolean;
  addToFavs: (coin: any) => void;
  removeFromFavs: (coin: any) => void;
  favsList: object[];
} | null;
