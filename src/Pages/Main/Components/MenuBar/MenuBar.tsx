import React from 'react';
import './MenuBar.scss';
import { Navbar, Nav, Dropdown, Icon } from 'rsuite';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function refreshPage(){ 
    window.location.reload(); 
}
         
function MenuBar(){ 
    return(
     <div className='Barra'>
         <Router>
        <div>
        <ul id="nav">
         <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <div onClick={ refreshPage }><Link to="/projetos">Projetos</Link></div>
            </li>
            <li>
    <div onClick={ refreshPage }><Link to="/ctt">Contato</Link></div>
            </li>
        </ul>
      </div> 
     </Router> </div> 
    );
}
export default MenuBar;