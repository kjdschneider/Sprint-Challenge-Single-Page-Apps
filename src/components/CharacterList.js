import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import LocationCard from './LocationCard';
import EpisodeCard from './EpisodeCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState(' ');
  const [searchResults, setSearchResults] = useState(characters)
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  

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

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
        .then(res => {
          console.log('location success: ', res);
          setLocations(res.results)
        })
        .catch(err => {
          console.log('location error: ', err);
        })
  }, [])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(res => {
        console.log('episode success: ', res);
        setEpisodes(res.results);
      })
      .catch(err => {
        console.log('episodes error: ', err);
      })
  }, [])

  return (
    <div className='info'>

      <section className="character-list">
        <h2>Characters</h2>
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

      <section className='location-list'>
        <h2>Locations</h2>
        {locations.map(location => {
          return (
            <div key={location.id} className='location-container'>
              <LocationCard location={location} />
            </div>
          )
        })}
      </section>

      <section className='episode-list'>
        <h2>Episodes</h2>
        {episodes.map(episode => {
          return (
            <div className='ep-container' key={episode.id}>
              <EpisodeCard episode={episode} />
            </div>
          )
        })}
      </section>

    </div>
  );
}
