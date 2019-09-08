import React, { Component } from 'react';
import axios from 'axios';

class NewItem extends Component {

	constructor(props) {
		super(props);

		this.onChangeName = this.onChangeName.bind(this);

		this.state = {
			name: '',
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
		}

		axios.post('http://localhost:5000/items/add/', item)
			.then(res => console.log(res.data))
			.catch(err => console.log('Error: ' + err));
	}

  	render() {
	    return (
	    	<form className='input-group mb-3' onSubmit={this.onSubmit.bind(this)}>
	    		<input placeholder='Insert new item...' className='form-control' type='text' onChange={this.onChangeName}/>
	    		<input className='btn btn-outline-success' type='submit' value='Add' />
	    	</form>
	    )
  	}
}

export default NewItem;
