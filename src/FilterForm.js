import React from 'react';
import Form from 'react-bootstrap/Form';
import beastData from './beastData.json'

class FilterForm extends React.Component {

    filter = (event) => {
        console.log('event.target.value:', event.target.value)
        const numOfHorns = parseInt(event.target.value);


        let gallery = beastData;
        if (numOfHorns) {
            gallery = beastData.filter(beastObj => beastObj.horns === numOfHorns);
        }
//TODO: Lift the new state of the gallery to it's parent component, to be rendered.
//To be continued tomorrow…
//Get ready to implement state and props!
//Start thinking about ways we can refactor this functionality...

    }

    render() {
        return (
            <>
                <Form className="form">
                <Form.Label for="numOfHorns">Filter by Horns</Form.Label>
                <br/>
                <Form.Select className="formSelect" name="numOfHorns" onChange={this.filter}>
                 <option value=''>All Beasts</option>
                 <option value='1'>1 Horn</option>
                 <option value='2'>2 Horns</option>
                 <option value='3'>3 Horns</option>
                 <option value='100'>100 Horns</option>
                </Form.Select>
               </Form>
            </>
        );
    }
}

export default FilterForm;
