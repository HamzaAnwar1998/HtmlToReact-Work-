import React from 'react'
import Sidebar from './Sidebar'

const CategoryReport = () => {
    return (
        <div>
            <div className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='rightside'>
                    <h2>Category Report</h2>
                    <br />
                    <table class="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>
                                    <form autoComplete="off" className='form-group row float-right myform'>
                                        <div className='col-xs-2 input-group search-box'>
                                            <input type="text" className='form-control' />
                                            <div className='input-group-append'>
                                                <button><i className='fas fa-search'></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </th>
                            </tr>
                        </thead>
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
    )
}

export default CategoryReport
