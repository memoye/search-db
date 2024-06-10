import { AddItem } from "./components/add-search-item";
import SearchForm from "./components/search-form";
import SearchItem from "./components/search-item";
import { useSearchDb } from "./context/search-db-context";

function App() {
  const { results } = useSearchDb();

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      {results ? (
        results.map((item) => <SearchItem key={item.id} {...item} />)
      ) : (
        <h2
          style={{
            color: "gray",
          }}
        >
          No Items Found
        </h2>
      )}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <SearchForm />
        <AddItem />
      </div>
    </div>
  );
}

export default App;
