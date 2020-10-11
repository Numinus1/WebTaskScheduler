const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const User = require('./models/user');
const Post = require('./models/post');
const url = 'mongodb://localhost:27017/user';
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.post('/api/post/Clear', (req, res) => {
	mongoose.connect(url, { useMongoClient: true}, function(err){
		if(err) throw err;
		Post.deleteMany({}, (err, doc) => {
			if (err) throw err;
			return res.status(200).json({
				status: 'cleared',
				data: doc
			})
		})
	});

})
 
app.post('/api/post/getAllPost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true } , function(err){
        if(err) throw err;
        Post.find({},[],{ sort: { _id: -1 } },(err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/post/createPost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) throw err;
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        })
        post.save((err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/user/register', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) throw err;
        const user = new User({
            username: req.body.username,
            password: req.body.password
        })
        user.save((err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})
 
app.post('/api/user/login', (req, res) => {
    mongoose.connect(url,{ useMongoClient: true }, function(err){
        if(err) throw err;
        User.find({
            username : req.body.username, password : req.body.password
        }, function(err, user){
            if(err) throw err;
            if(user.length === 1){  
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }
             
        })
    });
})
 
app.listen(3000, () => console.log('server live on port 3000'))