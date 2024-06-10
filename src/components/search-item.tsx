import { SearchItem as SearchItemType } from "../lib/types";

const SearchItem = ({ title, author, year }: Omit<SearchItemType, "id">) => {
  return (
    <div
      style={{
        border: "1px solid white",
      }}
    >
      <h3>
        {title} - <span style={{ color: "gray" }}>{year}</span>
      </h3>
      <p>{author}</p>
    </div>
  );
};

export default SearchItem;
