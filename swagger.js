const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api'
    },
    host: 'localhost: 4888',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const enpointsFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, enpointsFiles, doc);

