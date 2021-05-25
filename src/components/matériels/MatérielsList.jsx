import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
const Matériel = props => (
<tr>
<td>{props.matériel.référence}</td>
<td>{props.matériel.mnom}</td>
<td>{props.matériel.prix}</td>
<td>{props.matériel.quantité}</td>
<td>
<button className="btn btn-secondary"><Link to={"/matérieledit/"+props.matériel._id} style={{color:"white"}}>Mise à jour</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteMatériel(props.matériel._id) }}>Supprimer</button>
</td>
</tr>
)
class MatérielsList extends Component {
constructor(props) {
super(props);
this.state = {
matériels: []
}
this.deleteMatériel = this.deleteMatériel.bind(this);
}
componentDidMount() {
axios.get('http://localhost:5000/materiels/')
.then(res => {
this.setState({ matériels: res.data })
})
.catch(error => console.log(error));
}
deleteMatériel(id) {
axios.delete('http://localhost:5000/materiels/' +id)
.then(res => console.log(res.data));
this.setState({ matériels: this.state.matériels.filter(el => el._id !== id)})
}
matérielsList() {
return this.state.matériels.map(currentmatériel => {
return <Matériel matériel={currentmatériel} deleteMatériel={this.deleteMatériel} key={currentmatériel._id} />
})
}
render() {
return (
<div className="container">
<h3>Liste du matériel</h3>

<table className="table">
<thead className="thead-light">
<tr>
<th>Référence</th>
<th>Nom</th>
<th>Prix d'utilisation par jour</th>
<th>Quantité disponible dans le stock</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{this.matérielsList()}
</tbody>
</table>
</div>
);
}
}
export default MatérielsList;