import React {PropTypes} from 'react';
import {Link} from 'react-router';
import {LoginLink} from 'react-stormpath';

export default class Header extends React.Component {
  render() {
   return (
     <div className="container">
       <h2 className="text-center">VOUS AVEZ PERDU!</h2>
       <hr/>
       <div className="jumbotron">
         <p>
           <strong>MOUHAHAHAH!</strong>
         </p>
         <p>Bon sinon, voici juste de quoi se login</p>
         <ol className="lead">
          <li><link to="/register">S'enregister</link></li>
          <li><link to="/login">Se connecter</link></li>
          <li><link to="/profiler">Profil</link></li>
         </ol>
       </div>
     </div>
   );
  }
}
