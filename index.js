const express= require('express');
const app = express();

require('dotenv').config();

port = process.env.port || 3000 ;

app.use(express.json());

const fetchCrypto =require('./routes/fetchCrypto');
app.use("/api/v1" ,fetchCrypto);

 
app.listen(port ,() => {
    console.log(`server run at  ${port} successfully.`);
});

const dbConnect = require("./config/database");
dbConnect();
