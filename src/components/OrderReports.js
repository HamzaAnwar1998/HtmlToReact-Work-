import React from 'react'
import Sidebar from './Sidebar'

const OrderReports = () => {
    return (
        <div>
            <div className='main'>
                <div className='sidebar'>
                    <Sidebar />
                </div>
                <div className='rightside'>
                    <h2>Order Reports</h2>
                    <br />
                    <table class="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
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
                                <th>Order Name</th>
                                <th>Order Date</th>
                                <th>Username</th>
                                <th>Address</th>
                                <th>Order Item</th>
                                <th>Qty</th>
                                <th>Cancelled Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Graphics</td>
                                <td>11-07-2014</td>
                                <td>ABCD</td>
                                <td>
                                    Address ABCD
                                </td>
                                <td>Graphics Designs</td>
                                <td>2</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Test</td>
                                <td>11-07-2014</td>
                                <td>XYZ</td>
                                <td>
                                    Address ABCD
                                </td>
                                <td>Test Designs</td>
                                <td>6</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrderReports
