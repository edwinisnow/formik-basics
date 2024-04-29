import React, { useState } from 'react'
import './signup.css'
const Signup = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    return (
        <form>
            <div className='input-container'>
                <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e => setFirstName(e.target.value))}
                />
            </div>
            <div className='input-container'>
                <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    placeholder='last Name'
                    value={lastName}
                    onChange={(e => setLastName(e.target.value))}
                />
            </div>
            <div className='input-container'>
                <input
                    id='email'
                    name='email'
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={(e => setEmail(e.target.value))}
                />
            </div>
        </form>
    )
}

export default Signup