import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
const Chambre = props => (
<tr>
<td>{props.chambre.num}</td>
<td>{props.chambre.nbr_lit}</td>
<td>{props.chambre.nbr_patient}</td>
<td>
<button className="btn btn-secondary"><Link to={"/chambreedit/"+props.chambre._id} style={{color:"white"}}>Mise à jour</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteChambre(props.chambre._id) }}>Supprimer</button>
</td>
</tr>
)
class ChambresList extends Component {
constructor(props) {
super(props);
this.state = {
chambres: []
}
this.deleteChambre = this.deleteChambre.bind(this);
}
componentDidMount() {
axios.get('http://localhost:5000/chambres/')
.then(res => {
this.setState({ chambres: res.data })
})
.catch(error => console.log(error));
}
deleteChambre(id) {
axios.delete('http://localhost:5000/chambres/' +id)
.then(res => console.log(res.data));
this.setState({ chambres: this.state.chambres.filter(el => el._id !== id)})
}
chambresList() {
return this.state.chambres.map(currentchambre => {
return <Chambre chambre={currentchambre} deleteChambre={this.deleteChambre} key={currentchambre._id} />
})
}
render() {
return (
<div className="container">
<h3>Liste des chambres</h3>

<table className="table">
<thead className="thead-light">
<tr>
<th>Numéro de la chambre</th>
<th>Nombre de lit</th>
<th>Nombre de patient</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{this.chambresList()}
</tbody>
</table>
</div>
);
}
}
export default ChambresList;