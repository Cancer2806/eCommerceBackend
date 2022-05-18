# eCommerce Backend  

![License](https://img.shields.io/badge/License-MIT-yellow.svg)
  

## Description

Provides the backend access to a mysql database, including creating and seeding of the database

  
## Table of Contents

- [Installation](#installation-notes)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)



## Installation Notes  

  Pull from Github and maintain the folder structure.  Run npm install to ensure all of the required modules are installed.  Enter your personal database access information into the ".env.example" file and rename to ".env".  to create the database, enter mysql and from the mysql prompt type "SOURCE db/schema.sql"  Quit mysql and return to the command line interface and then seed the database using "node seeds/index.js".  Finally, start the server by typing "node server.js" at the command line - this will open a port on 3001.  You can then test the routes using Insomnia or a similar product.   


## Usage 

  The backend operation can be tested using Insomnia or similar software.  Provides CRUD operations for Categories, Products and Product Tags, using the appropriate GET, POST, PUT and DELETE routes.   


## Features  

  The ability to view products, tags and categories by ID is useful.  Likewise the inclusion of the related product information when categories or tags are viewed, and the inclusion of category and tag information when products are viewed is very useful.   


## Credits  

  Node, Sequelize, Mysql2 were fundamental to the development.  Screencastify was used to create the Walkthrough video.  The project was developed as an assignment of the UWA Full Stack Developer Bootcamp.   


## Contributing  

  Contributions can be suggested through email   


## Testing  

  Testing can be carried out by calling the routes using Insomnia or similar software   



## Questions
Questions can be submitted via email

Github:  https://github.com/Cancer2806

Email:  frank.lavery@westnet.com.au


## License
This project is licensed under [MIT](https://opensource.org/licenses/MIT).
