const Post = require('../models/posts');

module.exports = {

  async getNeedPosts(req,res){
    try{
      const posts = await Post.find().populate('user').where('type').equals('NEED');
      return res.send({posts});
    }
    catch(err){
      return res.status(400).send({error: "Error at loading posts"});
    }
  },
  
  async getOfferingPosts(req,res){
    try{
      const posts = await Post.find().populate('user').where('type').equals('OFFERING');
      return res.send({posts});
    }
    catch(err){
      return res.status(400).send({error: "Error at loading posts"});
    }
  },

  async getPublicServicePosts(req,res){
    try{
      const posts = await Post.find().populate('user').where('type').equals('PUBLIC_SERVICE');
      return res.send({posts});
    }
    catch(err){
      return res.status(400).send({error: "Error at loading posts"});
    }
  },

  async getById(req,res){
    try{
      const post = Post.findById(req.params.postId);
      return res.send(post);
    }
    catch(err){
      return res.status(400).send({error:"Error at get post"});
    }
  },

  async show(req, res) {
    try{
      const posts = await Post.find().populate('user');
      return res.send({posts});
    }
    catch(err){
      return res.status(400).send({error: "Error at loading posts"});
    }
  },

  async store(req, res) {
    try{

      const {latitude,longitude,type,description} = req.body;

      const location = {
        type: 'Point',
        coordinates: [longitude,latitude],
      }
      const post = await Post.create({location,type,description,user:req.userId});
      return res.send({post});
    }
    catch(err){
      return res.status(400).send({error:'Error at creating new post'});
    }
  },

  async delete(req, res) {
    try{
      await Post.findByIdAndDelete(req.params.postId);
      return res.send();
    }
    catch(err){
      console.log(err);
      return res.status(400).send({error: "Error at delete post"});
    }
  },

  async update(req, res) {

  }
}