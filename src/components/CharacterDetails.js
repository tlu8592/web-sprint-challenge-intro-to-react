import React from 'react';
import styled from 'styled-components';

const CharacterDetails = props => {
    const { characterDetails } = props;

    const StyledDiv = styled.div`
        background-color: black;
    `;

    const StyledList = styled.ul`
        font-size: 1.7rem;
        text-align: left;
    `;

    return (
        <StyledDiv>
            <StyledList>
                <li>Birth Year: {characterDetails.birth_year}</li>
                <li>Gender: {characterDetails.gender}</li>
                <li>Height: {characterDetails.height}</li>
                <li>Mass: {characterDetails.mass}</li>
                <li>Eye Color: {characterDetails.eye_color}</li>
                <li>Hair Color: {characterDetails.hair_color}</li>
                <li>Skin Color: {characterDetails.skin_color}</li>
            </StyledList>
        </StyledDiv>
    );
}

export default CharacterDetails;