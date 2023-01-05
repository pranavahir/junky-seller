import { FetchAllCategores } from "../../api/Product"
import { useState,useEffect,useRouter } from "react"
export default function Categories(){
    const [categories,setCategories] = useState([])
    useEffect(() => {
        FetchAllCategores().then(response  => {
            if(response && response.data){
                setCategories(response.data)
            }
        })
    },[])
    console.log(categories,"categories")
    return(
        <div class="content container-fluid">
			
        <div class="page-header">
            <div class="row">
                <div class="col">
                    <h3 class="page-title">Categories</h3>
                </div>
                <div class="col-auto text-end">
                    <a class="btn btn-white filter-btn" href="javascript:void(0);" id="filter_search">
                        <i class="fas fa-filter"></i>
                    </a>
                    <a href="add-category.html" class="btn btn-primary add-button ms-3">
                        <i class="fas fa-plus"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="card filter-card" id="filter_inputs">
            <div class="card-body pb-0">
                <form action="#" method="post">
                    <div class="row filter-row">
                        <div class="col-sm-6 col-md-3">
                            <div class="form-group">
                                <label>Category</label>
                                <select class="form-control select">
                                    <option>Select category</option>
                                    <option>Automobile</option>
                                    <option>Construction</option>
                                    <option>Interior</option>
                                    <option>Cleaning</option>
                                    <option>Electrical</option>
                                    <option>Carpentry</option>
                                    <option>Computer</option>
                                </select>
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
                </form>
            </div>
        </div>
        
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover table-center mb-0 datatable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                        <th class="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((value,index) => (
                                        <tr>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img class="rounded service-img me-1" src="assets/img/category/category-01.jpg" alt="Category Image"/>{value}</td>
                                        <td>11 Sep 2020</td>
                                        <td class="text-end">
                                            <a href="edit-category.html" class="btn btn-sm bg-success-light me-2">	<i class="far fa-edit me-1"></i> Edit</a>
                                        </td>
                                    </tr>
                                    ))}
                                    {/* <tr>
                                        <td>1</td>
                                        <td>
                                            <img class="rounded service-img me-1" src="assets/img/category/category-01.jpg" alt="Category Image"/>Computer</td>
                                        <td>11 Sep 2020</td>
                                        <td class="text-end">
                                            <a href="edit-category.html" class="btn btn-sm bg-success-light me-2">	<i class="far fa-edit me-1"></i> Edit</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <img class="rounded service-img me-1" src="assets/img/category/category-02.jpg" alt="Category Image"/>Interior</td>
                                        <td>10 Sep 2020</td>
                                        <td class="text-end">
                                            <a href="edit-category.html" class="btn btn-sm bg-success-light me-2">	<i class="far fa-edit me-1"></i> Edit</a>
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