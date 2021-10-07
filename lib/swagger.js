const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');




const options = {
    swaggerDefinition: {
        // openapi: '3.0.1',
        info: {
            // API informations (required)
            title: "swagger_test API 문서", // Title (required)
            version: "1.0.0", // Version (required)
            description: `
        API 문서 작성 예시: \n
            http://petstore.swagger.io/v2/swagger.json \n
        JSDoc 형식 작성 에시: \n
            https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md \n
        Swagger UI Example Page: \n
            https://petstore.swagger.io/
        `,
            contact: {
                email: "https://github.com/any1ok",
            },
        },
        host: 'localhost:3300', // Host (optional)
        basePath: "/swagger_test", // Base path (optional)
        tags: [
            {
                name: "swagger_test",
                description: "App api",
                externalDocs: {
                    description: "Find out more",
                    url: "http://swagger.io",
                },
            },
        ],
    },
    apis: ['./routes/swagger_test.js']
};

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};