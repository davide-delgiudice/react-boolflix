import { useState, useEffect } from "react"

import axios from "axios"

const Cinema = () => {

    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    
    const getMovies = () => {
        axios.get('')
    }

  return (
    <div></div>
  )
}

export default Cinema