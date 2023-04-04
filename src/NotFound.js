import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Erreur 404</h1>
      <h2>Désolé</h2>
      <p>Cette page n'a pas été trouvée</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
}
 
export default NotFound;