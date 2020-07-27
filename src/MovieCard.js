import React from 'react';

function MovieCard (props) {

    console.log(props.item);
    
    return(
        <div className="movieCardList"> 
            <div className="movieCard">
                <img className="movieCard--image"
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.item.poster_path}`}
                    alt={props.item.title + ' poster'}
                    />
                <div className="movieCard--content">
                    <h3 className="movieCard--title">{props.item.title}</h3>
                    <p><small>RELEASE DATE: {props.item.release_date}</small></p>
                    <p><small>RATING: {props.item.vote_average}</small></p>
                    <p className="movieCard--desc">{props.item.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard