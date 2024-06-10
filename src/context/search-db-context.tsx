import { createContext, useContext, useState } from "react";
import { SearchItem } from "../lib/types";
import { books } from "../lib/data";

export type SearchDbContextType = {
  term: string | null;
  searchItems: SearchItem[] | null;
  results: SearchItem[] | null;
  addSearchItem: (item: SearchItem) => void;
  searchFor: (term: string | null) => void;
};

// eslint-disable-next-line
const SearchDbContext = createContext<SearchDbContextType | null>(null);

export const SearchDbContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchItems, setSearchItems] = useState<SearchItem[] | null>(books);
  const [results, setResults] = useState<SearchItem[] | null>(null);

  const addSearchItem = (item: SearchItem) => {
    setSearchItems((prev) => (prev != null ? [...prev, item] : [item]));
  };

  const searchFor = (term: string | null) => {
    const searchResults = searchItems?.filter((item) => {
      if (!term) return;

      return (
        item?.title.toLowerCase().startsWith(term.toLowerCase()) ||
        item?.title.toLowerCase().includes(term.toLowerCase())
      );
    });

    searchResults && searchResults?.length > 0
      ? setResults(searchResults)
      : setResults(null);
  };

  return (
    <SearchDbContext.Provider
      value={{
        term: null,
        searchItems: null,
        addSearchItem,
        searchFor,
        results,
      }}
    >
      {children}
    </SearchDbContext.Provider>
  );
};

// eslint-disable-next-line
export const useSearchDb = () => {
  const context = useContext(SearchDbContext);
  if (context === null) {
    throw new Error("useSearchDb must be used within a SearchDbProvider");
  }

  return context;
};
