import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className='container-fluid'>
            <div className='header'>Admin Panel Login</div>
            <br />
            <form autoComplete="off" className='form-group'>
                <label>UserId</label>
                <input type="text" className='form-control' />
                <br />
                <label>Password</label>
                <input type="password" className='form-control' />
                <br />
                <Link to="/Main" className='btn btn-success btn-md'>Login</Link>
            </form>
        </div>
    )
}
