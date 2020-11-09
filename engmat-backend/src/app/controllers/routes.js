const {Router} = require('express');
const authController = require('../controllers/authController');


const authMiddleware = require('../middlewares/auth');

const routes = Router();

routes.post('/register',authController.store);
routes.post('/login',authController.login);
routes.post('/verify',authController.isAuthenticated);


routes.post('/password_recovery',authController.passwordRec);
routes.post('/reset_password',authController.resetPass);

// routes.get('/post/:postId',authMiddleware,postController.getById);

module.exports = routes;