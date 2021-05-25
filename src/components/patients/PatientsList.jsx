import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
const Patient = props => (
<tr>
<td>{props.patient.nom}</td>
<td>{props.patient.prenom}</td>
<td>{props.patient.age}</td>
<td>{props.patient.CIN}</td>
<td>{props.patient.adresse}</td>
<td>{props.patient.tlf}</td>
<td>{props.patient.diagnostique}</td>
<td>{props.patient.date.substring(0,10)}</td>
<td>{props.patient.num}</td>
<td>
<button className="btn btn-secondary"><Link to={"/edit/"+props.patient._id} style={{color:"white"}}>Mise à jour</Link></button> | <button className="btn btn-danger" onClick={() => {props.deletePatient(props.patient._id) }}>Supprimer</button>
</td>
</tr>
)
class PatientsList extends Component {
constructor(props) {
super(props);
this.state = {
patients: []
}
this.deletePatient = this.deletePatient.bind(this);
}
componentDidMount() {
axios.get('http://localhost:5000/patients/')
.then(res => {
this.setState({ patients: res.data })
})
.catch(error => console.log(error));
}
deletePatient(id) {
axios.delete('http://localhost:5000/patients/' +id)
.then(res => console.log(res.data));
this.setState({ patients: this.state.patients.filter(el => el._id !== id)})
}
patientsList() {
return this.state.patients.map(currentpatient => {
return <Patient patient={currentpatient} deletePatient={this.deletePatient} key={currentpatient._id} />
})
}
render() {
return (
<div className="container">
<h3>Liste des patients</h3>

<table className="table">
<thead className="thead-light">
<tr>
<th>Nom</th>
<th>Prenom</th>
<th>Age</th>
<th>CIN</th>
<th>Adresse</th>
<th>Numéro de téléphone</th>
<th>Diagnostique</th>
<th>Date d'entrée</th>
<th>Chambre</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{this.patientsList()}
</tbody>
</table>
</div>
);
}
}
export default PatientsList;