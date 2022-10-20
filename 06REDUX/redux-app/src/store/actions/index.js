import {
    MOVIES_LIST,
    MOVIE_DATA,
    GET_USERS
} from '../types';
import axios from 'axios';

export const getUsers = () => {
    const request = axios.get(`https://jsonplaceholder.typicode.com/users`)
                    .then( response => {
                        return response.data
                    })
    return {
        type: GET_USERS,
        payload: request
    }
}

export const moviesList = () => {
    return {
        type: MOVIES_LIST,
        payload:[
            {id: 1, name:'Lord of the Rings'},
            {id: 2, name:'Pulp Fiction'},
            {id: 13, name:'Seven deadly Sins'}
        ]
    }
}

export const movieData = () => {
    return {
        type: MOVIE_DATA,
        payload: {
            id:1,
            name:'Lord of the Rings',
            actors:['Gollum', 'Aragon'],
            year:2001,
            director:'Peter Jackson'
        }
    }
}