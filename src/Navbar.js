const Navbar = () => {
  return (
    <nav className="navBar">
      <h1>Blog React</h1>
      <div className="links">
        <a href="/">Accueil</a>
        <a href="/create" className="newArticle">Nouvel article</a>
      </div>
    </nav>
  );
}
 
export default Navbar;