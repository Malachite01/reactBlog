import { useState, useEffect} from "react";
import BlogList from "./BlogList";
import gifLoading from './images/loading.gif';

const Home = () => {
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Faire une cb opie et supprimer localement la donnée
  const handleDelete = (id) => {
    const newArticles = articles.filter((article) => article.id !== id);
    setArticles(newArticles);
  }

  //Exécuté une fois au début pour récup la data
  useEffect(() => {
    //Simuler temps de réponse long requete internet
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(
          res => {
            return res.json();
          }
        )
        .then(
          data => {
            setArticles(data);
            setIsLoading(false);
          }
        )
      }, 1000);
  }, []);

  return (
    <div className="home">
      {isLoading && <div className="loadingWrapper"><img className="loadingGif" src={gifLoading} alt="chargement" width={100} /></div>}
      {articles && <BlogList articles={articles} titre="Tous les blogs" handleDelete={handleDelete}/>}
      {articles && <BlogList articles={articles.filter((article) => article.author === "michel")} titre="Posté par michel"/>}
    </div>
  );
}
 
export default Home;