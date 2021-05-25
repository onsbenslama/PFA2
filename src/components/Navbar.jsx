import React, { Component } from "react";
import { Link } from "react-router-dom";
import {NavDropdown} from 'react-bootstrap';
class Navbar extends Component { 
render() {
return (
<nav className="navbar navbar-dark bg-dark navbar-expand-lg">

<Link to="#" className="navbar-brand">Gestionnaire de stock</Link>

<div className="collapse navbar-collapse">
<ul className="navbar-nav">

<NavDropdown title="Patients" id="basic-nav-dropdown">  
        <NavDropdown.Item href="/">Liste des patients</NavDropdown.Item>
        <NavDropdown.Item href="/create">Ajouter un patient</NavDropdown.Item>
</NavDropdown>

<NavDropdown title="Chambres" id="basic-nav-dropdown">  
        <NavDropdown.Item href="/chambrelist">Liste des chambres</NavDropdown.Item>
        <NavDropdown.Item href="/chambre">Ajouter une chambre</NavDropdown.Item>
</NavDropdown>

<NavDropdown title="Matériels" id="basic-nav-dropdown">  
        <NavDropdown.Item href="/matérielslist">Liste du matériel</NavDropdown.Item>
        <NavDropdown.Item href="/matériel">Ajouter au matériel</NavDropdown.Item>
</NavDropdown>

<NavDropdown title="Consommables" id="basic-nav-dropdown">  
        <NavDropdown.Item href="/consommableslist">Liste des consommables</NavDropdown.Item>
        <NavDropdown.Item href="/consommable">Ajouter au consommables</NavDropdown.Item>
</NavDropdown>


</ul>
</div>

</nav>
);
}
}
export default Navbar;