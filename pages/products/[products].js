import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { ListOfProducts } from "../api/Product"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import {
	faSearch,
	faAmbulance,
	faAnchor,
	faFlag,
	faInr,
	faStar,
	faCircle
} from "@fortawesome/free-solid-svg-icons";
export default function Products(){
	const router = useRouter()
	const [products,setProducts] = useState([])
	const [category,setCategory] = useState(null)
	useEffect(() => {
		ListOfProducts(router.query).then(response => {
			console.log(response,"responseresponse")
			if(response !== null && response !== undefined && response.data !== null && response.data !== undefined && response.data.length !== 0){
				setProducts(response.data)
			}
		})
	},[router.query.products])
	console.log(products,"products")
	console.log(category,"category")
	const HandleClick = () => {
		console.log("CLICK")
		router.replace(`/products/categories?&category=${category}`)
		// router.push({
		// 	pathname: '/products/categories',
		// 	query: { categories: category },
		//   })
	}
	const myLoader = ({ src }) => {
		return src;
	}
    return(
        <div>
            <Header/>
		<div className="breadcrumb-bar">
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<div className="breadcrumb-title">
							<h2>Find a Professional</h2>
						</div>
					</div>
					<div className="col-auto float-end ms-auto breadcrumb-menu">
						<nav aria-label="breadcrumb" className="page-breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<a href="index.html">Home</a>
								</li>
								<li className="breadcrumb-item active" aria-current="page">Find a Professional</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		
		<div className="content">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 theiaStickySidebar">
						<div className="card filter-card">
							<div className="card-body">
								<h4 className="card-title mb-4">Search Filter</h4>
								<form id="search_form">
									<div className="filter-widget">
										<div className="filter-list">
											<h4 className="filter-title">Keyword</h4>
											<input type="text" className="form-control" placeholder="What are you looking for?"/>
										</div>
										<div className="filter-list">
											<h4 className="filter-title">Sort By</h4>
											<select className="form-control selectbox select form-select">
												<option>Sort By</option>
												<option>Price Low to High</option>
												<option>Price High to Low</option>
												<option>Newest</option>
											</select>
										</div>
										<div className="filter-list">
											<h4 className="filter-title">Categories</h4>
											<select className="form-control form-control selectbox select form-select" onChange={(e) => setCategory(e.target.value)}>
												<option>All Categories</option>
												<option>Aluminum</option>
												<option>Copper</option>
												<option>Steel</option>
												<option>Iron</option>
											</select>
										</div>
										<div className="filter-list">
											<h4 className="filter-title">Location</h4>
											<input className="form-control" type="text" placeholder="Search Location"/>
										</div>
									</div>
									<button className="btn btn-primary pl-5 pr-5 btn-block get_services w-100" type="button" onClick={HandleClick}>Search</button>
								</form>
							</div>
						</div>
					</div>
					<div className="col-lg-9">
						<div className="row align-items-center mb-4">
							<div className="col-md-6 col">
								<h4><span>{products.length}</span> Products</h4>
							</div>
							<div className="col-md-6 col-auto">
								<div className="view-icons">
									<a href=";" className="grid-view active"><i className="fas fa-th-large"></i></a>
								</div>
							</div>
						</div>
						<div>
						<div className="row" >
							{products.map((item) => (
								
								<div className="col-lg-4 col-md-6" key={item._id.toString()}>
									<div className="service-widget">
										<div className="service-img">
											<a href={`/product/${item._id}`}>
												{/* <img className="img-fluid serv-img" alt="Service Image" src={item.mainImage} width="500" height="600"/> */}
												<Image
														src={item.mainImage}
														loader={myLoader}
														alt=""
														className="img-fluid"
														width={500}
														height={500} />
											</a>
											<div className="fav-btn">
												<a href="" className="fav-icon">
													<i className="fas fa-heart"></i>
												</a>
											</div>
											<div className="item-info">
												<div className="service-user">
													<a href="#">
														{/* <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt=""/> */}
														<Image
														src={"https://cdn-icons-png.flaticon.com/512/21/21104.png"}
														loader={myLoader}
														alt=""
														className="img-fluid"
														width={500}
														height={500} />
													</a>	
													<span className="service-price">{item.price}</span>
												</div>
												<div className="cate-list">
													<a className="bg-yellow" href={`/product/${item._id}`}>{item.category}</a>
												</div>
											</div>
										</div>
										<div className="service-content">
											<h3 className="title">
												<a href={`/product/${item._id}`}>{item.title.slice(0,50) + "..."}</a>
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
												<FontAwesomeIcon
													icon={faStar}
													style={{ fontSize: 25, color: "orange" }}
												/>
												<span className="d-inline-block average-rating">(4.3)</span>
											</div>
											{/* <div className="user-info">
												<div className="row">	
													<span className="col-auto ser-contact"><i className="fas fa-phone me-1"></i> 
														<span>xxxxxxxx49</span>
													</span>
													<span className="col ser-location">
														<span>Wayne, New Jersey</span> <i className="fas fa-map-marker-alt ms-1"></i>
													</span>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							
							))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>﻿
            <Footer/>
        </div>
    )
}