const { update } = require('../models/item');
const Item = require('../models/item');

module.exports = {

  // async getOfferingPosts(req,res){
  //   try{
  //     const posts = await Post.find().populate('user').where('type').equals('OFFERING');
  //     return res.send({posts});
  //   }
  //   catch(err){
  //     return res.status(400).send({error: "Error at loading posts"});
  //   }
  // },

  async update(req,res){
    try {
      console.log(req.params.itemId);
      console.log(req.body);
      const item = await Item.findOneAndUpdate(req.params.itemId,req.body,{
        new: true
      });
      return res.send(item);
    }
    catch (err) {
      return res.status(400).send({ error: "Error at update item" });
    }
  },
  async getById(req, res) {
    try {
      const item = await Item.findById(req.params.itemId);
      return res.send(item);
    }
    catch (err) {
      return res.status(400).send({ error: "Error at get item" });
    }
  },

  async show(req, res) {
    try {
      const item = await Item.find();
      return res.send({ item });
    }
    catch (err) {
      return res.status(400).send({ error: "Error at loading itens" });
    }
  },

  async store(req, res) {
    const {name} = req.body;
    console.log(req.body);
    try {
      if (await Item.findOne({ name })) {
        return res.status(400).send({ error: 'Item already exists' });
      }
      const item = await Item.create(req.body);
      return res.send({ item });

    }
    catch (err) {
      res.status(400).send({ error: 'Error at creating new item' });
    }
  },

  async delete(req, res) {
    try {
      console.log(req.params.itemId);
      await Item.findByIdAndDelete(req.params.itemId);
      return res.send("Item deleted");
    }
    catch (err) {
      console.log(err);
      return res.status(400).send({ error: "Error at delete item" });
    }
  },
}