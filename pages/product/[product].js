import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import Image from 'next/image'
import { GetSingleProduct } from '../api/Product'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
	faSearch,
	faAmbulance,
	faAnchor,
	faFlag,
	faInr,
	faStar,
	faCircle
} from "@fortawesome/free-solid-svg-icons";
export default function Product() {
	const router = useRouter()
	console.log(router.query.product, "router.query")
	const [product, setProduct] = useState(null)
	useEffect(() => {
		if (router.query.product) {
			GetSingleProduct(router.query.product).then(response => {
				if (response && response.data) {
					setProduct(response.data)
				}
			}).catch(err => console.log(err, "ERRR"))
		}
	}, [router.query.product])
	console.log(product, "SingleProduct")
	const myLoader = ({ src }) => {
		return src;
	}
	return (
		<div>
			{product !== null ?
				<div>
					<Header />
					<div className="content">
						<div className="container">
							<div className="row">
								<div className="col-lg-8">
									<div className="service-view">
										<div className="service-header">
											<div className="d-flex justify-content-between align-items-center">
												<h1>{product !== null && product.title !== null && product.title !== undefined && product.title !== "" ? product.title : ""}</h1>
												<div className="fav-btn fav-btn-big">
													<a href="" className="fav-icon with-border">
													<FontAwesomeIcon
													icon={faFlag}
													style={{ fontSize: 30, color: "red" }}
												/>
													</a>
												</div>
											</div>
											<address className="service-location"><i className="fas fa-location-arrow"></i> {product !== null && product.brandName !== null && product.brandName !== undefined && product.brandName !== "" ? product.brandName : ""}</address>
											<div className="rating">
												<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
												<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
												<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
												<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
												<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
												<span className="d-inline-block average-rating">(5)</span>
											</div>
											<div className="service-cate">
												<a href="search.html">{product.category !== null && product.category !== undefined?product.category:""}</a>
											</div>
										</div>
										<div className="service-images service-carousel">
											<div className="images-carousel owl-carousel owl-theme">
												<div className="item">
													<Image
														src={product !== null ? product.mainImage : ""}
														loader={myLoader}
														alt=""
														className="img-fluid"
														width={500}
														height={500} />
												</div>
												<div className="item">
													{/* <img src="assets/img/services/service-02.jpg" alt="" className="img-fluid" /> */}
												</div>
												<div className="item">
													{/* <img src="assets/img/services/service-02.jpg" alt="" className="img-fluid" /> */}
												</div>
											</div>
										</div>
										<div className="service-details">
											<ul className="nav nav-pills service-tabs" id="pills-tab" role="tablist">
												<li className="nav-item">
													<a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Overview</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Services Offered</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" id="pills-book-tab" data-toggle="pill" href="#pills-book" role="tab" aria-controls="pills-book" aria-selected="false">Reviews</a>
												</li>
											</ul>
											<div className="tab-content">
												<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
													<div className="card service-description">
														<div className="card-body">
															<h5 className="card-title">Description</h5>
															<p className="mb-0">{product !== null && product.description !== null && product.description !== undefined ? product.description : ""}</p>
														</div>
													</div>
												</div>
												<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
													<div className="card">
														<div className="card-body">
															<h5 className="card-title">Services Offered</h5>
															<div className="service-offer">
																<ul className="list-bullet">
																	<li>Lorem Ipsum</li>
																	<li>Lorem Ipsum</li>
																	<li>Lorem Ipsum</li>
																	<li>Lorem Ipsum</li>
																	<li>Lorem Ipsum</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												<div className="tab-pane fade" id="pills-book" role="tabpanel" aria-labelledby="pills-book-tab">
													<div className="card review-box">
														<div className="card-body">
															<div className="review-list">
																<div className="review-img">
																	{/* <img className="rounded-circle" src="assets/img/customer/user-01.jpg" alt="" /> */}
																</div>
																<div className="review-info">
																	<h5>Jeffrey Akridge</h5>
																	<div className="review-date">August 06, 2020 20:07 pm</div>
																	<p className="mb-0">Good Work</p>
																</div>
																<div className="review-count">
																	<div className="rating">
																														<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
																														<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
																														<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
																														<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
																														<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
																		<span className="d-inline-block average-rating">(5.0)</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<h4 className="card-title">Related Services</h4>
									<div className="service-carousel">
										<div className="popular-slider owl-carousel owl-theme">

											<div className="service-widget">
												<div className="service-img">
													<a href="service-details.html">
														<Image
															src={product !== null ? product.mainImage : ""}
															loader={myLoader}
															alt=""
															className="img-fluid"
															width={200}
															height={200} />
													</a>
													<div className="item-info">
														<div className="service-user">
															<a href="#">
															<Image
															src={product.User !== null && product.User !== undefined? product.User.avatar : ""}
															loader={myLoader}
															alt=""
															className="img-fluid"
															width={200}
															height={200} />
															</a>
															<span className="service-price">$2</span>
														</div>
														<div className="cate-list">
															<a className="bg-yellow" href="service-details.html">Electrical</a>
														</div>
													</div>
												</div>
												<div className="service-content">
													<h3 className="title">
														<a href="service-details.html">Electric Panel Repairing Service</a>
													</h3>
													<div className="rating">
																										<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
																										<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
																										<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
																										<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
														<i className="fas fa-star"></i>
														<span className="d-inline-block average-rating">(4.5)</span>
													</div>
													<div className="user-info">
														<div className="row">
															<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> <span>xxxxxxxx30</span></span>
															<span className="col ser-location"><span>Kalispell, Montana</span>  <i className="fas fa-map-marker-alt ms-1"></i></span>
														</div>
													</div>
												</div>
											</div>

											<div className="service-widget">
												<div className="service-img">
													<a href="service-details.html">
														<Image
															src={product !== null ? product.mainImage : ""}
															loader={myLoader}
															alt=""
															className="img-fluid"
															width={200}
															height={200} />
													</a>
													<div className="item-info">
														<div className="service-user">
														<a href="#">
															<Image
															src={product.User !== null && product.User !== undefined? product.User.avatar : ""}
															loader={myLoader}
															alt=""
															className="img-fluid"
															width={200}
															height={200} />
															</a>
															<span className="service-price">$14</span>
														</div>
														<div className="cate-list">
															<a className="bg-yellow" href="service-details.html">Car Wash</a>
														</div>
													</div>
												</div>
												<div className="service-content">
													<h3 className="title">
														<a href="service-details.html">Steam Car Wash</a>
													</h3>
													<div className="rating">
																										<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
																										<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
																										<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
																										<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
														<i className="fas fa-star"></i>
														<span className="d-inline-block average-rating">(4.5)</span>
													</div>
													<div className="user-info">
														<div className="row">
															<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> <span>xxxxxxxx74</span></span>
															<span className="col ser-location"><span>Electra, Texas</span>  <i className="fas fa-map-marker-alt ms-1"></i></span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 theiaStickySidebar">
									<div className="sidebar-widget widget">
										<div className="service-amount">
										<FontAwesomeIcon
													icon={faInr}
													style={{ fontSize: 30, color: "black" }}
												/>
											<span>{product !== null && product.price !== null && product.price !== undefined && product.price !== 0 ? product.price : "Sold Out"}</span>
										</div>
										<div className="service-book">
											<a href="book-service.html" className="btn btn-primary"> Start Conversation </a>
										</div>
									</div>
									<div className="card provider-widget clearfix">
										<div className="card-body">
											<h5 className="card-title">Owner Details</h5>
											<div className="about-author">
												<div className="about-provider-img">
													<div className="provider-img-wrap">
														<a href=";">
														<Image
															src={product.User !== null && product.User !== undefined? product.User.avatar : ""}
															loader={myLoader}
															alt=""
															className="img-fluid"
															width={200}
															height={200} />
				
														</a>
													</div>
												</div>
												<div className="provider-details">
													<a href=";" className="ser-provider-name">{product.User !== null && product.User !== undefined ? product.User.name : "N/A"}</a>
													<p className="last-seen">
													<FontAwesomeIcon
													icon={faCircle}
													style={{ fontSize: 8, color: "green" }}
												/>
														 Online
														 </p>
													<p className="text-muted mb-1">Member Since {product.User !== null && product.User !== undefined ? product.User.createdAt.split('T')[0] : "N/A"}</p>
												</div>
											</div>
											<hr />
											<div className="provider-info">
												<p className="mb-0"><i className="fas fa-phone-alt"></i> City: {product.User !== null && product.User !== undefined ? product.User.city : "N/A"}</p>
												<p className="mb-0"><i className="fas fa-phone-alt"></i> State: {product.User !== null && product.User !== undefined ? product.User.state : "N/A"}</p>
												<p className="mb-0"><i className="fas fa-phone-alt"></i> Country: {product.User !== null && product.User !== undefined ? product.User.country : "N/A"}</p>
											</div>
										</div>
									</div>
									<div className="card available-widget">
										<div className="card-body">
											<h5 className="card-title">Service Availability</h5>
											<ul>
												<li><span>Monday</span>9:30 AM - 7:00 PM</li>
												<li><span>Tuesday</span>9:30 AM - 7:00 PM</li>
												<li><span>Wednesday</span>9:30 AM - 7:00 PM</li>
												<li><span>Thursday</span>9:30 AM - 7:00 PM</li>
												<li><span>Friday</span>9:30 AM - 7:00 PM</li>
												<li><span>Saturday</span>9:30 AM - 7:00 PM</li>
												<li><span>Sunday</span>9:30 AM - 7:00 PM</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</div>
				:
				<div>
					PRODUCT NOT FOUND
				</div>}
		</div>
	)
}