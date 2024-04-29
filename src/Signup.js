import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import './signup.css'

const Signup = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: (values) => {
            console.log(formik.values);
        }
    })
    console.log(formik.touched);
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='input-container'>
                <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
            </div>
            <div className='input-container'>
                <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
            </div>
            <div className='input-container'>
                <input
                    id='email'
                    name='email'
                    type='text'
                    placeholder='Email'
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Signup