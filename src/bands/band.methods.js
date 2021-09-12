//phil welsby - 12 sept 2021

const Band = require('./band.model');

exports.addBand = async (newBand) => {
    try {
        const band = new Band(newBand);
        await band.save()
    } catch (error) {
      console.log(error);
  }
};

