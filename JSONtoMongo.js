'use strict';

// Import modules/files you may need to correctly run the script. 
// Make sure to save your DB's uri in the config file, then import it with a require statement!
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

// Connect to your database using mongoose - remember to keep your key secret
mongoose.connect(config.db.uri, {useNewUrlParser: true});

//Instantiate a mongoose model for each listing object in the JSON file, 
//Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
fs.readFile('listings.json', 'utf8', function(err, data) {
  //Check for errors
  if (err) throw err;

   //Save the state in the listingData variable already defined
  JSON.parse(data).entries.forEach(function(element)
  {
    Listing.create(element);
  });
});