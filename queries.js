/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

// remove limit to array elements printed to console
const util = require('util');
util.inspect.defaultOptions.maxArrayLength = null; 

// Connect to your database using mongoose - remember to keep your key secret
mongoose.connect(config.db.uri, {useNewUrlParser: true});

var findLibraryWest = function() {
  //Find the document that contains data corresponding to Library West, then log it to the console. 
  Listing.find({ code : 'LBW' }, function (err, data) 
  {
    if (err) throw err;
    console.log(data);
  });
};

var removeCable = function() {
  // Find the document with the code 'CABL' and emove this listing from your database and log the document to the console. 
  Listing.findOneAndRemove({ code : 'CABL' },  function (err, data) 
  {
    if (err) throw err;
    console.log(data);
  })
};

var updatePhelpsLab = function() {
   // Phelps Lab address is incorrect. Find Phelps Lab, update it to Correct Address: 1953 Museum Rd, Gainesville, FL 32603, and then 
   // log the updated document to the console. 
    Listing.findOneAndUpdate({code: 'PHL'}, {address: '1953 Museum Rd, Gainesville, FL 32603' }, function(err, data)
    {
      if (err) throw err;
      console.log(data)
    })
};

var retrieveAllListings = function() {
  //Retrieve all listings in the database, and log them to the console. 
  Listing.find( function(err, data)
  {
    if (err) throw err;
    console.log(data);
  })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();