const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

// doc

const { swaggerUi, specs } = require('./lib/swagger');

app.use("/swagger_test", require(`${__dirname}/routes/swagger_test`));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));


app.listen(port, () => {
    console.log(`server is listening at localhost`);
});


/*
const options2 = {
    //swagger문서 설정
    swaggerDefinition: {
        info: {
            title: "Menutour Manage API 문서",
            version: "1.0.0",
            description: `
              API 문서 작성 예시: \n
                  http://petstore.swagger.io/v2/swagger.json \n
              JSDoc 형식 작성 에시: \n
                  https://github.com/Surnet/swagger-jsdoc/blob/master/docs/GETTING-STARTED.md \n
              Swagger UI Example Page: \n
                  https://petstore.swagger.io/
              `,
            contact: {
                email: "viba@svcorps.com",
            },
        },
        host: docHost + ":" + port, // Host (optional)
        basePath: "/manage/", // Base path (optional)
        securityDefinitions: {
            api_key: {
                type: "apiKey",
                in: "header",
                name: "authorization",
            },
        },
        tags: [
            {
                name: "Menutour_manage",
                description: "App api",
                externalDocs: {
                    description: "Find out more",
                    url: "http://swagger.io",
                },
            },
        ],
    },
    //swagger api가 존재하는 곳 입니다.
    apis: [
        "./controllers/manage/staffController.js",
        "./controllers/manage/userController.js",
    ], // <-- not in the definition, but in the options
};
const specs = swaggerJSDoc(options2);
app.use("/api-docs2", swaggerUi.serve, swaggerUi.setup(specs));
*/

//app.use("/swagger_test2", require(`${__dirname}/route/swagger_test2`));
