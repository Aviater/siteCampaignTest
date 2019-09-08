import React, { Component } from 'react';

const Row = props => {

	const GoBack = () => {
		window.history.back();
	}

	return (
        <div>
      		<p className='spRow'>{props.id} - {props.name}</p>
      		<div className='btn-group'>
	      		{window.location.pathname !== '/' ? <button className='btn btn-outline-secondary' onClick={GoBack}>Back</button> : <a className='btn btn-outline-info' href={props.id}>View</a>}
	      		<button className='btn btn-outline-danger' onClick={() => {props.deleteItem(props.id)}} >Delete</button>
    		</div>
    		<hr />
    	</div>
	)

}

export default Row;