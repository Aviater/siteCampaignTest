import React, { Component } from 'react';
import axios from 'axios';

import Row from '../Row/Row';

class ViewItem extends Component {

	constructor(props) {
		super(props);

		this.state = {
			items: []
		}
	}

	componentDidMount() {
		axios.get('http://localhost:5000/items/' + this.props.match.params.id)
			.then(response => {
				this.setState({
					items: response.data
				});
				console.log(response.data)
			})
			.catch(err => console.log('Error: ' + err))

	}

	itemsList() {
		return <Row key={this.state.items._id} id={this.state.items._id} name={this.state.items.name} deleteItem={this.deleteItem} />
	}

  	render() {
	    return (
	    	<div>

		    	{this.itemsList()}

	        </div>
	    )
  	}
}

export default ViewItem;
