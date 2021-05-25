import React, { Component } from 'react';
import axios from "axios";
class CreateChambre extends Component {
constructor(props){
super();
this.state = {
num: 0,
nbr_lit: 0,
nbr_patient: 0,
}
this.onChangeNum = this.onChangeNum.bind(this);
this.onChangeNbr_lit = this.onChangeNbr_lit.bind(this);
this.onChangeNbr_patient = this.onChangeNbr_patient.bind(this);
this.onSubmit = this.onSubmit.bind(this);
}
onChangeNum(e) {
this.setState({ num: e.target.value})
}
onChangeNbr_lit(e) {
this.setState({ nbr_lit: e.target.value})
}
onChangeNbr_patient(e) {
this.setState({ nbr_patient: e.target.value})
}
onSubmit(e) {
e.preventDefault();
const chambre = {
num: this.state.num,
nbr_lit: this.state.nbr_lit,
nbr_patient: this.state.nbr_patient,
}
console.log(chambre);
axios.post('http://localhost:5000/chambres/add', chambre)
.then(res => console.log(res.data));  
this.setState({
num: 0,
nbr_lit: 0,
nbr_patient: 0,
})
}
render() {
return (
<div className="container">

<h3>Ajouter une chambre</h3>

<form onSubmit={this.onSubmit}>

<div className="form-group">
<label>Numéro de la chambre: </label>
<input
type="text" required
className="form-control"
value={this.state.num}
onChange={this.onChangeNum}
/>
</div>

<div>
<label>Nombre de lit: </label>
<input
type="text" required
className="form-control"
value={this.state.nbr_lit}
onChange={this.onChangeNbr_lit}
/>
</div>

<div>
<label>Nombre de patient dans la chambre: </label>
<input
type="text" required
className="form-control"
value={this.state.nbr_patient}
onChange={this.onChangeNbr_patient}
/>
</div>

<div className="form-group">
<input type="submit" value="Ajouter" className="btn btn-primary" />
</div>
</form>
</div>
);
}
}
export default CreateChambre;