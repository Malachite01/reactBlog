import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import gifLoading from './images/loading.gif';

const BlogDetails = () => {
const { id } = useParams();
const {data: article, error, isLoading} = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className="blog-details">
      <h2>Détails de l'article - {id}</h2>
      <br />
      {error && <div className="error">{error}</div>}
      {isLoading && !error && <div className="loadingWrapper"><img className="loadingGif" src={gifLoading} alt="chargement" width={100} /></div>}
      {article && (
        <article>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <br />
          <p>Posté par {article.author}</p>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;