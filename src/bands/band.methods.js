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

exports.listBands = async () => {
    console.clear();
    try {
        const list = await Band.find({})
        console.log("running...")
        console.log(list)
        console.log("closing connection...")
    } catch (error) {
        console.log(`Error in listBands ${error}`)
    }
}
