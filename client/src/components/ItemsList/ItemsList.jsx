import React, { Component } from 'react';
import axios from 'axios';

import Row from '../Row/Row';
import NewItem from '../NewItem/NewItem';
import Logo from './logo.png';

class ItemsList extends Component {

	constructor(props) {
		super(props);

		this.deleteItem = this.deleteItem.bind(this);

		this.state = {
			items: [],
			size: ''
		}
	}

	componentDidMount() {
		axios.get('http://localhost:5000/items/')
			.then(response => {
				this.setState({
					items: response.data,
					size: response.data.length,
				});
				console.log(response.data)
			})
			.catch(err => console.log('Error: ' + err))
	}

	deleteItem(id) {
		axios.delete('http://localhost:5000/items/' + id)
			.then(res => console.log(res.data));

		this.setState({
			items: this.state.items.filter(element => element._id !== id),
			size: this.state.size - 1
		})
	}

	itemsList() {
		if(this.state.items.length > 0) {
			return this.state.items.map(item => {
				return <Row key={item._id} id={item._id} name={item.name} deleteItem={this.deleteItem} />
			})
		} else {
			return <p>No items in database</p>
		}
	}

  	render() {
	    return (
	    	<div className='container'>

	    		<h4 className='counter'>{this.state.size + ' items in database.'}</h4>
				<hr />
		    	{this.itemsList()}

	        	<NewItem rerenderParentCallback={this.rerenderParentCallback}/>
	        	<img src={Logo} alt="SiteCampaign Logo" />

	        </div>
	    )
  	}
}

export default ItemsList;
