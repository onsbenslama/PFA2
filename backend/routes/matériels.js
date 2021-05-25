const router = require('express').Router();
let Matériel = require('../models/matériel.model');
router.route('/').get((req,res) => {
Matériel.find()
.then(matériels => res.json(matériels))
.catch(err => res.status(400).json('Error: ' +err));
});
router.route('/add').post((req,res) => {
const référence = req.body.référence;
const mnom = req.body.mnom;
const prix = Number(req.body.prix);
const quantité = Number(req.body.quantité);
const newMatériel = new Matériel({référence, mnom, prix, quantité});
newMatériel.save()
.then(() => res.json('Matériel added!'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').get((req,res) => {
Matériel.findById(req.params.id)
.then(matériel => res.json(matériel))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').delete((req,res) => {
Matériel.findByIdAndDelete(req.params.id)
.then(matériel => res.json('Matériel deleted'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/update/:id').post((req,res) => {
Matériel.findById(req.params.id)
.then(matériel => {
matériel.référence = req.body.référence;
matériel.mnom = req.body.mnom;
matériel.prix = Number(req.body.prix);
matériel.quantité = Number(req.body.quantité);
matériel.save()
.then(() => res.json('Matériel updated !'))
.catch(err => res.status(400).json('Error: '+err));
})
.catch(err => res.status(400).json('Error: '+err));
});
module.exports = router;