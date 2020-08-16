import React from 'react'
import Sidebar from './Sidebar'

const Orders = () => {
    return (
        <div>
            <div className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='rightside'>
                    <h2>Orders</h2>
                    <br />
                    <table class="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
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
                                <th>Orders</th>
                                <th>Order Date</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Hide/Show</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ABC</td>
                                <td>11-07-2014</td>
                                <td>20</td>
                                <td>Hide</td>
                                <td><button className='btn btn-info btn-md'>Hide</button>
                                    <button className='btn btn-info btn-md'>Show</button>
                                </td>
                            </tr>
                            <tr>
                                <td>XYZ</td>
                                <td>11-07-2014</td>
                                <td>20</td>
                                <td>Show</td>
                                <td><button className='btn btn-info btn-md'>Hide</button>
                                    <button className='btn btn-info btn-md'>Show</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders
