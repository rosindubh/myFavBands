//phil welsby - 12 sept 2021

const mongoose = require('mongoose');

const bandSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
   },
   yearFormed: {
      type: String ,
   },
   like: {
      type: String,
      required: true
   },
});

const Band = mongoose.model("Band", bandSchema);

module.exports = Band;

