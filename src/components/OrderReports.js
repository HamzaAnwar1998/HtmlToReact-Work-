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
        </div>
    )
}

export default OrderReports
