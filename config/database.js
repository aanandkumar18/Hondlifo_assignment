const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.database_url ,{
    })

    .then( () => {
        console.log("db ka connection is successfull");
    })
    .catch((error) => {
        console.log("issue in db connection");
        console.error(error);
        process.exit(1);
    })

    
}

module.exports= dbConnect;