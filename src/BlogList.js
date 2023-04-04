import poubelle from './images/poubelle.png';

const BlogList = ({articles, titre, handleDelete}) => {
  // const articles = props.articles;
  // const titre = props.titre; 

  return (
    <div className="blog-list">
      <h2>{titre}</h2>
      {articles.map((article) => (
      <div className="article-preview" key={article.id}>
        <h2> {article.title} </h2>
        <h3> {article.body} </h3>
        <p>Posté par {article.author} </p>
        <button className="supprimer" onClick={() => handleDelete(article.id)}><img src={poubelle} width={20} alt="poubelle" /></button>
      </div>
      ))}
    </div>
   );
}
 
export default BlogList;