import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    // toggling sidebar
    const handleToggle = () => {
        const sidebarContentBox = document.getElementById('sidebar-content-box');
        sidebarContentBox.classList.toggle('active');
    }

    // toggling reports dropdown menu
    const handleMenu = () => {
        const mydropdownMenu = document.getElementById('mydropdownMenu');
        mydropdownMenu.classList.toggle('active');
    }

    // toggling users dropdown menu
    const handleMenu2 = () => {
        const mydropdownMenu2 = document.getElementById('mydropdownMenu2');
        mydropdownMenu2.classList.toggle('active');
    }
    return (
        <div className='container-fluid'>
            <div className='sidebar-content-box' id='sidebar-content-box'>
                {/* custom dropdown users*/}
                <div onClick={handleMenu2} className='dropdown-btn-div'>
                    <div><span><i className="fas fa-users"></i></span> Users <i className='fas fa-arrow-down'></i></div>
                </div>
                <div className='mydropdown-menu' id='mydropdownMenu2'>
                    <Link to="/Buyer" className='dropdown-link'>
                        <div><span><i className="fas fa-users"></i></span> Buyer</div>
                    </Link>
                    <Link to="/Sellers" className='dropdown-link'>
                        <div><span><i className="fas fa-users"></i></span> Seller</div>
                    </Link>
                </div>

                {/* links */}
                <Link to="/Category" className='link'>
                    <div><span><i className="fas fa-chart-pie"></i></span> Category</div>
                </Link>

                <Link to="/Orders" className='link'>
                    <div><span><i className="fab fa-first-order"></i></span> Orders</div>
                </Link>

                <Link to="/ChangePassword" className='link'>
                    <div><span><i className="fas fa-key"></i></span> Change Password</div>
                </Link>

                {/* custom dropdown reports */}
                <div onClick={handleMenu} className='dropdown-btn-div'>
                    <div><span><i className="fas fa-bug"></i></span> Reports <i className='fas fa-arrow-down'></i></div>
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
            {/* burger icon */}
            <div className='burger-icon'>
                <span onClick={handleToggle}><i className='fas fa-bars'></i></span>
            </div>
        </div>
    )
}

export default Sidebar

