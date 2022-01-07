import React from 'react';
import HornedBeast from './HornedBeast.js';
import beastData from'./beastData.json';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FilterForm from "./FilterForm";

class Main extends React.Component {
    render() {
        return (
           <Container> 
            <FilterForm />
            <Row xs={2} md={3} lg={4} xl={5}>
            {beastData.map((currentValueBeast, idx) => (
            <HornedBeast key={idx} beastObj={currentValueBeast} />
            ))}
            </Row>
           </Container> 
        )
    }
}

export default Main;