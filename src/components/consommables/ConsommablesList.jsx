import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
const Consommable = props => (
<tr>
<td>{props.consommable.créférence}</td>
<td>{props.consommable.cnom}</td>
<td>{props.consommable.cprix}</td>
<td>{props.consommable.cquantité}</td>
<td>
<button className="btn btn-secondary"><Link to={"/consommableedit/"+props.consommable._id} style={{color:"white"}}>Mise à jour</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteConsommable(props.consommable._id) }}>Supprimer</button>
</td>
</tr>
)
class ConsommablesList extends Component {
constructor(props) {
super(props);
this.state = {
consommables: []
}
this.deleteConsommable = this.deleteConsommable.bind(this);
}
componentDidMount() {
axios.get('http://localhost:5000/consommables/')
.then(res => {
this.setState({ consommables: res.data })
})
.catch(error => console.log(error));
}
deleteConsommable(id) {
axios.delete('http://localhost:5000/consommables/' +id)
.then(res => console.log(res.data));
this.setState({ consommables: this.state.consommables.filter(el => el._id !== id)})
}
consommablesList() {
return this.state.consommables.map(currentconsommable => {
return <Consommable consommable={currentconsommable} deleteConsommable={this.deleteConsommable} key={currentconsommable._id} />
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
<th>Prix unitaire</th>
<th>Quantité disponible dans le stock</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{this.consommablesList()}
</tbody>
</table>
</div>
);
}
}
export default ConsommablesList;