import { ListOfProducts } from "../../api/Product"
import { useState,useEffect } from "react"
import { useRouter } from "next/router"
export default function ProductListing(){
    const router = useRouter()
    const [products,setProducts] = useState([])
    useEffect(() => {
        ListOfProducts().then(response => {
            if(response && response.data){
                setProducts(response.data)
            }
        })
    },[])
    console.log(products,"products")
    return(
        <div class="content container-fluid">
			
        <div class="page-header">
            <div class="row">
                <div class="col">
                    <h3 class="page-title">Products</h3>
                </div>
                <div class="col-auto text-end">
                    <a class="btn btn-white filter-btn" href="javascript:void(0);" id="filter_search">
                        <i class="fas fa-filter"></i>
                    </a>
                </div>
            </div>
        </div>
        <form action="#" method="post" id="filter_inputs">
            <div class="card filter-card">
                <div class="card-body pb-0">
                    <div class="row filter-row">
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group">
                                <label>Service</label>
                                <input class="form-control" type="text"/>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group">
                                <label>From Date</label>
                                <div class="cal-icon">
                                    <input class="form-control datetimepicker" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group">
                                <label>To Date</label>
                                <div class="cal-icon">
                                    <input class="form-control datetimepicker" type="text"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group">
                                <button class="btn btn-primary btn-block w-100" type="submit">Submit</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <button class="btn btn-primary" onClick={() => router.push("/add-product/list")} >Add Product</button>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover table-center mb-0 datatable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Title</th>
                                        <th>Brandname</th>
                                        <th>Category</th>
                                        <th>Amount</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((value,index) => (
                                        <tr>
                                        <td>{index + 1}</td>
                                        <td>
                                            <a href="service-details.html">
                                                <img class="rounded service-img me-1" src="assets/img/services/service-01.jpg" alt=""/> {value.title}
                                            </a>
                                        </td>
                                        <td>{value.brandName}</td>
                                        <td>{value.category}</td>
                                        <td>INR {value.price}</td>
                                        <td>{value.createdAt.split('T')[0]}</td>
                                        <td>
                                            <div class="status-toggle">
                                                <input id="service_1" class="check" type="checkbox"/>
                                                <label for="service_1" class="checktoggle">checkbox</label>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="service-details.html" class="btn btn-sm bg-info-light">
                                                <i class="far fa-eye me-1"></i> View
                                            </a>
                                        </td>
                                    </tr>
                                    ))}
                                    {/* <tr>
                                        <td>1</td>
                                        <td>
                                            <a href="service-details.html">
                                                <img class="rounded service-img me-1" src="assets/img/services/service-01.jpg" alt=""/> Toughened Glass Fitting Services
                                            </a>
                                        </td>
                                        <td>Wayne, New Jersey</td>
                                        <td>Cleaning</td>
                                        <td>$25</td>
                                        <td>13 Sep 2020</td>
                                        <td>
                                            <div class="status-toggle">
                                                <input id="service_1" class="check" type="checkbox"/>
                                                <label for="service_1" class="checktoggle">checkbox</label>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="service-details.html" class="btn btn-sm bg-info-light">
                                                <i class="far fa-eye me-1"></i> View
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <a href="service-details.html">
                                                <img class="rounded service-img me-1" src="assets/img/services/service-02.jpg" alt=""/> Car Repair Services
                                            </a>
                                        </td>
                                        <td>Hanover, Maryland</td>
                                        <td>Automobile</td>
                                        <td>$50</td>
                                        <td>12 Sep 2020</td>
                                        <td>
                                            <div class="status-toggle">
                                                <input id="service_2" class="check" type="checkbox" checked/>
                                                <label for="service_2" class="checktoggle">checkbox</label>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="service-details.html" class="btn btn-sm bg-info-light">
                                                <i class="far fa-eye me-1"></i> View
                                            </a>
                                        </td>
                                    </tr> */}
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