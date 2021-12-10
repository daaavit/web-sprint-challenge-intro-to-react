// Write your Character component here
import React from "react";
// import styled, from "styled-components";

const Character = (props) => {
    let star = props.star;
    console.log("Character props", star);
    return (
        <div>
            <span>{star.name}</span>
            <span>{star.mass}</span>
        </div>
    );
}

export default Character;