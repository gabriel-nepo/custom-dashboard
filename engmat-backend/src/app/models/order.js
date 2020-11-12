const mongoose = require('mongoose');
const pagination = require('mongoose-paginate-v2');

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    updates: [],
    status: {
        type: String,
        required: true,
        default: "Backlog"
    }
}, {
    timestamps: true
});

// PostSchema.pre('save', async function(next){
//     if(TYPE.includes(this.type)){
//         next();
//     }
//     next(new Error('Invalid type'));

// });
OrderSchema.plugin(pagination);
const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;