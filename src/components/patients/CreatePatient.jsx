import React, { Component } from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class CreatePatient extends Component {
constructor(props){
super();
this.state = {
num: 0,
nom: "",
prenom: "",
age: 0,
CIN: 0,
adresse: "",
tlf: 0,
diagnostique: "",
date: new Date(),
chambres: []
}
this.onChangeNum = this.onChangeNum.bind(this);
this.onChangeNom = this.onChangeNom.bind(this);
this.onChangePrenom = this.onChangePrenom.bind(this);
this.onChangeAge = this.onChangeAge.bind(this);
this.onChangeCIN = this.onChangeCIN.bind(this);
this.onChangeAdresse = this.onChangeAdresse.bind(this);
this.onChangeTlf = this.onChangeTlf.bind(this);
this.onChangeDiagnostique = this.onChangeDiagnostique.bind(this);
this.onChangeDate = this.onChangeDate.bind(this);
this.onSubmit = this.onSubmit.bind(this);
}
componentDidMount() {
axios.get('http://localhost:5000/chambres/')
.then(response => {
if(response.data.length > 0) {
this.setState({
chambres: response.data.map(chambre => chambre.num),
num: response.data[0].num
});
}
})
}
onChangeNum(e) {
this.setState({ num: e.target.value})
}
onChangeNom(e) {
this.setState({ nom: e.target.value})
}
onChangePrenom(e) {
this.setState({ prenom: e.target.value})
}
onChangeAge(e) {
this.setState({ age: e.target.value})
}
onChangeCIN(e) {
this.setState({ CIN: e.target.value})
}
onChangeAdresse(e) {
this.setState({ adresse: e.target.value})
}
onChangeTlf(e) {
this.setState({ tlf: e.target.value})
}
onChangeDiagnostique(e) {
this.setState({ diagnostique: e.target.value})
}
onChangeDate(date) {
this.setState({ date: date})
}
onSubmit(e) {
e.preventDefault();
const patient = {
num: this.state.num,
nom: this.state.nom,
prenom: this.state.prenom,
age: this.state.age,
CIN: this.state.CIN,
adresse: this.state.adresse,
tlf: this.state.tlf,
diagnostique: this.state.diagnostique,
date: this.state.date
}
console.log(patient);
axios.post('http://localhost:5000/patients/add', patient)
.then(res => console.log(res.data));
}
render() {
return (
<div className="container">

<h3>Ajouter un patient</h3>

<form onSubmit={this.onSubmit}>

<div className="form-group">
<label>Nom: </label>
<input
type="text" required
className="form-control"
value={this.state.nom}
onChange={this.onChangeNom}
/>
</div>

<div className="form-group">
<label>Prenom: </label>
<input
type="text" required
className="form-control"
value={this.state.prenom}
onChange={this.onChangePrenom}
/>
</div>

<div className="form-group">
<label>Age: </label>
<input
type="text" required
className="form-control"
value={this.state.age}
onChange={this.onChangeAge}
/>
</div>

<div className="form-group">
<label>CIN: </label>
<input
type="text" required
className="form-control"
value={this.state.CIN}
onChange={this.onChangeCIN}
/>
</div>

<div className="form-group">
<label>Adresse: </label>
<input
type="text" required
className="form-control"
value={this.state.adresse}
onChange={this.onChangeAdresse}
/>
</div>

<div className="form-group">
<label>Numéro de téléphone: </label>
<input
type="text" required
className="form-control"
value={this.state.tlf}
onChange={this.onChangeTlf}
/>
</div>

<div className="form-group">
<label>Diagnostique: </label>
<input
type="text" required
className="form-control"
value={this.state.diagnostique}
onChange={this.onChangeDiagnostique}
/>
</div>

<div className="form-group">
<label>Date d'entrée: </label>
<div>
<DatePicker
selected={this.state.date}
onChange={this.onChangeDate}
/>
</div>
</div>

<div className="form-group">
<label>Chambre numéro: </label>
<select ref="userInput"
required
className="form-control"
value={this.state.num}
onChange={this.onChangeNum} >
{
this.state.chambres.map(function(chambre) {
return <option key={chambre} value={chambre}>{chambre}</option>;
})
}
</select>
</div>

<div className="form-group">
<input type="submit" value="Ajouter" className="btn btn-primary" />
</div>
</form>
</div>
);
}
}
export default CreatePatient;