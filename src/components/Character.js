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

    const StyledH1 = styled.h1`
        color: blue;
    `;

    const StyledButton = styled.button`
        width: 6rem;
        height: 3.8rem;
        font-size: 1.3rem;
        margin-bottom: 10px;
        border-radius: 10px;
    `;

    return (
        <StyledDiv>
            <StyledH1>{characters.name}</StyledH1>
            <StyledButton onClick={() => setInfo(!info)}>Info</StyledButton>
            {info === true ? <CharacterDetails characterDetails={characters} /> : false}
        </StyledDiv>
    );
}

export default Character;