// Define required modules
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');


// Define configuration
const app = express();
const PORT = process.env.PORT || 3001;


// Define Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


//Synchronise the database and open the server connection
sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  });
