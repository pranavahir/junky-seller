export default function SubCategories(){
    return(
        <div class="content container-fluid">
			
        <div class="page-header">
            <div class="row">
                <div class="col">
                    <h3 class="page-title">Sub Categories</h3>
                </div>
                <div class="col-auto text-end">
                    <a class="btn btn-white filter-btn me-3" href="javascript:void(0);" id="filter_search">
                        <i class="fas fa-filter"></i>
                    </a>
                    <a href="add-subcategory.html" class="btn btn-primary add-button ml-3">
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
                                    <label>Sub Category</label>
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
                                        <th>Sub Category</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                        <th class="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <img class="rounded service-img me-1" src="assets/img/sub-category/sub-category-01.jpg" alt=""/> Bus Service
                                        </td>
                                        <td>Automobile</td>
                                        <td>13 Sep 2020</td>
                                        <td class="text-end">
                                            <a href="edit-subcategory.html" class="btn btn-sm bg-success-light me-2">
                                                <i class="far fa-edit me-1"></i>Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <img class="rounded service-img me-1" src="assets/img/sub-category/sub-category-02.jpg" alt=""/> Office Construction
                                        </td>
                                        <td>Construction</td>
                                        <td>12 Sep 2020</td>
                                        <td class="text-end">
                                            <a href="edit-subcategory.html" class="btn btn-sm bg-success-light me-2">
                                                <i class="far fa-edit me-1"></i>Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <img class="rounded service-img me-1" src="assets/img/sub-category/sub-category-03.jpg" alt=""/> Indoor Interior
                                        </td>
                                        <td>Interior</td>
                                        <td>11 Sep 2020</td>
                                        <td class="text-end">
                                            <a href="edit-subcategory.html" class="btn btn-sm bg-success-light me-2">
                                                <i class="far fa-edit me-1"></i>Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            <img class="rounded service-img me-1" src="assets/img/sub-category/sub-category-04.jpg" alt=""/> House Cleaning
                                        </td>
                                        <td>Cleaning</td>
                                        <td>10 Sep 2020</td>
                                        <td class="text-end">
                                            <a href="edit-subcategory.html" class="btn btn-sm bg-success-light me-2">
                                                <i class="far fa-edit me-1"></i>Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>
                                            <img class="rounded service-img me-1" src="assets/img/sub-category/sub-category-05.jpg" alt=""/> Office Electrical
                                        </td>
                                        <td>Electrical</td>
                                        <td>8 Sep 2020</td>
                                        <td class="text-end">
                                            <a href="edit-subcategory.html" class="btn btn-sm bg-success-light me-2">
                                                <i class="far fa-edit me-1"></i>Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>
                                            <img class="rounded service-img me-1" src="assets/img/sub-category/sub-category-06.jpg" alt=""/> Home Carpentry
                                        </td>
                                        <td>Carpentry</td>
                                        <td>7 Sep 2020</td>
                                        <td class="text-end">
                                            <a href="edit-subcategory.html" class="btn btn-sm bg-success-light me-2">
                                                <i class="far fa-edit me-1"></i>Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>
                                            <img class="rounded service-img me-1" src="assets/img/sub-category/sub-category-07.jpg" alt=""/> Hardware
                                        </td>
                                        <td>Computer</td>
                                        <td>6 Sep 2020</td>
                                        <td class="text-end">
                                            <a href="edit-subcategory.html" class="btn btn-sm bg-success-light me-2">
                                                <i class="far fa-edit me-1"></i>Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>
                                            <img class="rounded service-img me-1" src="assets/img/sub-category/sub-category-08.jpg" alt=""/> Software
                                        </td>
                                        <td>Computer</td>
                                        <td>5 Sep 2020</td>
                                        <td class="text-end">
                                            <a href="edit-subcategory.html" class="btn btn-sm bg-success-light me-2">
                                                <i class="far fa-edit me-1"></i>Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>
                                            <img class="rounded service-img me-1" src="assets/img/sub-category/sub-category-09.jpg" alt=""/> Wall Painting
                                        </td>
                                        <td>Painting</td>
                                        <td>4 Sep 2020</td>
                                        <td class="text-end">
                                            <a href="edit-subcategory.html" class="btn btn-sm bg-success-light me-2">
                                                <i class="far fa-edit me-1"></i>Edit
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>
                                            <img class="rounded service-img me-1" src="assets/img/sub-category/sub-category-10.jpg" alt=""/> Body Wash
                                        </td>
                                        <td>Car Wash</td>
                                        <td>3 Sep 2020</td>
                                        <td class="text-end">
                                            <a href="edit-subcategory.html" class="btn btn-sm bg-success-light me-2">
                                                <i class="far fa-edit me-1"></i>Edit
                                            </a>
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