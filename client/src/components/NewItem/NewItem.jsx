import React, { Component } from 'react';
import axios from 'axios';

class NewItem extends Component {

	constructor(props) {
		super(props);

		this.onChangeName = this.onChangeName.bind(this);

		this.state = {
			name: '',
			size: ''
		}
	}

	onChangeName(e) {
		this.setState({
			name: e.target.value
		});
	}

	onSubmit(e) {

		let item = {
			name: this.state.name,
			size: this.state.size + 1
		}

		axios.post('http://localhost:5000/items/add/', item)
			.then(res => console.log(res.data))
			.catch(err => console.log('Error: ' + err));
	}

  	render() {
	    return (
	    	<form onSubmit={this.onSubmit.bind(this)}>
	    		<input type='text' onChange={this.onChangeName}/>
	    		<input type='submit' value='Add' />
	    	</form>
	    )
  	}
}

export default NewItem;
