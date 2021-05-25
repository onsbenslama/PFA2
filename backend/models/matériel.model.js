const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const matérielSchema = new Schema({
référence: {
type: String,
required: true,
unique: true,
trim: true,
},
mnom: {
    type: String,
    required: true,
    trim: true,
},
prix: {
    type: Number,
    required: true,
    trim: true,
},
quantité: {
    type: Number,
    required: true,
    trim: true,
}
}, {
timestamps: true
});
const Matériel = mongoose.model('Matériel', matérielSchema);
module.exports = Matériel;