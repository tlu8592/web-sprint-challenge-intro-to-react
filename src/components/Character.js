// Write your Character component here
import React from 'react';
import styled from 'styled-components';
import CharacterDetails from './CharacterDetails';

const Character = props => {
    const { characters } = props;

    const StyledDiv = styled.div`
        // background-color: white;
        border: 3px solid green;
        margin-bottom: 1rem;
        color: white;
    `;

    const StyledList = styled.ul`
        font-size: 1.2rem;
        text-align: left;
    `;



    return (
        <StyledDiv>
            <h2>{characters.name}</h2>
            <CharacterDetails characterDetails={characters} />
        </StyledDiv>
    );
}

export default Character;