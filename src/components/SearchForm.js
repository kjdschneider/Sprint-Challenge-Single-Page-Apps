import React from "react";

export default function SearchForm({searchTerm, setSearchTerm, characters, setSearchResults}) {
  function changeHandler(event) {
    setSearchTerm(event.target.value);

    const results = characters.filter(char => {
      return char.name.toLowerCase().includes(searchTerm.toLowerCase());
    })

    setSearchResults(results);
  }
 
  return (
    <section className="search-form">
      <form>
        <label htmlFor='search'>
          Search:
          <input 
            id='search'
            name='search'
            type='text'
            placeholder='Start typing to find your favorite character!'
            onChange={changeHandler}
            value={searchTerm} />
        </label>
      </form>
    </section>
  );
}
