import React, { useState } from 'react';
import MovieCard from "./MovieCard"
function MovieSearch() {

    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    let movieList=""
    const searchMovie = async (event) => {
        event.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url)
            const data  = await res.json()
            //console.log(data)
            setMovies(data.results)
        }catch(err){
            console.error(err)
        }
    }

    
    movieList = movies ? movies.map( movie => <MovieCard item = {movie} />) : ""

    return (
        <>
        <form className="form" onSubmit={searchMovie}>
            <input 
                type="text" 
                value={query} 
                onChange={(event) => setQuery(event.target.value)} 
                placeholder="for example: Avatar"
                className="input" 
            />
            <button type="submit" className="button">Search</button>
        </form>
        {movieList}
        </>
    );
}

export default MovieSearch