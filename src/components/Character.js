// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharWapper = styled.div`
 .charNames{
     display: flex;
     flex-direction: row;
     justify-content: space-evenly;
     font-weight: bold;
     color: black;
     font-size: 1.5em;
     letter-spacing: 2px;
     padding: 30px;
 }

`


const Character = (props) => {
    let star = props.star;
    console.log("Character props", star);
    return (
        <CharWapper>
            <div class="charNames">
                <span>{props.star.name}</span> <span>{star.birth_year}</span>
            </div>
            {/* <div >
            <span>{star.birth_year}</span>
            </div> */}
        </CharWapper>
    );
}

export default Character;