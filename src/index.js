const app = require("./app");
const port = 3000;

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('../swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);


// start the app to listen on the right port
app.listen(port, () => {
  console.log(`Example app listening at
http://localhost:${port}`);
});
