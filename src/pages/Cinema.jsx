import { useState, useEffect } from "react"

import axios from "axios"

const Cinema = () => {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    const myApi = "322517280b230da9724d683b9cf1693e";
    
    const getMovies = () => {
        axios.get('')
    }

  return (
    <div></div>
  )
}

export default Cinema