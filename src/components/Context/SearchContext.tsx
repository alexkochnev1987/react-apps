import { createContext, useContext } from 'react';
export type SearchContent = {
  search: string;
  setSearch: (c: string) => void;
};

export const MyGlobalContext = createContext<SearchContent>({
  search: '',
  setSearch: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);
