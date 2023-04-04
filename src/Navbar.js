import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navBar">
      <h1>Blog React</h1>
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/create">Nouvel article</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;