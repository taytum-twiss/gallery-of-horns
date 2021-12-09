import React from 'react';
import { Card } from 'react-bootstrap';

class HornedBeast extends React.Component {
    render() {
        return (
     <div>
      <h2>{this.props.beastObj.title}</h2>
      <img
        src={this.props.beastObj.image_url}
        alt={this.props.beastObj.description}
        title={this.props.beastObj.title}
       //style={{ width: "20%" }} 
        />
      <p>this.props.beastObj.description</p>
     </div>

        )
    }
}

export default HornedBeast;