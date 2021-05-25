const router = require('express').Router();
let Consommable = require('../models/consommable.model');
router.route('/').get((req,res) => {
Consommable.find()
.then(consommables => res.json(consommables))
.catch(err => res.status(400).json('Error: ' +err));
});
router.route('/add').post((req,res) => {
const créférence = req.body.créférence;
const cnom = req.body.cnom;
const cprix = Number(req.body.cprix);
const cquantité = Number(req.body.cquantité);
const newConsommable = new Consommable({créférence, cnom, cprix, cquantité});
newConsommable.save()
.then(() => res.json('Consommable added!'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').get((req,res) => {
Consommable.findById(req.params.id)
.then(consommable => res.json(consommable))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').delete((req,res) => {
Consommable.findByIdAndDelete(req.params.id)
.then(consommable => res.json('Consommable deleted'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/update/:id').post((req,res) => {
Consommable.findById(req.params.id)
.then(consommable => {
consommable.créférence = req.body.créférence;
consommable.cnom = req.body.cnom;
consommable.cprix = Number(req.body.cprix);
consommable.cquantité = Number(req.body.cquantité);
consommable.save()
.then(() => res.json('Consommable updated !'))
.catch(err => res.status(400).json('Error: '+err));
})
.catch(err => res.status(400).json('Error: '+err));
});
module.exports = router;