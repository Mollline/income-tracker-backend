const express = require('express');
const cors = require('cors');
const connect = require('./database/db')
const userRouter = require('./router/userRouter')

const app = express();
const port = 9999;

app.use(express.json());
app.use(cors());

app.use(userRouter)

connect()
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
});

// app.get('/', (req, res) => { // Correct the order of req and res parameters
//     res.status(200).send('hello world');
// });