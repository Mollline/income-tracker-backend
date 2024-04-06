const express = require('express');
const cors = require('cors');
const connect = require('./database/db')
const userRouter = require('./router/userRouter')
const transactionRouter = require("./router/transactionRouter")
const noteRouter = require('./router/noteRouter')
const app = express();
const port = 9999;

app.use(express.json());
app.use(cors());

app.use(userRouter)
app.use(transactionRouter)
app.use(noteRouter)


connect()
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});
