import Dashboard from "./dashboard"
import Categories from "./categories"
import SubCategories from "./subcategories"
import ProductListing from "./productlisting"
import { useState } from "react"
export default function AdminHeader(){
	const [toggle,setToggle] = useState("Dashboard")
    const SetHandleChange = (value) => {
		setToggle(value)
        document.getElementsByClassName("active")[0].className = ""
        document.getElementsByName(value)[0].className = "active"
    }
    return(
        <div class="main-wrapper">
            		

<div>
            	
		<div className="header">
			<div className="header-left"> 
				<a href="index.html" className="logo logo-small">
					<img src="assets/img/logo-icon.png" alt="Logo" width="30" height="30"/>
				</a>
			</div>
			<a href="javascript:void(0);" id="toggle_btn">
				<i className="fas fa-align-left"></i>
			</a>
			<a className="mobile_btn" id="mobile_btn" href="javascript:void(0);">
				<i className="fas fa-align-left"></i>
			</a>
			
			<ul className="nav user-menu">
				<li className="nav-item dropdown noti-dropdown">
					<a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
						<i className="far fa-bell"></i>  <span className="badge badge-pill"></span>
					</a>
					<div className="dropdown-menu notifications">
						<div className="topnav-dropdown-header">
							<span className="notification-title">Notifications</span>
							<a href="javascript:void(0)" className="clear-noti"> Clear All </a>
						</div>
						<div className="noti-content">
							<ul className="notification-list">
								<li className="notification-message">
									<a href="admin-notification.html">
										<div className="media d-flex">
											<span className="avatar avatar-sm flex-shrink-0">
												<img className="avatar-img rounded-circle" alt="" src="assets/img/provider/provider-01.jpg"/>
											</span>
											<div className="media-body flex-grow-1">
												<p className="noti-details">
													<span className="noti-title">Thomas Herzberg have been subscribed</span>
												</p>
												<p className="noti-time">
													<span className="notification-time">15 Sep 2020 10:20 PM</span>
												</p>
											</div>
										</div>
									</a>
								</li>
								<li className="notification-message">
									<a href="admin-notification.html">
										<div className="media d-flex">
											<span className="avatar avatar-sm flex-shrink-0">
												<img className="avatar-img rounded-circle" alt="" src="assets/img/provider/provider-02.jpg"/>
											</span>
											<div className="media-body flex-grow-1">
												<p className="noti-details">
													<span className="noti-title">Matthew Garcia have been subscribed</span>
												</p>
												<p className="noti-time">
													<span className="notification-time">13 Sep 2020 03:56 AM</span>
												</p>
											</div>
										</div>
									</a>
								</li>
								<li className="notification-message">
									<a href="admin-notification.html">
										<div className="media d-flex">
											<span className="avatar avatar-sm flex-shrink-0">
												<img className="avatar-img rounded-circle" alt="" src="assets/img/provider/provider-03.jpg"/>
											</span>
											<div className="media-body flex-grow-1">
												<p className="noti-details">
													<span className="noti-title">Yolanda Potter have been subscribed</span>
												</p>
												<p className="noti-time">
													<span className="notification-time">12 Sep 2020 09:25 PM</span>
												</p>
											</div>
										</div>
									</a>
								</li>
								<li className="notification-message">
									<a href="admin-notification.html">
										<div className="media d-flex">
											<span className="avatar avatar-sm flex-shrink-0">
												<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/provider/provider-04.jpg"/>
											</span>
											<div className="media-body flex-grow-1">
												<p className="noti-details">
													<span className="noti-title">Ricardo Flemings have been subscribed</span>
												</p>
												<p className="noti-time">
													<span className="notification-time">11 Sep 2020 06:36 PM</span>
												</p>
											</div>
										</div>
									</a>
								</li>
								<li className="notification-message">
									<a href="admin-notification.html">
										<div className="media d-flex">
											<span className="avatar avatar-sm flex-shrink-0">
												<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/provider/provider-05.jpg"/>
											</span>
											<div className="media-body flex-grow-1">
												<p className="noti-details">
													<span className="noti-title">Maritza Wasson have been subscribed</span>
												</p>
												<p className="noti-time">
													<span className="notification-time">10 Sep 2020 08:42 AM</span>
												</p>
											</div>
										</div>
									</a>
								</li>
								<li className="notification-message">
									<a href="admin-notification.html">
										<div className="media d-flex">
											<span className="avatar avatar-sm flex-shrink-0">
												<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/provider/provider-06.jpg"/>
											</span>
											<div className="media-body flex-grow-1">
												<p className="noti-details">
													<span className="noti-title">Marya Ruiz have been subscribed</span>
												</p>
												<p className="noti-time">
													<span className="notification-time">9 Sep 2020 11:01 AM</span>
												</p>
											</div>
										</div>
									</a>
								</li>
								<li className="notification-message">
									<a href="admin-notification.html">
										<div className="media d-flex">
											<span className="avatar avatar-sm flex-shrink-0">
												<img className="avatar-img rounded-circle" alt="User Image" src="assets/img/provider/provider-07.jpg"/>
											</span>
											<div className="media-body flex-grow-1">
												<p className="noti-details">
													<span className="noti-title">Richard Hughes have been subscribed</span>
												</p>
												<p className="noti-time">
													<span className="notification-time">8 Sep 2020 06:23 AM</span>
												</p>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
						<div className="topnav-dropdown-footer">
							<a href="admin-notification.html">View all Notifications</a>
						</div>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a href="javascript:void(0)" className="dropdown-toggle user-link  nav-link" data-bs-toggle="dropdown">
						<span className="user-img">
							<img className="rounded-circle" src="assets/img/user.jpg" width="40" alt="Admin"/>
						</span>
					</a>
					<div className="dropdown-menu dropdown-menu-end">
						<a className="dropdown-item" href="admin-profile.html">Profile</a>
						<a className="dropdown-item" href="login.html">Logout</a>
					</div>
				</li>
			</ul>
		</div>
		<div className="sidebar" id="sidebar">
			<div className="sidebar-logo">
				<a href="index.html">
					<img src="assets/img/logo-icon.png" className="img-fluid" alt=""/>
				</a>
			</div>
			<div className="sidebar-inner slimscroll">
				<div id="sidebar-menu" className="sidebar-menu">
					<ul>
						<li className="active" name="Dashboard" onClick={() =>{SetHandleChange("Dashboard")}}>
							<a href="#"><i className="fas fa-columns"></i> <span>Dashboard</span></a>
						</li>
						<li name="Categories" onClick={() =>{SetHandleChange("Categories")}}>
							<a href="#"><i className="fas fa-layer-group"></i> <span>Categories</span></a>
						</li>
						<li name="Sub Categories" onClick={() =>{SetHandleChange("Sub Categories")}}>
							<a href="#"><i className="fab fa-buffer"></i> <span>Sub Categories</span></a>
						</li>
						<li name="Services" onClick={() =>{SetHandleChange("Services")}}>
							<a href="#"><i className="fas fa-bullhorn"></i> <span> Services</span></a>
						</li>
						<li name="Booking List" onClick={() =>{SetHandleChange("Booking List")}}>
							<a href="#"><i className="far fa-calendar-check"></i> <span> Booking List</span></a>
						</li>
						<li name="Payments" onClick={() =>{SetHandleChange("Payments")}}>
							<a href="#"><i className="fas fa-hashtag"></i> <span>Payments</span></a>
						</li>
						<li name="Rating Type" onClick={() =>{SetHandleChange("Rating Type")}}>
							<a href="#"><i className="fas fa-star-half-alt"></i> <span>Rating Type</span></a>
						</li>
						<li name="Ratings" onClick={() =>{SetHandleChange("Ratings")}}>
							<a href="#"><i className="fas fa-star"></i> <span>Ratings</span></a>
						</li>
						<li name="Subscriptions" onClick={() =>{SetHandleChange("Subscriptions")}}>
							<a href="#"><i className="far fa-calendar-alt"></i> <span>Subscriptions</span></a>
						</li>
						<li name="Wallet" onClick={() =>{SetHandleChange("Wallet")}}>
							<a href="#"><i className="fas fa-wallet"></i> <span> Wallet</span></a>
						</li>
						<li name="Service Providers" onClick={() =>{SetHandleChange("Service Providers")}}>
							<a href="#"><i className="fas fa-user-tie"></i> <span> Service Providers</span></a>
						</li>
						<li name="Users" onClick={() =>{SetHandleChange("Users")}}>
							<a href="#"><i className="fas fa-user"></i> <span>Users</span></a>
						</li>
						<li className="submenu" name="Invoices" onClick={() =>{SetHandleChange("Invoices")}}>
							<a href="#"><i className="fas fa-clipboard"></i> <span> Invoices</span>
								<span className="menu-arrow"><i className="fas fa-angle-right"></i></span>
							</a>
							<ul>
								<li><a href="invoices.html">Invoices List</a></li>
								<li><a href="invoice-grid.html">Invoices Grid</a></li>
								<li><a href="add-invoice.html">Add Invoices</a></li>
								<li><a href="edit-invoice.html">Edit Invoices</a></li>
								<li><a href="view-invoice.html">Invoices Details</a></li>
								<li><a href="invoices-settings.html">Invoices Settings</a></li>
							</ul>
						</li>
						<li name="Settings" onClick={() =>{SetHandleChange("Settings")}}> 
							<a href="#"><i className="fas fa-cog"></i> <span>Settings</span></a>
						</li>
						<li className="submenu" name="Frontend Settings" onClick={() =>{SetHandleChange("Frontend Settings")}}>
							<a href="#"><i className="fas fa-cog"></i> <span> Frontend Settings</span>
								<span className="menu-arrow"><i className="fas fa-angle-right"></i></span>
							</a>
							<ul>
								<li>
									<a href="front-settings.html"> <span> Header Settings</span></a>
								</li> 
								<li>
									<a href="footer-settings.html"> <span>Footer Settings</span></a>
								</li>
								<li>
									<a href="pages.html"> <span>Pages </span></a>
								</li>	
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div className="page-wrapper">
			{
				toggle === "Dashboard"?
				<Dashboard/>:
				toggle === "Categories"?
				<Categories/>:
				toggle === "Sub Categories"?
				<SubCategories/>:
				toggle === "Services"
				?<ProductListing/>:""
			}
			{/* <Dashboard/> */}
			{/* <Categories/> */}
		</div> 
        </div>

        </div>
    )
}