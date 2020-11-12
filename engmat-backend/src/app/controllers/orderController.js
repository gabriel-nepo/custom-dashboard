const Order = require("../models/Order");
const Item = require('../models/item');
const findId = require("../utils/id");

module.exports = {

    async getById(req, res) {
        try {
            const order = await Order.findById(req.params.orderId);
            return res.json({ order });
        } catch (error) {
            return res.status(500).json({ error: "Error " });
        }
    },

    async userOrders(req, res) {
        const userId = findId.testTolken(req.headers.authorization);

        const page = Number(req.query.page);
        const limit = Number(req.query.limit);

        const options = { page, limit, sort: { createdAt: -1 } }
        try {
            const order = await Order.paginate({ user: userId }, options,
                (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(400).json({ error: "Error at loading orders" });
                    }
                    return result;
                }
            );
            return res.json({ order });
        } catch (err) {
            res.status(400).send({ error: 'Error at paginate orders' });
        }
    },


    async changeStatus(req, res) {
        try {
            const temp = await Order.findById(req.params.orderId);
            console.log(temp)
            const userId = findId.testTolken(req.headers.authorization);
            if (temp.user != userId) {
                res.status(400).send({ error: 'Order from different user' });
            }
            const order = await Order.findOneAndUpdate(req.params.orderId, req.body, {
                new: true
            });

            const update = {
                status: req.query.status,
                date: Date.now()
            }

            PersonModel.update(
                { _id: req.params.orderId }, 
                { $push: { updates: update } },
                done
            );
            console.log(order);
            return res.status(200).send({message: "success"});
        }
        catch (err) {
            return res.status(400).send({ error: "Error at update item" });
        }
    },

    async update(req, res) {
        try {
            const temp = await Order.findById(req.params.orderId);
            console.log(temp)
            const userId = findId.testTolken(req.headers.authorization);
            if (temp.user != userId) {
                res.status(400).send({ error: 'Order from different user' });
            }
            const order = await Order.findOneAndUpdate(req.params.orderId, req.body, {
                new: true
            });
            console.log(order);
            return res.send(order);
        }
        catch (err) {
            return res.status(400).send({ error: "Error at update item" });
        }
    },

    async delete(req, res) {
        try {
            console.log(req.params.orderId);
            await Order.findByIdAndDelete(req.params.orderId);
            return res.send("Order deleted");
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: "Error at delete order" });
        }
    },

    async show(req, res) {
        const page = Number(req.query.page);
        const limit = Number(req.query.limit);

        const options = { page, limit, sort: { createdAt: -1 } }
        try {
            const order = await Order.paginate({}, options,
                (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(400).json({ error: "Error at loading orders" });
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
            const item = await Item.findById(req.params.itemId);

            if (!userId) {
                return res.status(400).send({ error: 'User not found' });
            }
            if (!item) {
                return res.status(400).send({ error: 'Item not found' });
            }
            const order = await Order.create({
                user: userId,
                item: item._id,
                updates: []
            });
            return res.send({ order });

        }
        catch (err) {
            res.status(400).send({ error: 'Error at creating new order' });
        }
    },

    //   async delete(req, res) {
    //     const schema = yup.object().shape({
    //       postId: yup.string().min(1).required(),
    //     });

    //     if (!(await schema.isValid(req.params))) {
    //       return res.status(401).json({ error: "validations fails" });
    //     }
    //     const post = await Post.findById(req.params.postId);
    //     console.log({ req: req.userId, post: post.user.toString() });
    //     if (req.userId === post.user.toString()) {
    //       await Post.findByIdAndDelete(req.params.postId);
    //       return res.json({ Successful: "Post deleted" });
    //     }
    //     res.status(400).json({ error: "You can only delete your own posts" });
    //   },

    //   async comment(req, res) {
    //     const schema = yup.object().shape({
    //       postId: yup.string().min(1).required(),
    //     });

    //     const schema2 = yup.object().shape({
    //       content: yup.string().min(1).required(),
    //     });

    //     if (
    //       !(await schema.isValid(req.params)) ||
    //       !(await schema2.isValid(req.body))
    //     ) {
    //       return res.status(401).json({ error: "validations fails" });
    //     }

    //     const content = req.body.content;
    //     const post = await Post.findById(req.params.postId).populate("replies");
    //     const user = await UserModel.findById(req.userId);
    //     const temp = user.email.split("@");
    //     const hash_name = temp[0] + user.hash_user;
    //     const reply = await Reply.create({
    //       content,
    //       post: post._id,
    //       user: req.userId,
    //       hash_name,
    //     });
    //     await reply.save();
    //     post.replies.push(reply);
    //     await post.save();

    //     const notification = await Notification.findOne({
    //       postId: post._id,
    //       notificationType: "comment",
    //     });

    //     if (notification) {
    //       await notification.update({
    //         notification: `${hash_name} e outras ${
    //           post.replies.length - 1
    //         } pessoas cometaram seu post ${post.title}`,
    //         new: true,
    //         updatedAt: new Date(),
    //       });
    //     } else {
    //       await Notification.create({
    //         user: post.user,
    //         postId: post._id,
    //         notification: `${hash_name} comentou o seu post ${post.title}`,
    //         notificationType: "comment",
    //       });
    //     }

    //     await actionsUser.update(req.userId, {
    //       action: `Comentou na postagem: ${post.title}`,
    //       idPost: post._id,
    //       idReply: reply._id,
    //     });

    //     return res.json({
    //       type: "Post",
    //       geometry: {
    //         type: "Point",
    //         coordinates: [
    //           post.location.coordinates[1],
    //           post.location.coordinates[0],
    //         ],
    //       },
    //       properties: {
    //         id: post._id,
    //         title: post.title,
    //         contact: post.contact,
    //         type: post.type,
    //         area: post.area,
    //         description: post.description,
    //         user: post.user,
    //         like: post.like.length,
    //         unlike: post.unlike.length,
    //         createddAt: post.createdAt,
    //         replies: post.replies,
    //       },
    //     });
    //   },

    //   async deleteComment(req, res) {
    //     const schema = yup.object().shape({
    //       replyId: yup.string().min(1).required(),
    //       postId: yup.string().required(),
    //     });

    //     if (!(await schema.isValid(req.params))) {
    //       return res.status(401).json({ error: "validations fails" });
    //     }

    //     const reply = await Reply.findById(req.params.replyId);
    //     const post = await Post.findByIdAndUpdate(req.params.postId);
    //     if (req.userId === reply.user.toString()) {
    //       await Reply.findByIdAndDelete(req.params.replyId);
    //       const replie = post.replies.filter(
    //         (temp) => temp._id.toString() !== req.params.replyId
    //       );
    //       await Post.findByIdAndUpdate(req.params.postId, { replies: replie });
    //       return res.json({ Successful: "Comment deleted" });
    //     }
    //     res.status(400).json({ error: "You can only delete your own comments" });
    //   },

    //   async likerController(req, res) {
    //     const schema = yup.object().shape({
    //       action: yup
    //         .string()
    //         .matches(/(LIKE|UNLIKE)/)
    //         .required(),
    //       postId: yup.string().required(),
    //     });

    //     if (!(await schema.isValid(req.params))) {
    //       return res.status(401).json({ erro: "Validation fails" });
    //     }

    //     const { action, postId } = req.params;

    //     const post = await Post.findById(postId);
    //     const { like, unlike } = post;

    //     const user = await UserModel.findById(req.userId);
    //     const hash_name = user.email.split("@")[0] + user.hash_user;

    //     const notification = await Notification.findOne({
    //       postId: post._id,
    //       notificationType: "actionPost",
    //     });

    //     await actionsUser.update(req.userId, {
    //       action: `Voce reagiu ao post ${post.title}`,
    //       idPost: post._id,
    //       idReply: null,
    //     });

    //     if (action === "LIKE") {
    //       const tempLike = like.filter((temp) => {
    //         return req.userId === temp;
    //       });

    //       if (tempLike.length) {
    //         like.splice(like.indexOf(tempLike[0]), 1);
    //       } else {
    //         const tempUnlike = unlike.filter((temp) => {
    //           return req.userId === temp;
    //         });

    //         if (tempUnlike.length) {
    //           unlike.splice(unlike.indexOf(tempUnlike[0]), 1);
    //         }

    //         like.push(req.userId);
    //       }
    //       const response = await Post.findByIdAndUpdate(
    //         postId,
    //         { like, unlike },
    //         { new: true }
    //       );

    //       const reactions = response.like.length + response.unlike.length - 1;
    //       if (notification && reactions !== 0) {
    //         await notification.update({
    //           notification: `${hash_name} e outras ${reactions} reagiram ao seu post ${post.title}`,
    //           new: true,
    //           updatedAt: new Date(),
    //         });
    //       } else if (reactions >= 0) {
    //         await Notification.create({
    //           postId: post._id,
    //           user: post.user,
    //           notification: `${hash_name} reagiu ao seu post ${post.title}`,
    //           notificationType: "actionPost",
    //         });
    //       } else {
    //         notification.delete();
    //       }

    //       return res.json({
    //         id: response._id,
    //         like: response.like.length,
    //         deslike: response.unlike.length,
    //       });
    //     } else if (action === "UNLIKE") {
    //       const tempUnlike = unlike.filter((temp) => {
    //         return req.userId === temp;
    //       });

    //       if (tempUnlike.length) {
    //         unlike.splice(unlike.indexOf(tempUnlike[0]), 1);
    //       } else {
    //         const tempLike = like.filter((temp) => {
    //           return req.userId === temp;
    //         });

    //         if (tempLike.length) {
    //           like.splice(like.indexOf(tempLike[0]), 1);
    //         }

    //         unlike.push(req.userId);
    //       }

    //       const response = await Post.findByIdAndUpdate(
    //         postId,
    //         { like, unlike },
    //         { new: true }
    //       );

    //       const reactions = response.like.length + response.unlike.length - 1;
    //       if (notification && reactions !== 0) {
    //         await notification.update({
    //           notification: `${hash_name} e outras ${reactions} reagiram ao seu post ${post.title}`,
    //           new: true,
    //           updatedAt: new Date(),
    //         });
    //       } else if (reactions !== 0) {
    //         await Notification.create({
    //           postId: post._id,
    //           user: post.user,
    //           notification: `${hash_name} reagiu ao seu post ${post.title}`,
    //           notificationType: "actionPost",
    //         });
    //       } else if (reactions === 0) {
    //         await notification.delete();
    //       }

    //       return res.json({
    //         id: response._id,
    //         like: response.like.length,
    //         deslike: response.unlike.length,
    //       });
    //     } else {
    //       return res.status(401).json({ error: "Action doesn't exists" });
    //     }
    //   },

    //   async showAll(req, res) {
    //     const post = await Post.find();

    //     const posts = post.map((pos) => {
    //       return {
    //         type: "Post",
    //         geometry: {
    //           type: "Point",
    //           coordinates: [
    //             pos.location.coordinates[1],
    //             pos.location.coordinates[0],
    //           ],
    //         },
    //         properties: {
    //           id: pos._id,
    //           title: pos.title,
    //           contact: pos.contact,
    //           type: pos.type,
    //           area: pos.area,
    //           description: pos.description,
    //           user: pos.user,
    //           like: pos.like.length,
    //           unlike: pos.unlike.length,
    //           createddAt: pos.createdAt,
    //           replies: pos.replies,
    //         },
    //       };
    //     });

    //     return res.json(posts);
    //   },
};