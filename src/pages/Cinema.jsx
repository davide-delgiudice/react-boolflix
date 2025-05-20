import { useState, useEffect } from "react"

import axios from "axios"

const Cinema = () => {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    const myApi = "322517280b230da9724d683b9cf1693e";

    const searchMovies = (e) => {
        if (query.trim() === "") {
            return;
        };

        e.preventDefault();

        axios.get('https://api.themoviedb.org/3/search/movie',
            {
                params: {
                    api_key: myApi,
                    query: query,
                },
            }).then((resp) => {
                setMovies(resp.data.results);
            });
    };

    const showFlags = (languageMovies) => {
        const flags = {
            it: "fi fi-it",
            en: "fi fi-us",
            jp: "fi fi-jp",
            es: "fi fi-es",
        };

        return flags[languageMovies] ? flags[languageMovies] : languageMovies;
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
                            <p>
                                {showFlags(movie.original_language).includes("fi") ? (
                                    <span className={showFlags(movie.original_language)}></span>
                                ) : (
                                    <span>{movie.original_language}</span>
                                )}
                            </p>
                            <p>Voto: {movie.vote_average}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Cinema