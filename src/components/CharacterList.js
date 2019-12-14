import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState(' ');
  const [searchResults, setSearchResults] = useState(characters)

  

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log('Success: ', res);
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  }, []);

  return (
    <section className="character-list">
      <SearchForm 
        characters={characters}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSearchResults={setSearchResults} />
      {searchResults.map(char => {
        return (
          <div key={char.id} className='char-container'>
            <CharacterCard char={char} />
          </div>
        )
      })}
    </section>
  );
}
