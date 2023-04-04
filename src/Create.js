import { useState } from "react";
import { useHistory } from "react-router-dom";
import gifLoading from './images/loading.gif';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Michel');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {title, body, author};
    setIsLoading(true);

    setTimeout(() => {
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(article)
      })
      .then (
        () => {
          console.log('Nouvel article ajouté');
          setIsLoading(false);
          history.push('/');
        }
      );
    },500)
  }

  return (
    <div className="create">
      <h2>Ajouter un blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label>Titre de l'article: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

          <label>Corps :</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>

          <label>Autheur :</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="michel">Michel</option>
            <option value="jean">Toto</option>
            <option value="jean">Titi</option>
            <option value="jean">Jean</option>
          </select>
        </div>

        {!isLoading && <button>Publier</button>}
        {isLoading && <button>En cours de publication...</button>}
        {isLoading && <div className="loadingWrapper"><img className="loadingGif" src={gifLoading} alt="chargement" width={100} /></div>}
      </form>
    </div>
  );
}
 
export default Create;