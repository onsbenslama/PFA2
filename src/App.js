import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Search from "./components/search";
import CreatePatient from "./components/patients/CreatePatient";
import EditPatient from "./components/patients/EditPatient";
import PatientsList from "./components/patients/PatientsList";

import CreateChambre from "./components/chambres/CreateChambre";
import EditChambre from "./components/chambres/EditChambre";
import ChambresList from "./components/chambres/ChambresList";

import CreateMatériel from "./components/matériels/CreateMatériel";
import EditMatériel from "./components/matériels/EditMatériel";
import MatérielsList from "./components/matériels/MatérielsList";

import CreateConsommable from "./components/consommables/CreateConsommable";
import EditConsommable from "./components/consommables/EditConsommable";
import ConsommablesList from "./components/consommables/ConsommablesList";

function App() {
    const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
return (

<BrowserRouter>
<Navbar />

<br />
<Route path="/create" component={CreatePatient} />
<Route path="/edit/:id" component={EditPatient} />
<Route exact path="/" component={PatientsList} />

<Route path="/chambre" component={CreateChambre} />
<Route path="/chambreedit/:id" component={EditChambre} />
<Route path="/chambrelist" component={ChambresList} />

<Route path="/matériel" component={CreateMatériel} />
<Route path="/matérieledit/:id" component={EditMatériel} />
<Route path="/matérielslist" component={MatérielsList} />

<Route path="/consommable" component={CreateConsommable} />
<Route path="/consommableedit/:id" component={EditConsommable} />
<Route path="/consommableslist" component={ConsommablesList} />
<div className="container">
     
<div className="container">
      <Main />
    </div>
</div> 
</BrowserRouter>

);
}
export default App;
