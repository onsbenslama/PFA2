const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const consommableSchema = new Schema({
créférence: {
type: String,
required: true,
unique: true,
trim: true,
},
cnom: {
    type: String,
    required: true,
    trim: true,
},
cprix: {
    type: Number,
    required: true,
    trim: true,
},
cquantité: {
    type: Number,
    required: true,
    trim: true,
}
}, {
timestamps: true
});
const Consommable = mongoose.model('Consommable', consommableSchema);
module.exports = Consommable;