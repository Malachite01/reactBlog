import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //Exécuté une fois au début pour récup la data
  useEffect(() => {
    const abortCont = new AbortController();
    //Simuler temps de réponse long requete internet
    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
        .then(
          res => {
            if(res.status !== 200) {
              throw Error('Impossible de récupérer les données');
            } else {
              return res.json();
            }
          }
        )
        .then(
          data => {
            setData(data);
            setIsLoading(false);
            setError(null);
          }
        )
        .catch(
          err => {
            if(err.name === "AbortError") {
              console.log("fetch annulé");
            } else {
              setIsLoading(false);
              setError(err.message);
            }
          }  
        );
      }, 500);
    return () => {abortCont.abort()}
  }, [url]);

  return { data, isLoading, error}
}

export default useFetch;