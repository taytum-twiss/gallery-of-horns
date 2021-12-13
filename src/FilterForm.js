import React from 'react';
import Form from 'react-bootstrap/Form';

class FilterForm extends React.Component {
    render() {
        return (
            <>
                <Form className="form">
                <Form.Label for="numOfHorns">Filter by Horns</Form.Label>
                <br/>
                <Form.Select className="formSelect" name="numOfHorns">
                 <option>All Beasts</option>
                 <option>1 Horn</option>
                 <option>2 Horns</option>
                 <option>3 Horns</option>
                 <option>100 Horns</option>
                </Form.Select>
               </Form>
            </>
        )
    }
}

export default FilterForm;
