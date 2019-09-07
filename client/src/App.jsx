import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ItemsList from './components/ItemsList/ItemsList';
import ViewItem from './components/ViewItem/ViewItem';

class App extends Component {

  	render() {
	    return (
	    	<div>
	    		<Router>
	    			<Route path='/' exact component={ItemsList} />
		            <Route path='/:id' component={ViewItem} />
			    </Router>
	        </div>
	    )
  	}
}

export default App;
