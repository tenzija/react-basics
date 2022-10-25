import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Alert } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { sendMessage } from '../../store/actions'
import { showToast } from '../utils/tools'

const Contact = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            email:'',
            firstname:'',
            lastname:'',
            message:''
        },
        
        validationSchema: Yup.object({
            email: Yup
                .string()
                .required('Sorry the email is required')
                .email("This is not a valid email"),
            firstname: Yup
                .string()
                .required('Sorry your first name is required')
                .max(10, "First name too long"),
            lastname: Yup
                .string()
                .required('Sorry your last name is required')
                .max(10, "Last name too long"),
            message: Yup
                .string()
                .required('Sorry you need to say something')
                .max(500, "Sorry message too long"),
        }),
        onSubmit:(values, {resetForm}) => {
            dispatch(sendMessage(values)).then(({payload})=>{
                if(payload){
                    resetForm()
                    showToast('SUCCESS', 'Thank you we will stay in touch')
                } else {
                    showToast('ERROR', 'Sorry something happened try again')
                }
            })
        }

    })

    return(
        <>
            <div className='author-contact'>
                <h1 className='contact mt-1'>Contact us:</h1>
                <form className='mt-3' onSubmit={formik.handleSubmit}>
                <div className='author-darker-contact mb-3'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email address:</label>
                        <input
                            type='email'
                            className='form-control mb-2'
                            name='email'
                            placeholder='email@example.com'
                            {...formik.getFieldProps('email')}
                        />
                        { formik.errors.email && formik.touched.email ?
                            <Alert variant='danger'
                                className='d-inline-flex pt-1 pb-1 mb-1 redAlert'
                            >
                                {formik.errors.email}
                            </Alert>
                        :null }
                    </div>

                    <div className='form-group'>
                        <label htmlFor='firstname'>First name:</label>
                        <input
                            type='text'
                            className='form-control mb-2'
                            name='firstname'
                            placeholder='Your first name'
                            {...formik.getFieldProps('firstname')}
                        />
                        { formik.errors.firstname && formik.touched.firstname ?
                            <Alert variant='danger'
                                className='d-inline-flex pt-1 pb-1 mb-1 redAlert'
                            >
                                {formik.errors.firstname}
                            </Alert>
                        :null }
                    </div>

                    <div className='form-group'>
                        <label htmlFor='lastname'>Last name:</label>
                        <input
                            type='text'
                            className='form-control mb-2'
                            name='lastname'
                            placeholder='Your last name'
                            {...formik.getFieldProps('lastname')}
                        />
                        { formik.errors.lastname && formik.touched.lastname ?
                            <Alert variant='danger'
                                className='d-inline-flex pt-1 pb-1 mb-1 redAlert'
                            >
                                {formik.errors.lastname}
                            </Alert>
                        :null }
                    </div>

                    <div className='form-group'>
                        <label htmlFor='message'>Message:</label>
                        <textarea
                            className='form-control mb-2'
                            name='message'
                            rows='3'
                            {...formik.getFieldProps('message')}
                        ></textarea>
                        { formik.errors.message && formik.touched.message ?
                            <Alert variant='danger'
                                className='d-inline-flex pt-1 pb-1 mb-1 redAlert'
                            >
                                {formik.errors.message}
                            </Alert>
                        :null }
                    </div>
                    </div>
                    <button
                        type='submit'
                        className='btn btn-primary red mb-2'
                    >
                        Send message
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contact