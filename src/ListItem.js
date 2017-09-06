import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
	super(props);
	this.state = { //color: 'black',
                   amDone: false 
        };
    }

    handleClick() {
	// Implement this function!
	this.setState({amDone: !this.state.amDone});
    }

  render() {
    var item = this.props.item;
    var name = item.name;
    var iColor = this.state.amDone?'grey':'black';
    //console.log(cToggle);

    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: iColor}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

