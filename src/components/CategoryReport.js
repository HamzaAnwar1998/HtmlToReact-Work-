import React from 'react'
import Sidebar from './Sidebar'

const CategoryReport = () => {
    return (
        <>
            <div className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='rightside'>
                    <h2>Category Report</h2>
                    <br />

                    {/* form inside of table */}
                    <form autoComplete="off" className=' form-group input-form'>
                        <input type="text" placeholder="search" className='form-control' />
                        <div>
                            <button><i className='fas fa-search'></i></button>
                        </div>
                    </form>

                    {/* table */}
                    <div className='table-responsive'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Category Name</th>
                                    <th>Category Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Graphics</td>
                                    <td>11-07-2014</td>
                                </tr>
                                <tr>
                                    <td>Test</td>
                                    <td>11-07-2014</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryReport
