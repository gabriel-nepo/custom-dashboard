const {Router} = require('express');
const authController = require('../controllers/authController');
const itemController = require('../controllers/itemController');
const orderController = require('../controllers/orderController');


const authMiddleware = require('../middlewares/auth');

const routes = Router();

routes.post('/register',authController.store);
routes.post('/login',authController.login);
routes.post('/verify',authController.isAuthenticated);


routes.post('/password_recovery',authController.passwordRec);
routes.post('/reset_password',authController.resetPass);

routes.post('/item/new',itemController.store);
routes.delete('/item/delete/:itemId',itemController.delete);
routes.get('/item/list',itemController.show);
routes.post('/item/update/:itemId',itemController.update);
routes.get('/item/get/:itemId',itemController.getById);
// routes.get('/post/:postId',authMiddleware,postController.getById);

routes.post('/order/create/:itemId',orderController.store);
routes.get('/order/get',orderController.show);
routes.get('/order/my',orderController.userOrders);
routes.delete('/order/delete/:orderId',orderController.delete);
routes.get('/order/get/:orderId',orderController.getById);
routes.post('/order/update/:orderId',orderController.update);
routes.post('/order/update/status/:orderId',orderController.update);


module.exports = routes;