import React, { Component } from 'react';
import axios from "axios";
class EditMatériel extends Component {
constructor(props){
super();
this.state = {
    référence: '',
    mnom: '',
    prix: 0,
    quantité: 0,
}
this.onChangeRéférence = this.onChangeRéférence.bind(this);
this.onChangeMnom = this.onChangeMnom.bind(this);
this.onChangePrix = this.onChangePrix.bind(this);
this.onChangeQuantité = this.onChangeQuantité.bind(this);
this.onSubmit = this.onSubmit.bind(this);
}
componentDidMount() {
axios.get('http://localhost:5000/materiels/'+this.props.match.params.id)
.then(res => {
this.setState({
référence: res.data.référence,
mnom: res.data.mnom,
prix: res.data.prix,
quantité: res.data.quantité,
})
})
.catch(function (error){
console.log(error);
})
}
onChangeRéférence(e) {
this.setState({ référence: e.target.value})
}
onChangeMnom(e) {
this.setState({ mnom: e.target.value})
}
onChangePrix(e) {
this.setState({ prix: e.target.value})
}
onChangeQuantité(e) {
this.setState({ quantité: e.target.value})
}
onSubmit(e) {
e.preventDefault();
const matériel = {
référence: this.state.référence,
mnom: this.state.mnom,
prix: this.state.prix,
quantité: this.state.quantité,
}
console.log(matériel);
axios.post('http://localhost:5000/materiels/update/'+this.props.match.params.id, matériel)
.then(res => console.log(res.data));
}
render() {
return (
<div className="container">
<h3>Mettre à jour le matériel</h3>

<form onSubmit={this.onSubmit}>

<div className="form-group">
<label>Référence: </label>
<input
type="text" required
className="form-control"
value={this.state.référence}
onChange={this.onChangeRéférence}
/>
</div>

<div>
<label>Nom: </label>
<input
type="text" required
className="form-control"
value={this.state.mnom}
onChange={this.onChangeMnom}
/>
</div>

<div>
<label>Prix d'utilisation par jour: </label>
<input
type="text" required
className="form-control"
value={this.state.prix}
onChange={this.onChangePrix}
/>
</div>

<div>
<label>Quantité disponible dans le stock: </label>
<input
type="text" required
className="form-control"
value={this.state.quantité}
onChange={this.onChangeQuantité}
/>
</div>

<div className="form-group">
<input type="submit" value="Mettre à jour" className="btn btn-primary" />
</div>
</form>
</div>
);
}
}
export default EditMatériel;