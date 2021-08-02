import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharacterData(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  const StyledHeader = styled.h1`
    font-size: 2rem;
  `;

  return (
    <div className="App">
      <StyledHeader className="Header">React Wars</StyledHeader>
      {characterData.map(character => <Character characters={character} />)}
    </div>
  );
}

export default App;
