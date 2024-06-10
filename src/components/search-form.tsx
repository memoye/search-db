import { useSearchDb } from "../context/search-db-context";

const SearchForm = () => {
  const { searchFor } = useSearchDb();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Search books</h2>
      <input
        onChange={(e) => searchFor(e.target.value)}
        name="search"
        id="search"
        type="search"
      />
    </div>
  );
};

export default SearchForm;
