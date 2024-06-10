const addSearchItem = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
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
    </form>
  );
};
