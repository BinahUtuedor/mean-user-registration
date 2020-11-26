const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, (err) =>{
    if(!err) { console.log('MongoDB connection suceeded.'); }
    else { console.log('Error in MongoDB connection : ' +JSON.stringify(err, undefined, 2)); }
});