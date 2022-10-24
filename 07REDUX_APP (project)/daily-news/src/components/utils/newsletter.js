import React, { useRef, useState, useEffect } from 'react'
import {
    useSelector,
    useDispatch
} from 'react-redux'
import {
    Form,
    Button
} from 'react-bootstrap'
import { addNewsletter, clearNewsletter } from '../../store/actions'
import { showToast } from './tools'


const NewsLetter = () => {
    const userData = useSelector(state => state.user)
    const dispatch = useDispatch()
    const textInput = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = textInput.current.value
        dispatch(addNewsletter({email:value}))
    }

    useEffect(() => {
        if(userData.newsletter){
            if(userData.newsletter === "added"){
                showToast('SUCCESS', "Thank you for subscribing")
                textInput.current.value = ""
                //dispatch(clearNewsletter())
            } else{
                showToast('ERROR', "You are already subscribed")
                textInput.current.value = ""
                //dispatch(clearNewsletter())
            }
        }
    }, [userData])

    useEffect(() => {
        return ()=>{
            dispatch(clearNewsletter())
        }
    }, [dispatch])

    return(
        <>
            <div className='newsletter_container'>
                <div className='author-darker rounded text-center'>
                    <h1 className='author-darker rounded d-inline-flex'>Join our newsletter</h1>
                    <div className='form'>
                        <Form className='mt-3' onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control
                                    type='text'
                                    placeholder='example@mail.com'
                                    name='email'
                                    ref={textInput}
                                />
                            </Form.Group>
                            <Button variant='primary' type='submit' className='purple'>
                                Add me to the list
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsLetter