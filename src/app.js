//phil welsby - 12 sept 2021

require('./db/connection');

const mongoose = require('mongoose');
const {addBand, listBands} = require('./bands/band.methods');
const command = process.argv[2];

const app = async () => {
  if (command === 'add') {
    await addBand({
      name: process.argv[3],
      yearFormed: process.argv[4],
      like: process.argv[5],
  })
 }
  else if(command === 'list') {
    await listBands()
 }
 mongoose.disconnect();
};


app();
