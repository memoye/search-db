import SearchForm from "./components/search-form";
import SearchItem from "./components/search-item";
import { useSearchDb } from "./context/search-db-context";

function App() {
  const { results } = useSearchDb();

  return (
    <div>
      <SearchForm />
      {results ? (
        results.map((item) => <SearchItem key={item.id} {...item} />)
      ) : (
        <h2>No Items Found</h2>
      )}
    </div>
  );
}

export default App;
