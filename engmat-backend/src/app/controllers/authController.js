const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../modules/mailer');

const authConfig = require('../../config/auth');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  });
}

module.exports = {
  async store(req, res) {
    const { user } = req.body;

    try {
      if (await User.findOne({ user })) {
        return res.status(400).send({ error: 'User already exists' });
      }

      const usuario = await User.create(req.body);
      usuario.password = undefined;

      return res.send({ usuario, token: generateToken({ id: usuario.id }) });
    }
    catch (err) {
      res.status(400).send({ error: 'registration failed' });
    }
  },

  async login(req, res) {
    const { user, password } = req.body;

    const usuario = await (await User.findOne({ user }).select('+password'));

    if (!usuario) {
      return res.status(401).send({ error: 'User not found' });
    }

    if (!await bcrypt.compare(password, usuario.password)) {
      return res.status(401).send({ error: 'Invalid password' });
    }

    usuario.password = undefined;

    res.send({ usuario, token: generateToken({ id: usuario.id }) });
  },

  async isAuthenticated(req,res,next){
    if(req.headers['authorization'] === undefined || null){
      res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      return;
    }
    console.log(`merda`)
    var token = req.headers['authorization'].split(' ')[1];
    if(token === undefined || null){
      res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    }
    console.log(token);
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, authConfig.secret, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      res.status(200).send({status: "Valid token"});
    });
    next()
  },

  async passwordRec(req, res) {
    const { user } = req.body;

    try {
      const usuario = await User.findOne({ user });

      if (!usuario) {
        return res.status(400).send({ error: 'User not found' });
      }

      const token = crypto.randomBytes(20).toString('hex');

      const now = new Date();
      now.setHours(now.getHours() + 1);

      await User.findByIdAndUpdate(usuario.id, {
        '$set': {
          passwordResetToken: token,
          passwordResetExpires: now,
        }
      }, { new: true, useFindAndModify: false }
      );

      console.log("teste");
      mailer.sendMail({
        to: user,
        from: "gabriel.campos9815@gmail.com",
        template: 'auth/mail',
        context: { token }
      }, (err) => {
        if (err) {
          return res.status(400).send({ error: "Cannot send forgot password user" })
        }
      })
      return res.send();

    }
    catch (err) {
      console.log(err);
      res.status(400).send({ error: 'Error on forgot my pass' })
    }
  },
  
  async resetPass(req,res){
    const {user,password,token} = req.body;
    try{
      const usuario = await (await User.findOne({ user }).select('+passwordResetToken passwordResetExpires'));

      if (!usuario) {
        return res.status(400).send({ error: 'User not found' });
      }

      if(token !== usuario.passwordResetToken){
        return res.status(400).send({error: 'Invalid token'});
      }
      const now = new Date();

      if(now >= usuario.passwordResetExpires){
        return res.status(400).send({error: 'Token expired, generate a new one'});
      }

      usuario.password = password;

      await usuario.save();

      res.send();

    }
    catch(err){
      return res.status(400).send({error:"Password reset error"});
    }
  }
}
