import { useSearchDb } from "../context/search-db-context";

export const AddItem = () => {
  const { addSearchItem } = useSearchDb();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement),
          title = formData.get("title") as string,
          author = formData.get("author") as string,
          year = formData.get("year") as string;

        console.log({
          id: Math.floor(Math.random() * 1000),
          author,
          title,
          year: Number(year),
        });

        addSearchItem({
          id: Math.floor(Math.random() * 1000),
          author,
          title,
          year: Number(year),
        });
      }}
    >
      <h2>Add Item to DB</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="title">Book title</label>
        <input name="title" id="title" type="title" placeholder="Book Title" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="author">Author</label>
        <input name="author" id="author" type="author" placeholder="author" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        <label htmlFor="year">Year</label>
        <input name="year" id="year" type="text" placeholder="Date" />
      </div>

      <button>Add Item</button>
    </form>
  );
};
