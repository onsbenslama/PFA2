const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chambreSchema = new Schema({
num: {type: Number, required: true, unique: true, trim: true},
nbr_lit: {type: Number, required: true, trim: true},
nbr_patient: {type: Number, required: true, trim: true}
}, {
timestamps: true
});
const Chambre = mongoose.model('Chambre', chambreSchema);
module.exports = Chambre;