module.exports = {
    async show (req,res){
      res.send({ok:true,user:req.userId});
    }
}