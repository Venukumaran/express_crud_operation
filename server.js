const express = require("express");
const dotenv = require("dotenv").config();
const errorhandler = require("./middleware/errorhandler");
const database=require("./config/mydb")


database()

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts", require("./router/contact"));

// error handler should come last
app.use(errorhandler);

app.listen(port, () => {
    console.log(`server listening on ${port}`);
});
