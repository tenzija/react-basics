import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { moviesList, getUsers } from '../store/actions'

class Home extends Component {    
    
    getMoviesHandler(){
        this.props.dispatch(moviesList())
    }

    getUsersHandler(){
        this.props.dispatch(getUsers())
    }

    render(){
        console.log(this.props)
        const { movies } = this.props
        return(
            <>
                { movies && movies.moviesList ?
                    movies.moviesList.map(item =>(
                        <div key={item.name}>
                            name: {item.name}
                        </div>
                    ))

                :null }
                { movies && movies.users ?
                    movies.users.map(item =>(
                        <div key={item.name}>
                            <div>name: {item.name}</div>
                            <div>website: {item.website}</div>
                            <div>phone: {item.phone}</div>
                        </div>
                    ))

                :null }
                <button
                    onClick={() => this.getMoviesHandler()}
                >
                    Get Movies
                </button>
                <button
                    onClick={() => this.getUsersHandler()}
                >
                    Get Users
                </button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Home);