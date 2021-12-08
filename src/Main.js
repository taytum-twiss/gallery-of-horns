import React from 'react';
import HornedBeast from './HornedBeast.js';
import beastData from'./beastData.json';

class Main extends React.Component {
    render() {
        return (
           <> 
            <p>Horned Beasts coming soon...</p>
            {beastData.map((currentValueBeast, idx) => (
            <HornedBeast key={idx} beastObj={currentValueBeast} />
            ))}
           </> 
        )
    }
}

export default Main;