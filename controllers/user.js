const userModel = require('../models/user');
const articleModel = require('../models/article')

module.exports = {createUser, getUser, updateUser, deleteUser, getUsersArticles};

async function createUser(req, res, next) {
  const {body} = req;
  console.log(body)
  try{
    const user = await userModel.create(body);
    return res.json({work: true});
  }
  catch(err){
    throw err;
  }
   
}

async function getUser(req,res,next) {
  try {
    const id = req.params.id;
    const user = await userModel.find({'_id': id});
    console.log(user);
    if(!user.length) throw new Error('user doesnt exist in database');

    const articles = await articleModel.find({owner: user})
    return res.json([user,articles]);
  }
  catch(err) {
    throw err;
  }
}

async function updateUser(req,res,next) {
  try{
    const id = req.params.id;
    const user = await userModel.update({'_id': id}, {$set: req.body}, {runValidators: true});
    return res.json({work:true});
  }
  catch(err){
    throw err;
  }
}

async function deleteUser(req,res,next) {
  try{
    const id = req.params.id;
    const user = await userModel.findOne({'_id':id});
    const deletedArticles = await articleModel.deleteMany({owner: user});
    const deletedUser = await userModel.deleteOne(user);
    return res.json({work: true});
  }
  catch(err){
    throw err;
  }
}

async function getUsersArticles(req,res,next) {
  try{
    const id = req.params.id;
    const user = await userModel.findOne({'_id': id});
    if(!user) throw new Error('user doesnt exist')
    const usersArticles = await articleModel.find({owner: user});

    return res.json(usersArticles);
  }
  catch(err){
    throw err;
  }
}
