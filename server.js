const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();

// Middleware and Cors
app.use(cors());
app.use(express.json());

// Database connection
const uri = process.env.MLAB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB connection successful...');
});

// Use routes
const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

// Production build
if(process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static(path.resolve(__dirname, './client/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ' + port + '...'));

/* Start server with:

npm run dev start

Will open the Express server on port 5000 and React server on port 8080 on local machine. */

module.exports = app;