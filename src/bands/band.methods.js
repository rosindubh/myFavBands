//phil welsby - 12 sept 2021

const Band = require('./band.model');

exports.addBand = async (newBand) => {
    try {
        const band = new Band(newBand);
        await band.save()
    } catch (error) {
      const list = await Band.find({})
      console.clear();
      console.log(list)
      console.log('\n\n\nBand already in database or\n')
      console.log("3 arguments required\nband name\nyear formed\nlike (this can be good or bad)\n");
      console.log('Example >>> node src/app.js "The Band" 1997 good\n')
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

exports.badCommand = () => {
  console.clear();
  console.log("\nbad command!");
  console.log("\noptions are:")
  console.log("add - to add a film")
  console.log("list- to list contents of database")
}
