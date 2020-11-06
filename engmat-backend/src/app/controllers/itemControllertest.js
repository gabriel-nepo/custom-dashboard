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

  async getById(req, res) {
    try {
      const item = Item.findById(req.params.itemId);
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
      return res.status(400).send({ error: "Error at loading posts" });
    }
  },

  async store(req, res) {
    try {

      const {
        name,
        images,
        videos,
        criticality,
        time,
        method,
        line,
        pressure,
        temperature,
        quantityInLine,
        chemicalContact,
        forcedDeterioration,
        catastroficFailure,
        objective,
        material,
        lifespan,
        conservation,
        area,
        lineStopRisk,
        safetyQualityEnvRisk,
        original,
        equip,
        price,
        manufaturer,
        tag,
        sapCode,
      } = req.body;
      const item = await Post.create({
        name,
        images,
        videos,
        criticality,
        time,
        method,
        line,
        pressure,
        temperature,
        quantityInLine,
        chemicalContact,
        forcedDeterioration,
        catastroficFailure,
        objective,
        material,
        lifespan,
        conservation,
        area,
        lineStopRisk,
        safetyQualityEnvRisk,
        original,
        equip,
        price,
        manufaturer,
        tag,
        sapCode
      });
      return res.send({ item });
    }
    catch (err) {
      return res.status(400).send({ error: 'Error at creating new item' });
    }
  },

  async delete(req, res) {
    try {
      await Item.findByIdAndDelete(req.params.itemId);
      return res.send();
    }
    catch (err) {
      console.log(err);
      return res.status(400).send({ error: "Error at delete item" });
    }
  },
}