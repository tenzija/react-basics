import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'


const FormOne = () => {

    return (
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          country: '',
          state: '',
          zip: ''
        }}

        /// First method for validating (!Yup)
        // validate={ values => {
        //   const errors = {}

        //   if(!values.firstname){
        //     errors.firstname = 'Sorry, first name is required!'
        //   }

        //   if(!values.lastname){
        //     errors.lastname = 'Sorry, last name is required!'
        //   }

        //   if(!values.email){
        //     errors.email = 'Sorry, email is required!'
        //   } else if(
        //     !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)
        //   ){
        //     errors.email = 'Invalid email';
        //   }

        //   return errors
        // }}

        /// Second method for validation (Yup)
        validationSchema={Yup.object({
          firstname: Yup
          .string()
          .required('Sorry, first name is required!')
          .max(10, 'Sorry the name is too long'),
          lastname: Yup
          .string()
          .required('Sorry, last name is required!')
          .max(10, 'Sorry the name is too long'),
          email: Yup
          .string()
          .required('Sorry, email is required!')
          .email('Needs to be an actual email!')
        })}

        onSubmit={( values ) => {
          console.log(values)
        }}
      >
        { ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <div className="container">
            <div className="col-md-12 mt-5">
            <form onSubmit={handleSubmit}>
              <h4 className="mb-3">Personal information</h4>
      
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstname">First name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="firstname" 
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  { errors.firstname && touched.firstname ? 
                    <span style={{color:"red"}}>{ errors.firstname }</span>
                  :null }
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastname">Last name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="lastname" 
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}  
                    onBlur={handleBlur}
                  />
                  { errors.lastname && touched.lastname ? 
                    <span style={{color:"red"}}>{ errors.lastname }</span>
                  :null }
                </div>
              </div>
      
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email" 
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={handleChange}  
                  onBlur={handleBlur}
                />
                { errors.email && touched.email ? 
                  <span style={{color:"red"}}>{ errors.email }</span>
                :null }
              </div>
      
        
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select 
                    className="custom-select d-block w-100" 
                    id="country" 
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="NL">Netherlands</option>
                  </select>
                
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">State</label>
                  <select 
                    className="custom-select d-block w-100" 
                    id="state" 
                    name="state"
                    value={values.firstname}
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option value="california">California</option>
                    <option value="toronto">Toronto</option>
                    <option value="utrech">Utrech</option>
                  </select>
                
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="zip" 
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}  
                  />
                </div>
              </div>
      
              <hr className="mb-4"/>
              <button className="btn btn-primary btn-lg btn-block" type="submit">
                Submit
              </button>
            </form>
            </div>
          </div>
        ) }
      </Formik>

      
    );

}

export default FormOne;
