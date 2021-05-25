const router = require('express').Router();
let Chambre = require('../models/chambre.model');
router.route('/').get((req,res) => {
Chambre.find()
.then(chambres => res.json(chambres))
.catch(err => res.status(400).json('Error: ' +err));
});
router.route('/add').post((req,res) => {
const num = Number(req.body.num);
const nbr_lit = Number(req.body.nbr_lit);
const nbr_patient = Number(req.body.nbr_patient);
const newChambre = new Chambre({num, nbr_lit, nbr_patient});
newChambre.save()
.then(() => res.json('Chambre added!'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').get((req,res) => {
Chambre.findById(req.params.id)
.then(chambre => res.json(chambre))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').delete((req,res) => {
Chambre.findByIdAndDelete(req.params.id)
.then(chambre => res.json('Chambre deleted'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/update/:id').post((req,res) => {
Chambre.findById(req.params.id)
.then(chambre => {
chambre.num = Number(req.body.num);
chambre.nbr_lit = Number(req.body.nbr_lit);
chambre.nbr_patient = Number(req.body.nbr_patient);
chambre.save()
.then(() => res.json('Chambre updated !'))
.catch(err => res.status(400).json('Error: '+err));
})
.catch(err => res.status(400).json('Error: '+err));
});
module.exports = router;