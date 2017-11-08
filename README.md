# Node.js API

This project uses the following technologies:
1. Web - Node.js
2. DB - MongoDB
3. Testing - Mocha/Chai
4. Documentation - apidocjs

## How to run locally

1. `git clone`
2. Edit the enviroment config files (/config/default.json for example) with your DB connection details.
1. `npm install`
3. `docker-compose up`

For example endpoints and documentation please [HERE](https://enigmatic-wildwood-36741.herokuapp.com/docs/)

## To run tests locally via docker
`docker-compose run web npm test`

![alt text](https://github.com/bgthomas/Node-API/blob/master/testing.gif "test GIF")

## To generate documentation locally 

`npm install apidoc -g`

Replacing system path with your path

`cd C:\Users\Ben\Documents\Node-API\`

Replacing system path with your path

`apidoc -i C:\Users\Ben\Documents\Node-API\controllers -o docs/`

For more help on apidocjs see [HERE](http://apidocjs.com/) 

## What's next?

1. Way more error handling and data validation on controller methods.
2. More test cases - Checking for required fields etc.
3. Better documentation with more examples.