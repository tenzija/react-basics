//// with hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieData } from '../store/actions'

const Movie = (props) => {
    
    const movies = useSelector( state => state.movies )
    const dispatch = useDispatch()

    const getMovie = () => {
        dispatch(movieData())
    }

    console.log(movies)
    return(
        <>
            { movies && movies.movieData ? 
                <div>
                    <div>
                        Name: {movies.movieData.name}
                    </div>
                    <div>
                        Director: {movies.movieData.director}
                    </div>
                    <div>
                        Year: {movies.movieData.year}
                    </div>
                    <div>
                        Actors: {movies.movieData.actors}
                    </div>
                </div>
            :null }
            <button
                onClick={ () => getMovie() }
            >
                Get Movie
            </button>
        </>
    )
}


export default Movie

//// without hooks
// import React from "react";
// import { connect } from "react-redux";


// const Movie = (props) => {
    
//     console.log(props)
//     return(
//         <>
//             Movie
//         </>
//     )
// }

// const mapStateToProps = (state) => {
//     return { movies: state.movies }
// }

// export default connect(mapStateToProps)(Movie)