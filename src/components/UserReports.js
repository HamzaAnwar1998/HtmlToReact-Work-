import React from 'react'
import Sidebar from './Sidebar'

const UserReports = () => {
    return (
        <div>
            <div className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='rightside'>
                    <h2>User Reports</h2>
                    <br />
                    <form autoComplete="off" className=' form-group input-form'>
                        <input type="text" placeholder="search" className='form-control' />
                        <div className='input-group-append'>
                            <button><i className='fas fa-search'></i></button>
                        </div>
                    </form>
                    <div className='table-responsive'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Reg.Date</th>
                                    <th>Location</th>
                                    <th>Address</th>
                                    <th>Buyer/Seller</th>
                                    <th>Order Item</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ABC</td>
                                    <td>11-07-2014</td>
                                    <td>Karachi</td>
                                    <td>
                                        Address ABCD
                                </td>
                                    <td>Buyer</td>
                                    <td>Graphic Design</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>XYZ</td>
                                    <td>11-07-2014</td>
                                    <td>Karachi</td>
                                    <td>
                                        Address ABCD
                                </td>
                                    <td>Seller</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserReports
