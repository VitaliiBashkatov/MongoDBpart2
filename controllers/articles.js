const articleModel = require('../models/article');
const userModel = require('../models/user');

module.exports = {createArticle, getArticle, updateArticle, deleteArticle};

async function createArticle(req, res, next) {
  const {body} = req;

  try{
    const user = await userModel.findOne({_id: body.owner});
    if(!user) throw new Error('user doesnt exist');

    const article = await articleModel.create(body);
    const userUpdate = await userModel.updateOne(user, {$inc : {numberOfArticles: 1}})

    return res.json({work: true});
  }
  catch(err){
    throw err;
  }
};

async function getArticle(req,res,next) {
      
    try{
      const articles = await articleModel.find(req.body).populate('owner');

      return res.json(articles)
    }
    catch(err) {
      throw err;
    }

}

async function updateArticle(req,res,next) {
  const id = req.params.id;

  try{
    const article = await articleModel.findOne({_id: id}).populate('owner');
    if(!article) throw new Error('this article doesnt exist');

    const user = await userModel.findOne(article.owner);
    if(!user) throw new Error('user doesnt exist');

    const {body} = req;
    body.updatedAt = new Date;
    const updatedArticle = await articleModel.updateOne(article, {$set : body}, {runValidators: true});
  
    return res.json({work: true});
  }
  catch(err) {
    throw err;
  }
}

async function deleteArticle(req,res,next) {
  const id = req.params.id;

  try{
    const article = await articleModel.findOne({_id: id}).populate('owner');
    
    const deletedArticle = await articleModel.deleteOne(article);
    const user = await userModel.updateOne(article.owner, {$inc: {numberOfArticles: -1}});

    return res.json({work: true});
  }
  catch(err) {
    throw err;
  }
}

