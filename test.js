//import mongoose
const mongoose = require('mongoose')

// import the model we just created
// BlogPost represents the BlogPosts collection in the database
const BlogPost = require('./models/BlogPost')

// if my_database doesn't exist, it will be created for us
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

// to create a new BlogPost doc in our database, we will use 
// a function in our model called create
/*
BlogPost.create({
    //author: ObjectId,
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
    desc: 'Once you get past the beginner-level energy-saving stuff, a whole new world of thrifty nerdery opens up. Here are some secrets to copping a load of money off your utilities bills. ',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:',
    date: new Date()    
}, (error, blogpost) =>{
    console.log(error,blogpost)
})
*/

var id = "5cb436980b33147489eadfbb";

BlogPost.findByIdAndDelete(id, (error, blogspot) =>{
    console.log(error,blogspot)
})
