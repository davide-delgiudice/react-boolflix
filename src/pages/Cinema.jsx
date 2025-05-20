import { useState, useEffect } from "react"

import axios from "axios"

const Cinema = () => {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    const myApi = "322517280b230da9724d683b9cf1693e";
    
    const searchMovies = () => {

        axios.get('https://api.themoviedb.org/3/search/movie',
            {
                params: {
                    api_key: myApi,
                    query: query,
                },
            }).then((resp) =>{
                setMovies(resp.data);
            });
        };

  return (
    <>
        <header>
            <div>
                <form action="">
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" />
                    </div>
                    <div>
                        <button>
                            Cerca
                        </button>
                    </div>
                </form>
            </div>
        </header>
        <main>
            
        </main>
    </>
  )
}

export default Cinema