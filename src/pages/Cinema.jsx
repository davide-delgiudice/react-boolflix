import { useState, useEffect } from "react"

import axios from "axios"

const Cinema = () => {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    const myApi = "322517280b230da9724d683b9cf1693e";
    
    const searchMovies = (e) => {
        if (query === ""){
            return;
        };

        e.preventDefault();

        axios.get('https://api.themoviedb.org/3/search/movie',
            {
                params: {
                    api_key: myApi,
                    query: query,
                },
            }).then((resp) =>{
                setMovies(resp.data.results);
            });
        };

    // useEffect(() => {
    //     searchMovies();
    // }, []);

  return (
    <>
        <header>
            <div>
                <h1>BOOLFIX</h1>
                <form action="">
                    <div>
                        <input 
                            type="text"
                            placeholder="Cerca un film..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                    <div>
                        <button onClick={searchMovies}>
                            Cerca
                        </button>
                    </div>
                </form>
            </div>
        </header>
        <main>
            <div>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>Titolo originale: {movie.original_title}</p>
                        <p>Lingua originale: {movie.original_language}</p>
                        <p>Voto: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </main>
    </>
  )
}

export default Cinema