const router = require('express').Router();
let Patient = require('../models/patient.model');
router.route('/').get((req,res) => {
Patient.find()
.then(patients => res.json(patients))
.catch(err => res.status(400).json('Error: ' +err));
});
router.route('/add').post((req,res) => {
const num = Number(req.body.num);
const nom = req.body.nom;
const prenom = req.body.prenom;
const age = Number(req.body.age);
const CIN = Number(req.body.CIN);
const adresse = req.body.adresse;
const tlf = Number(req.body.tlf);
const diagnostique = req.body.diagnostique;
const date = Date.parse(req.body.date);
const newPatient = new Patient({num, nom, prenom, age, CIN, adresse, tlf, diagnostique, date});
newPatient.save()
.then(() => res.json('Patient added!'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').get((req,res) => {
Patient.findById(req.params.id)
.then(patient => res.json(patient))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').delete((req,res) => {
Patient.findByIdAndDelete(req.params.id)
.then(patient => res.json('Patient deleted'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/update/:id').post((req,res) => {
Patient.findById(req.params.id)
.then(patient => {
patient.num = Number(req.body.num);
patient.nom = req.body.nom;
patient.prenom = req.body.prenom;
patient.age = Number(req.body.age);
patient.CIN = Number(req.body.CIN);
patient.adresse = req.body.adresse;
patient.tlf = Number(req.body.tlf);
patient.diagnostique = req.body.diagnostique;
patient.date = Date.parse(req.body.date);
patient.save()
.then(() => res.json('Patient updated !'))
.catch(err => res.status(400).json('Error: '+err));
})
.catch(err => res.status(400).json('Error: '+err));
});
module.exports = router;