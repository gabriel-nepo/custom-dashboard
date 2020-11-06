const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema({
    criticality: {
        type: Number,
        required: true,
    },
    images: [],
    videos: [],
    time: {
        type: String,
        required: true
    },
    sapCode: {
        type: Number,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    manufaturer: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    equip: {
        type: String,
        required: true
    },
    original: {
        type: Boolean,
        required: true
    },
    safetyQualityEnvRisk: {
        type: Boolean,
        required: true
    },
    lineStopRisk: {
        type: Boolean,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    consevation:{
        type: String,
        required: true
    },
    lifespan:{
        type: String,
        required: true
    },
    material:{
        type: String,
        required: true
    },
    objective:{
        type: String,
        required: true
    },
    catastroficFailure:{
        type: Boolean,
        required: true
    },
    forcedDeterioration:{
        type: Boolean,
        required: true
    },
    chemicalContact: {
        type: Boolean,
        required: true
    },
    quantityInLine:{
        type: Number,
        required: true
    },
    temperature: {
        type: Number,
        required: true,
    },
    pressure: {
        type: Number,
        required: true
    },
    line: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// PostSchema.pre('save', async function(next){
//     if(TYPE.includes(this.type)){
//         next();
//     }
//     next(new Error('Invalid type'));

// });

const Item = mongoose.model('Item',ItemSchema);
module.exports = Item;