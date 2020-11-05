const {Router} = require('express');
const authController = require('../controllers/authController');
const serviceController = require('./serviceController');
const postController = require('./postController');


const authMiddleware = require('../middlewares/auth');

const routes = Router();

routes.post('/register',authController.store);
routes.post('/login',authController.login);

routes.get('/teste',authMiddleware,serviceController.show);

routes.post('/password_recovery',authController.passwordRec);
routes.post('/reset_password',authController.resetPass);

routes.get('/post/:postId',authMiddleware,postController.getById);
routes.get('/post/all',authMiddleware,postController.show);
routes.get('/post_need',authMiddleware,postController.getNeedPosts);
routes.get('/post_offering',authMiddleware,postController.getOfferingPosts);
routes.get('/post_public_service',authMiddleware,postController.getPublicServicePosts);
routes.post('/post',authMiddleware,postController.store);
routes.delete('/post/:postId',authMiddleware,postController.delete);

module.exports = routes;