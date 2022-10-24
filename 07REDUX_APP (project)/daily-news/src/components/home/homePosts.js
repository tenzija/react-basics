import React, { useEffect, useState } from "react";
import {
    useSelector,
    useDispatch
} from 'react-redux'
import { getPosts } from '../../store/actions'

import { Spinner, Button } from "react-bootstrap";
import Masonry from "react-masonry-css";
import Moment from "react-moment";
import { LinkContainer } from "react-router-bootstrap";

const HomePosts = () => {
    const homePosts = useSelector( state => state.posts)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(getPosts({}, 1, "desc", 6))
    }, [dispatch])

    const loadMorePosts = () => {
        const page = homePosts.page + 1
        setLoading(true)
        dispatch(getPosts(homePosts, page, "desc", 6)).then(() => {
            setLoading(false)
        })
    }
    
    return(
        <>
            <Masonry
                breakpointCols={{default:3, 800:2, 400:1}}
                className="my-masonry-grid author"
                columnClassName="my-masonry-grid_column"
            >
                { homePosts.posts ?
                    homePosts.posts.map((item)=>(
                        <div key={item.id} className='rounded'>
                            <img
                                style={{width:'100%', height:'200px'}}
                                src={item.image}
                                className='rounded border-red-double '
                            />
                            <div className='author'>
                                <div className="author-text-dark d-inline-flex rounded pl-1 pr-1 pt-1 pb-1 border-red mb-1">
                                    <span className="font-weight-bold">{item.author} -</span>
                                    <Moment
                                        format="DD MMMM"
                                        className="author-text-light"
                                    >
                                        {item.createdAt}
                                    </Moment>
                                </div>
                                <div className="content author-darker mb-1 mt-1">
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <div className='excerpt'>
                                        {item.excerpt}
                                    </div>
                                </div>
                                <LinkContainer
                                    to={`/article/${item.id}`}
                                    className='mt-1'
                                >
                                    <Button className='purple' variant='light'>
                                        Read more
                                    </Button>
                                </LinkContainer>
                            </div>
                        </div>
                    ))
                :null }
            </Masonry>
            { loading ?
                <div style={{ textAlign:'center' }}>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            :null }
            { !homePosts.end & !loading ? 
            <Button
                className='red'
                variant="primary"
                onClick={ () => loadMorePosts() }
            >
                Load more posts
            </Button>
            :null}
        </>
    )
}

export default HomePosts


 /* padding: 5px 10px;
    font-size: 12px;
    background: rgba(136, 48, 78, 0.75);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.1px);
    border: 4px double #522546;
    border-radius: 3px;
    font-weight: 300; */