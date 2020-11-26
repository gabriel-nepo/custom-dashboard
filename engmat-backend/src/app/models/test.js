const mongoose = require('mongoose');
const pagination = require('mongoose-paginate-v2');

const TestSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    fail: {
        type: String,
        required: true
    },
    wear: {
        type: String,
        required: true
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
}, {
    timestamps: true
});

// PostSchema.pre('save', async function(next){
//     if(TYPE.includes(this.type)){
//         next();
//     }
//     next(new Error('Invalid type'));

// });
TestSchema.plugin(pagination);
const Test = mongoose.model('Test', TestSchema);
module.exports = Test;