import React from 'react';

class FilterForm extends React.Component {
    render() {
        return (
            <>
                <form className="form">
                <label for="numOfHorns">Filter by Horns</label>
                <br/>
                <select className="formSelect" name="numOfHorns">
                 <option>All Beasts</option>
                 <option>1 Horn</option>
                 <option>2 Horns</option>
                 <option>3 Horns</option>
                 <option>100 Horns</option>
                </select>
               </form>
            </>
        )
    }
}

export default FilterForm;
