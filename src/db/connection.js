// phil welsby - 12 sept 2021

const mongoose = require('mongoose');
require('dotenv').config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('\nSuccessfully connected...');
    } catch (error) {
        console.log(error);
    }
}

connection();

