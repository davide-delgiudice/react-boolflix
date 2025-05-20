import { useState, useEffect } from "react"

import axios from "axios"

const Cinema = () => {

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [query, setQuery] = useState("");

    const myApi = "322517280b230da9724d683b9cf1693e";
    const imgUrl = "https://image.tmdb.org/t/p/w342"

    const searchMedia = (e) => {
        if (query.trim() === "") {
            return;
        };

        e.preventDefault();

        // ricerca per i film
        axios.get('https://api.themoviedb.org/3/search/movie',
            {
                params: {
                    api_key: myApi,
                    query: query,
                },
            }).then((resp) => {
                setMovies(resp.data.results);
            });
        
        // ricerca per le serie
        axios.get('https://api.themoviedb.org/3/search/tv',
            {
                params: {
                    api_key: myApi,
                    query: query,
                },
            }).then((resp) => {
                setSeries(resp.data.results);
            });
    };

    const showFlags = (languageMovies) => {
        const flags = {
            it: "fi fi-it",
            en: "fi fi-us",
            ja: "fi fi-jp",
            es: "fi fi-es",
            fr: "fi fi-fr",
        };

        return flags[languageMovies] ? flags[languageMovies] : languageMovies;
    };

    const starVote = (vote) =>{
        const stars = Math.ceil(vote/2); 
        const fullStars = Array(stars).fill(<i className="fa-solid fa-star"></i>);
        const emptyStars = Array(5 - stars).fill(<i className="fa-regular fa-star"></i>);
        
        return [...fullStars, ...emptyStars];
    };

    return (
        <>
            <header>
                <div>
                    <h1>BOOLFIX</h1>
                    <form action="">
                        <div>
                            <input
                                type="text"
                                placeholder="Cerca un film o una serie..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                        <div>
                            <button onClick={searchMedia}>
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
                            <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
                            <h2>{movie.title}</h2>
                            <p>Titolo originale: {movie.original_title}</p>
                            <p>
                                Lingua originale:
                                {showFlags(movie.original_language).includes("fi") ? (
                                    <span className={showFlags(movie.original_language)}></span>
                                ) : (
                                    <span>{movie.original_language}</span>
                                )}
                            </p>
                            <p>Voto: {starVote(movie.vote_average)}</p>
                        </div>
                    ))}
                </div>
                <div>
                    {series.map((serie) => (
                        <div key={serie.id}>
                            <img src={`${imgUrl}${serie.poster_path}`} alt={serie.title} />
                            <h2>{serie.name}</h2>
                            <p>Titolo originale: {serie.original_name}</p>
                            <p>
                                Lingua originale:
                                {showFlags(serie.original_language).includes("fi") ? (
                                    <span className={showFlags(serie.original_language)}></span>
                                ) : (
                                    <span>{serie.original_language}</span>
                                )}
                            </p>
                            <p>Voto: {starVote(serie.vote_average)}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default Cinema