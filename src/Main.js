import React from 'react';
import HornedBeast from './HornedBeast.js';
import beastData from'./beastData.json';
import Container from "react-bootstrap/Container";


class Main extends React.Component {
    render() {
        return (
           <Container> 
            <p>Horned Beasts coming soon...</p>
            {beastData.map((currentValueBeast, idx) => (
            <HornedBeast key={idx} beastObj={currentValueBeast} />
            ))}
           </Container> 
        )
    }
}

export default Main;