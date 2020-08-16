import React from 'react'
import Sidebar from './Sidebar'

const Main = () => {
    return (
        <div className='main'>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='rightside'>
                <h2>Dashboard</h2>
                <br />
                <div className='boxes-div'>
                    <div className='box-blue'>
                        <div className='box-left-div'>
                            <span className='number'>150</span>
                            <br />
                            <span className='text'>Orders</span>
                        </div>
                        <div className='box-right-div'>
                            <span className='icon'>
                                <i class="fas fa-shopping-bag"></i>
                            </span>
                        </div>
                    </div>
                    <div className='box-yellow'>
                        <div className='box-left-div'>
                            <span className='number'>150</span>
                            <br />
                            <span className='text'>Orders</span>
                        </div>
                        <div className='box-right-div'>
                            <span className='icon'>
                                <i class="fas fa-user-plus"></i>
                            </span>
                        </div>
                    </div>
                    <div className='box-red'>
                        <div className='box-left-div'>
                            <span className='number'>150</span>
                            <br />
                            <span className='text'>Orders</span>
                        </div>
                        <div className='box-right-div'>
                            <span className='icon'>
                                <i class="fas fa-chart-pie"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
