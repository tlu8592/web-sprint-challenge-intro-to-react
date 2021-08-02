// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';
import CharacterDetails from './CharacterDetails';

const Character = props => {
    const { characters } = props;

    const [info, setInfo] = useState(false);

    const StyledDiv = styled.div`
        border: 3px solid green;
        margin-bottom: 1rem;
        color: white;
    `;

    return (
        <StyledDiv>
            <h1>{characters.name}</h1>
            {info === true ? <CharacterDetails characterDetails={characters} /> : false}
            <button onClick={() => setInfo(!info)}>Info</button>
        </StyledDiv>
    );
}

export default Character;