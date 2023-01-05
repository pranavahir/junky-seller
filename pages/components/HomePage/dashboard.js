export default function Dashboard(){
    return(
        <div className="content container-fluid">
			
				<div className="page-header">
					<div className="row">
						<div className="col-12">
							<h3 className="page-title">Welcome Admin!</h3>
						</div>
					</div>
				</div>
				
				<div className="row">
					<div className="col-xl-3 col-sm-6 col-12">
						<div className="card">
							<div className="card-body">
								<div className="dash-widget-header">
									<span className="dash-widget-icon bg-primary">
										<i className="far fa-user"></i>
									</span>
									<div className="dash-widget-info">
										<h3>429</h3>
										<h6 className="text-muted">Users</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-sm-6 col-12">
						<div className="card">
							<div className="card-body">
								<div className="dash-widget-header">
									<span className="dash-widget-icon bg-primary">
										<i className="fas fa-user-shield"></i>
									</span>
									<div className="dash-widget-info">
										<h3>148</h3>
										<h6 className="text-muted">Providers</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-sm-6 col-12">
						<div className="card">
							<div className="card-body">
								<div className="dash-widget-header">
									<span className="dash-widget-icon bg-primary">
										<i className="fas fa-qrcode"></i>
									</span>
									<div className="dash-widget-info">
										<h3>124</h3>
										<h6 className="text-muted">Services</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-sm-6 col-12">
						<div className="card">
							<div className="card-body">
								<div className="dash-widget-header">
									<span className="dash-widget-icon bg-primary">
										<i className="far fa-credit-card"></i>
									</span>
									<div className="dash-widget-info">
										<h3>$11378</h3>
										<h6 className="text-muted">Subscription</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 d-flex">
					
						<div className="card card-table flex-fill">
							<div className="card-header">
								<h4 className="card-title">Recent Bookings</h4>
							</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-center">
										<thead>
											<tr>
												<th>Customer</th>
												<th>Date</th>
												<th>Service</th>
												<th>Status</th>
												<th>Price</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="text-nowrap">
													<img className="avatar-xs rounded-circle" src="assets/img/customer/user-05.jpg" alt="User Image"/> Annette Silva
												</td>
												<td className="text-nowrap">9 Sep 2020</td>
												<td>Car Repair Services</td>
												<td>
													<span className="badge bg-danger inv-badge">Pending</span>
												</td>
												<td>
													<div className="font-weight-600">$50</div>
												</td>
											</tr>
											<tr>
												<td className="text-nowrap">
													<img className="avatar-xs rounded-circle" src="assets/img/customer/user-06.jpg" alt="User Image"/> Stephen Wilson</td>
												<td className="text-nowrap">8 Sep 2020</td>
												<td>Steam Car Wash</td>
												<td>
													<span className="badge bg-danger inv-badge">Pending</span>
												</td>
												<td>
													<div className="font-weight-600">$14</div>
												</td>
											</tr>
											<tr>
												<td className="text-nowrap">
													<img className="avatar-xs rounded-circle" src="assets/img/customer/user-07.jpg" alt="User Image"/> Ryan Rodriguez</td>
												<td className="text-nowrap">7 Sep 2020</td>
												<td>House Cleaning Services</td>
												<td>
													<span className="badge bg-danger inv-badge">Pending</span>
												</td>
												<td>
													<div className="font-weight-600">$100</div>
												</td>
											</tr>
											<tr>
												<td className="text-nowrap">
													<img className="avatar-xs rounded-circle" src="assets/img/customer/user-08.jpg" alt="User Image"/> Lucile Devera
												</td>
												<td className="text-nowrap">6 Sep 2020</td>
												<td>Interior Designing</td>
												<td>
													<span className="badge bg-danger inv-badge">Pending</span>
												</td>
												<td>
													<div className="font-weight-600">$5</div>
												</td>
											</tr>
											<tr>
												<td className="text-nowrap">
													<img className="avatar-xs rounded-circle" src="assets/img/customer/user-09.jpg" alt="User Image"/> Roland Storey</td>
												<td className="text-nowrap">5 Sep 2020</td>
												<td>Plumbing Services</td>
												<td>
													<span className="badge bg-danger inv-badge">Pending</span>
												</td>
												<td>
													<div className="font-weight-600">$150</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						
					</div>
					<div className="col-md-6 d-flex">
					
						<div className="card card-table flex-fill">
							<div className="card-header">
								<h4 className="card-title">Payments</h4>
							</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-center">
										<thead>
											<tr>
												<th>Date</th>
												<th>User</th>
												<th>Provider</th>
												<th>Service</th>
												<th>Amount</th>
												<th>Status</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>15 Sep 2020</td>
												<td>
													<span className="table-avatar">
														<a href="#" className="avatar avatar-xs me-2">
															<img className="avatar-img rounded-circle" alt="" src="assets/img/customer/user-02.jpg"/>
														</a>
														<a href="javascript:void(0);">Nancy Olson</a>
													</span>
												</td>
												<td>
													<span className="table-avatar">
														<a href="#" className="avatar avatar-xs me-2">
															<img className="avatar-img rounded-circle" alt="" src="assets/img/provider/provider-02.jpg"/>
														</a>
														<a href="javascript:void(0);">Matthew Garcia</a>
													</span>
												</td>
												<td>Car Repair Services</td>
												<td>$50</td>
												<td>
													<span className="badge badge-dark">Pending</span>
												</td>
											</tr>
											<tr>
												<td>14 Sep 2020</td>
												<td>
													<span className="table-avatar">
														<a href="#" className="avatar avatar-xs me-2">
															<img className="avatar-img rounded-circle" alt="" src="assets/img/customer/user-03.jpg"/>
														</a>
														<a href="javascript:void(0);">Ramona Kingsley</a>
													</span>
												</td>
												<td>
													<span className="table-avatar">
														<a href="#" className="avatar avatar-xs me-2">
															<img className="avatar-img rounded-circle" alt="" src="assets/img/provider/provider-03.jpg"/>
														</a>
														<a href="javascript:void(0);">Yolanda Potter</a>
													</span>
												</td>
												<td>Electric Panel Repairing Service</td>
												<td>$45</td>
												<td>
													<span className="badge badge-dark">Pending</span>
												</td>
											</tr>
											<tr>
												<td>13 Sep 2020</td>
												<td>
													<span className="table-avatar">
														<a href="#" className="avatar avatar-xs me-2">
															<img className="avatar-img rounded-circle" alt="" src="assets/img/customer/user-04.jpg"/>
														</a>
														<a href="javascript:void(0);">Ricardo Lung</a>
													</span>
												</td>
												<td>
													<span className="table-avatar">
														<a href="#" className="avatar avatar-xs me-2">
															<img className="avatar-img rounded-circle" alt="" src="assets/img/provider/provider-04.jpg"/>
														</a>
														<a href="javascript:void(0);">Ricardo Flemings</a>
													</span>
												</td>
												<td>Steam Car Wash</td>
												<td>$14</td>
												<td>
													<span className="badge badge-dark">Pending</span>
												</td>
											</tr>
											<tr>
												<td>12 Sep 2020</td>
												<td>
													<span className="table-avatar">
														<a href="#" className="avatar avatar-xs me-2">
															<img className="avatar-img rounded-circle" alt="" src="assets/img/customer/user-05.jpg"/>
														</a>
														<a href="javascript:void(0);">Annette Silva</a>
													</span>
												</td>
												<td>
													<span className="table-avatar">
														<a href="#" className="avatar avatar-xs me-2">
															<img className="avatar-img rounded-circle" alt="" src="assets/img/provider/provider-05.jpg"/>
														</a>
														<a href="javascript:void(0);">Maritza Wasson</a>
													</span>
												</td>
												<td>House Cleaning Services</td>
												<td>$100</td>
												<td>
													<span className="badge badge-dark">Pending</span>
												</td>
											</tr>
											<tr>
												<td>11 Sep 2020</td>
												<td>
													<span className="table-avatar">
														<a href="#" className="avatar avatar-xs me-2">
															<img className="avatar-img rounded-circle" alt="" src="assets/img/customer/user-06.jpg"/>
														</a>
														<a href="javascript:void(0);">Stephen Wilson</a>
													</span>
												</td>
												<td>
													<span className="table-avatar">
														<a href="#" className="avatar avatar-xs me-2">
															<img className="avatar-img rounded-circle" alt="" src="assets/img/provider/provider-06.jpg"/>
														</a>
														<a href="javascript:void(0);">Marya Ruiz</a>
													</span>
												</td>
												<td>Computer & Server AMC Service</td>
												<td>$80</td>
												<td>
													<span className="badge badge-info">Inprogress</span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						
					</div>
				</div> 
			</div>
    )
}