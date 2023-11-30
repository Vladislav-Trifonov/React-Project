function Create(params) {
  return (
    <section class="create">
      <h1>Добави Продукт</h1>

      <form class="createForm">
        <div>
          <label for="name">Име</label>
          <input
            name="name"
            id="name"
            autofocus
            placeholder="The Long Night"
            required
            min="4"
          />
        </div>

        <div>
          <label for="image">Снимка</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Image URL"
            required
          />
        </div>


        <div>
          <label for="description">Описание</label>
          <input
            type="text"
            name="description"
            id="description"
            list="description"
            placeholder="One of the best episodes ever"
            required
          />
        </div>

        <div>
          <label for="rating">Цена</label>
          <input
            type="text"
            name="rating"
            id="rating"
            placeholder="9.9"
            required
          />
        </div>

        <button type="submit">Добави</button>
      </form>
    </section>
  );
}
