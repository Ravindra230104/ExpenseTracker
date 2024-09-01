// const express = require('express');
// const cors = require("cors");
// require("../config/dbConnect");
// const usersRoute = require('../routes/users/usersRoute');
// const transactionsRoute = require('../routes/transactions/transactiosRoute');
// const accountRoute = require('../routes/accounts/accountsRoute');
// const globalErrHandler = require('../middlewares/globalErrHandler');

// const app = express();


// // middlewares
// app.use(express.json())   // pass incoming data

// // cors middlewares
// app.use(cors());

// // routes
  
// //users routes
// app.use("/api/v1/users",usersRoute);

// // account routes
// app.use("/api/v1/accounts",accountRoute);

// // transactions route
// app.use("/api/v1/transactions",transactionsRoute);

// // error handlers
// app.use(globalErrHandler);



// // listen to server
// const PORT = process.env.PORT || 9000;
// app.listen(PORT,console.log(`Server is up and running on port ${PORT}`));





const express = require('express');
const cors = require("cors");
require("../config/dbConnect");
const usersRoute = require('../routes/users/usersRoute');
const transactionsRoute = require('../routes/transactions/transactionsRoute');
const accountRoute = require('../routes/accounts/accountsRoute');
const globalErrHandler = require('../middlewares/globalErrHandler');

const app = express();

// Middleware
app.use(express.json()); // Pass incoming data

// CORS Middleware
app.use(cors());

// Routes
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/accounts", accountRoute);
app.use("/api/v1/transactions", transactionsRoute);

// Error Handlers
app.use(globalErrHandler);

// Export as a serverless function
module.exports = app;
