import React, { Component } from 'react';

const Row = props => {

	const GoBack = () => {
		window.history.back();
	}

	return (
        <div>
      		<h1>{props.id} - {props.name}</h1>
      		{window.location.pathname !== '/' ? <button onClick={GoBack}>Back</button> : <a href={props.id}>View</a>}
      		<button onClick={() => {props.deleteItem(props.id)}} >Delete</button>
    	</div>
	)

}

export default Row;