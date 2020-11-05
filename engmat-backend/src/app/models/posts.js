// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const PointSchema = require('./utils/PointSchema');

// const TYPE = ['NEED','PUBLIC_SERVICE','OFFERING'];

// const PostSchema = new mongoose.Schema({
//     user:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         require: true,
//     },
//     type: {
//         type: String,
//         required: true,
//         enum: TYPE,
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     },
//     location: {
//         type: PointSchema,
//         index: '2dsphere'
//     }, 
// });

// PostSchema.pre('save', async function(next){
//     if(TYPE.includes(this.type)){
//         next();
//     }
//     next(new Error('Invalid type'));

// });

// const Post = mongoose.model('Post',PostSchema);
// module.exports = Post;