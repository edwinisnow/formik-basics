import React from 'react'
import { useFormik } from 'formik'
import './signup.css'
const Signup = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        }
    })
    console.log(formik.values);
    return (
        <form>
            <div className='input-container'>
                <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                />
            </div>
            <div className='input-container'>
                <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                />
            </div>
            <div className='input-container'>
                <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
            </div>
        </form>
    )
}

export default Signup