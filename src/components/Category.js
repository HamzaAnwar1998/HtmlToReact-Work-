import React from 'react'
import Sidebar from './Sidebar'

const Category = () => {
    return (
        <>
            <div className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='rightside'>
                    <h2>Category</h2>
                    <br /><br />

                    <div className='container-fluid'>
                        <h4>Category Name </h4>
                        <br />
                        <form autoComplete="off" className='form-group'>
                            <input type="text" className='form-control' /><br />
                            <button className='btn btn-primary'>SUBMIT</button>
                        </form>
                    </div>

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
                                    <th>Category Name</th>
                                    <th>Status</th>
                                    <th>Active/InActive</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Graphic</td>
                                    <td>Active</td>
                                    <td><button className='btn btn-info btn-md'>Active</button>
                                        <button className='btn btn-info btn-md btn-inline'>InActive</button>
                                    </td>
                                    <td><button className='btn btn-info btn-md btn-inline'>Edit</button></td>
                                </tr>
                                <tr>
                                    <td>Testing</td>
                                    <td>Active</td>
                                    <td><button className='btn btn-info btn-md btn-inline'>Active</button>
                                        <button className='btn btn-info btn-md btn-inline'>InActive</button>
                                    </td>
                                    <td><button className='btn btn-info btn-md btn-inline'>Edit</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category
