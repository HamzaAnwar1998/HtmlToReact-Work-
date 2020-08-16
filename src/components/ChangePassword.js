import React from 'react'
import Sidebar from './Sidebar'

const ChangePassword = () => {
    return (
        <div>
            <div className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='rightside'>
                    <h2>Change Password</h2>
                    <br /><br />
                    <div className='container-fluid'>
                        <h4>New Password </h4>
                        <br />
                        <form autoComplete="off" className='form-group'>
                            <input type="text" className='form-control' /><br />
                            <button className='btn btn-primary'>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
