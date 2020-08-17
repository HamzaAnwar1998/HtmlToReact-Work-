import React from 'react'
import Sidebar from './Sidebar'

const Sellers = () => {
    return (
        <>
            <div className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='rightside'>
                    <h2>Sellers</h2>
                    <br />
                    {/* form inside of table */}
                    <form autoComplete="off" className=' form-group input-form'>
                        <input type="text" placeholder="search" className='form-control' />
                        <div>
                            <button><i className='fas fa-search'></i></button>
                        </div>
                    </form>
                    <div className='table-responsive'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Reg.Date</th>
                                    <th>Status</th>
                                    <th>Active/InActive</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ABC</td>
                                    <td>11-07-2014</td>
                                    <td>Active</td>
                                    <td><button className='btn btn-info btn-md'>Active</button>
                                        <button className='btn btn-info btn-md btn-inline'>InActive</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>XYZ</td>
                                    <td>11-07-2014</td>
                                    <td>Active</td>
                                    <td><button className='btn btn-info btn-md btn-inline'>Active</button>
                                        <button className='btn btn-info btn-md btn-inline'>InActive</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sellers
