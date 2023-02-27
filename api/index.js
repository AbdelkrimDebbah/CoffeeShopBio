/* ====== create node.js server with express.js framework ====== */
// dependencies
const express = require("express");
const cors = require('cors');
//const bodyParser = require('body-parser');

const user = require('./routes/users_routes.js');
const product = require('./routes/products_routes.js')

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// REGISTERING ROUTERS
app.use('/user', user);
app.use('/product', product);



// PORT
const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Serveur démarre sur le port: ${PORT}`);
});




