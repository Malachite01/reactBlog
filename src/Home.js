import BlogList from "./BlogList";
import gifLoading from './images/loading.gif';
import useFetch from "./useFetch";

const Home = () => {
  //Faire une cb opie et supprimer localement la donnée
  const handleDelete = (id) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      window.location.reload();
    });
  }

  const {data: articles, isLoading, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isLoading && !error && <div className="loadingWrapper"><img className="loadingGif" src={gifLoading} alt="chargement" width={100} /></div>}
      {articles && <BlogList articles={articles} titre="Tous les articles" handleDelete={handleDelete}/>}
      {articles && <BlogList articles={articles.filter((article) => article.author === "michel")} titre="Posté par michel"/>}
    </div>
  );
}
 
export default Home;