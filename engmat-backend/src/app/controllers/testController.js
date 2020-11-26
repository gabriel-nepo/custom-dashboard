const Test = require('../models/Test');
const Order = require("../models/Order");
const Item = require('../models/item');
const findId = require("../utils/id");

module.exports = {

    async getById(req, res) {
        try {
            const test = await Test.findById(req.params.testId);
            return res.json({ test });
        } catch (error) {
            return res.status(500).json({ error: "Error " });
        }
    },

    async testsByOrder(req,res){
        try{
            const order = await Order.findById(req.params.orderId);
            const userId = findId.testTolken(req.headers.authorization);

            if(order.user != userId){
                res.status(400).send({ error: 'Order from different user' });
            }

            const tests = await Test.find({user: order.user})
            return res.json({ tests });

        } catch(error){
            return res.status(500).json({ error: "Error " });
        }
    },
    async userTests(req, res) {
        const userId = findId.testTolken(req.headers.authorization);

        const page = Number(req.query.page);
        const limit = Number(req.query.limit);

        const options = { page, limit, sort: { createdAt: -1 } }
        try {
            const order = await Test.paginate({ user: userId }, options,
                (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(400).json({ error: "Error at loading tests" });
                    }
                    return result;
                }
            );
            return res.json({ order });
        } catch (err) {
            res.status(400).send({ error: 'Error at paginate tests' });
        }
    },

    async update(req, res) {
        try {
            const temp = await Test.findById(req.params.testId);
            console.log(temp)
            const userId = findId.testTolken(req.headers.authorization);
            if (temp.user != userId) {
                res.status(400).send({ error: 'Test from different user' });
            }
            const test = await Test.findOneAndUpdate(req.params.testId, req.body, {
                new: true
            });
            console.log(test);
            return res.send(test);
        }
        catch (err) {
            return res.status(400).send({ error: "Error at update test" });
        }
    },

    async delete(req, res) {
        try {
            console.log(req.params.testId);
            await Test.findByIdAndDelete(req.params.testId);
            return res.send("Test deleted");
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: "Error at delete test" });
        }
    },

    async show(req, res) {
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);

        const options = { page, limit, sort: { createdAt: -1 } }
        try {
            const order = await Test.paginate({}, options,
                (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(400).json({ error: "Error at loading tests" });
                    }
                    return result;
                }
            );
            return res.json({ order });
        } catch (err) {
            res.status(400).send({ error: 'Error at paginate orders' });
        }
    },

    async store(req, res) {

        try {
            const userId = findId.testTolken(req.headers.authorization);
            console.log(req.params);
            const order = await Order.findById(req.params.itemId);
            const {description, wear, fail} = req.body;

            if (!userId) {
                return res.status(400).send({ error: 'User not found' });
            }
            if (!item) {
                return res.status(400).send({ error: 'Order not found' });
            }
            const test = await Test.create({
                user: userId,
                order: order._id,
                description,
                wear,
                fail
            });
            return res.send({ test });

        }
        catch (err) {
            res.status(400).send({ error: 'Error at creating new order' });
        }
    },

};