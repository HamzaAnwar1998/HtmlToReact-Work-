import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const handleToggle = () => {
        // console.log('clicked');
        const sidebarContentBox = document.getElementById('sidebar-content-box');
        // console.log(sidebarContentBox);
        sidebarContentBox.classList.toggle('active');
    }

    const handleMenu = () => {
        // console.log('clicked');
        const mydropdownMenu = document.getElementById('mydropdownMenu');
        // console.log(mydropdownMenu);
        mydropdownMenu.classList.toggle('active');
    }

    const handleMenu2 = () => {
        // console.log('clicked');
        const mydropdownMenu2 = document.getElementById('mydropdownMenu2');
        // console.log(mydropdownMenu);
        mydropdownMenu2.classList.toggle('active');
    }
    return (
        <div className='container-fluid'>
            <div className='sidebar-content-box' id='sidebar-content-box'>

                {/* custom menu */}
                <div onClick={handleMenu2} className='dropdown-btn-div'>
                    <span><i className="fas fa-bug"></i></span> Users
                </div>
                <div className='mydropdown-menu' id='mydropdownMenu2'>
                    <Link to="/Buyer" className='dropdown-link'>
                        <div><span><i className="fas fa-users"></i></span> Buyer</div>
                    </Link>
                    <Link to="/Sellers" className='dropdown-link'>
                        <div><span><i className="fas fa-users"></i></span> Seller</div>
                    </Link>
                </div>

                <Link to="/Category" className='link'>
                    <div><span><i className="fas fa-chart-pie"></i></span> Category</div>
                </Link>

                <Link to="/Orders" className='link'>
                    <div><span><i className="fas fa-sort"></i></span> Orders</div>
                </Link>

                <Link to="/ChangePassword" className='link'>
                    <div><span><i className="fas fa-key"></i></span> Change Password</div>
                </Link>

                {/* custom menu */}
                <div onClick={handleMenu} className='dropdown-btn-div'>
                    <span><i className="fas fa-bug"></i></span> Reports
                </div>
                <div className='mydropdown-menu' id='mydropdownMenu'>
                    <Link to="/OrderReports" className='dropdown-link'>
                        <div><span><i className="fas fa-bug"></i></span> Order Report</div>
                    </Link>
                    <Link to="/CategoryReport" className='dropdown-link'>
                        <div><span><i className="fas fa-bug"></i></span> Category Report</div>
                    </Link>
                    <Link to="/UserReports" className='dropdown-link'>
                        <div><span><i className="fas fa-bug"></i></span> User Report</div>
                    </Link>
                </div>

            </div>
            <div className='burger-icon'>
                <span onClick={handleToggle}><i className='fas fa-bars'></i></span>
            </div>
        </div>
    )
}

export default Sidebar

