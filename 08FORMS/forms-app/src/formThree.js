import React from 'react';
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'


const FormThree = () => {

    const formikProps = {
        initialValues:{
            firstname: '',
            color: '',
            lastname: '',
            age: ''
        },
        validationSchema: Yup.object({
            firstname: Yup
            .string()
            .required('Sorry, first name is required!')
            .max(10, 'Sorry the name is too long'),
            lastname: Yup
            .string()
            .required('Sorry, first name is required!')
            .max(10, 'Sorry the name is too long'),
            age: Yup
            .number('Sorry, age must be represented numericly')
            .required('Sorry, first name is required!')
            .max(10, 'Sorry the name is too long')
        }),
        onSubmit: values => {
            console.log(values)
        }
    }

    const formikInputCustomField = ({
        field, //{name,value,onChange,onBlur}
        form: { 
            touched, 
            errors 
        },
        ...props
    }) => (
        <>
            <label htmlFor={field.name}>
                {props.labelName}
            </label>
            <input
                type='text'
                className='form-control'
                placeholder={props.placeholder}
                {...field}
            />
            {/* METHOD 3 for errors */}
            {   errors[field.name] && touched[field.name] ?
                <span style={{color:'red'}}>{errors[field.name]}</span>
            :null }
        </>
    )

    return(
        <Formik {...formikProps}>
            { formik => (
                <div className="container">
                    <div className="col-md-12 mt-5">
                        <Form>
                            <label htmlFor="firstname">First name</label>
                            <Field
                                name='firstname'
                                type='text'
                                className='form-control'
                                placeholder='First name'

                            />
                            {formik.values.firstname}
                            {console.log(formik.values.firstname)}
                            <div
                                style={{color:'red'}}
                            >
                            {/* METHOD 1 */}
                                {/* <ErrorMessage
                                    name='firstname'
                                /> */}
                            {/* METHOD 2 */}
                                { formik.errors.firstname && formik.touched.firstname ?
                                    <span>{ formik.errors.firstname }</span>
                                :null }
                            </div>
                            <hr className='mb-4' />
                            <label htmlFor='color'>Color</label>

                            <Field
                                as='select'
                                name='color'
                                className='custom-select'
                            >
                                <option value='red'>Red</option>
                                <option value='blue'>Blue</option>
                                <option value='green'>Green</option>
                            </Field>
                            <hr className="mb-4" />
                            
                            <Field
                                name='lastname'
                                component={formikInputCustomField}
                                placeholder='Last name'
                                labelName='Enter your last name'
                            />
                            <hr className="mb-4" />
                            
                            <Field
                                name='age'
                                component={formikInputCustomField}
                                placeholder='Enter your age'
                                labelName='Enter your age'
                            />
                            <div
                                style={{color:'red'}}
                            >
                            {/* METHOD 1 */}
                                {/* <ErrorMessage
                                    name='lastname'
                                /> */}
                            {/* METHOD 2 */}
                                {/* { formik.errors.lastname && formik.touched.lastname ?
                                    <span>{ formik.errors.lastname }</span>
                                :null } */}
                            </div>
                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Submit
                            </button>
                        </Form>
                    </div>
                </div>
            ) }
            
        </Formik>
    )
}

export default FormThree;