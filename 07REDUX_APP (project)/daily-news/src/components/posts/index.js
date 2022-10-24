import React,{ useEffect } from 'react'
import {
    useSelector,
    useDispatch
} from 'react-redux'
import { getPostById, clearPostById } from '../../store/actions'
import { showToast } from '../utils/tools'

import Moment from 'react-moment'
import NewsLetter from '../utils/newsletter'


const PostComponent = (props) => {
    const post = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostById(props.match.params.id))
    }, [dispatch, props.match.params.id])

    useEffect(() => {
        if(post.postById === '404'){
            showToast('ERROR', 'The page you requested does not exist')
            props.history.push('/')
        }
    }, [post, props.history])

    useEffect(() => {
        return () => {
            dispatch(clearPostById())
        }
    }, [dispatch])

    return(
        <>
            { post.postById ?
                <div className='article_container'>
                    <h1 className='author-darker'>{post.postById.title}</h1>
                    <div
                        style={{
                            background:`url(${post.postById.imagexl})`
                        }}
                        className='image rounded border-red-double'
                    >
                    </div>
                    <div className='author'>
                        <div className="author-text-dark d-inline-flex rounded pl-1 pr-1 pt-1 pb-1 border-red mb-1">
                            Created by: <span className="font-weight-bold">{post.postById.author} -</span>
                            <Moment
                                format="DD MMMM"
                                className="author-text-light"
                            >
                                {post.postById.createdAt}
                            </Moment>
                        </div>
                    </div>
                    <div className='mt-3 content text pl-3 pr-3 pt-1'>
                        <div dangerouslySetInnerHTML={
                            {__html: post.postById.content}
                        }>
                        </div>
                    </div>
                </div>
            :null }
            <NewsLetter/>
        </>
    )
}

export default PostComponent