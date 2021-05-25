const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientSchema = new Schema({
num: {type: Number, required: true},
nom: {type: String, required: true},
prenom: {type: String, required: true},
age: {type: Number, required: true},
CIN: {type: Number, required: true},
adresse: {type: String, required: true},
tlf: {type: Number, required: true},
diagnostique: {type: String, required: true},
date: {type: Date,required: true}
}, {
timestamps: true
});
const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;