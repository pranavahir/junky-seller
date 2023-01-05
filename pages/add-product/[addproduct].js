import { useState } from "react"
import { UploadSingleProduct } from "../api/Product"
export default function addproduct(){
    const [obj,setObj] = useState({})
    const setHandleChange = (event) => {
        setObj(((prevState) => {
            prevState[event.target.name] = event.target.value
            return {
              ...prevState,
              country:"India"
            }
          }))
    }
    const handleSubmit = () => {
        UploadSingleProduct(obj).then(response => {
            console.log(response,"RESPONSE")
        })
    }
    console.log(obj,"obj")
    return(
        <div class="content container-fluid">
        <div class="row">
            <div class="col-xl-8 offset-xl-2">
            
                <div class="page-header">
                    <div class="row">
                        <div class="col">
                            <h3 class="page-title">Add Single Product</h3>
                        </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-body">
                    
                        <form onSubmit={(e) => e.preventDefault()}>
                            {/* <div class="form-group">
                                <label>Category</label>
                                <select class="form-control select">
                                    <option>Select Category</option>
                                    <option>Automobile</option>
                                    <option>Construction</option>
                                    <option>Interior</option>
                                    <option>Cleaning</option>
                                    <option>Electrical</option>
                                    <option>Carpentry</option>
                                    <option>Computer</option>
                                </select>
                            </div> */}
                            <div class="form-group">
                                <label>Brand Name</label>
                                <input  class="form-control" type="text" name="brandName" onChange={setHandleChange}/>
                            </div>
                            <div class="form-group">
                                <label>Title</label>
                                <input class="form-control" type="text" name="title" onChange={setHandleChange}/>
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <input class="form-control" type="text" name="description" onChange={setHandleChange}/>
                            </div>
                            <div class="form-group">
                                <label>Weight</label>
                                <input class="form-control" type="text" name="weight" onChange={setHandleChange}/>
                            </div>
                            <div class="form-group">
                                <label>Main Image</label>
                                <input class="form-control" type="text" name="mainImage" onChange={setHandleChange}/>
                            </div>
                            <div class="form-group">
                                <label>Additional Image 1</label>
                                <input class="form-control" type="text" name="additionalImage1" onChange={setHandleChange}/>
                            </div>
                            <div class="form-group">
                                <label>Additional Image 2</label>
                                <input class="form-control" type="text"/>
                            </div>
                            <div class="form-group">
                                <label>Additional Image 3</label>
                                <input class="form-control" type="text"/>
                            </div>
                            <div class="form-group">
                                <label>Additional Image 4</label>
                                <input class="form-control" type="text"/>
                            </div>
                            <div class="form-group">
                                <label>Additional Image 5</label>
                                <input class="form-control" type="text"/>
                            </div>
                            <div class="form-group">
                                <label>Price</label>
                                <input class="form-control" type="text" name="price" onChange={setHandleChange}/>
                            </div>
                            <div class="form-group">
                                <label>Quantity</label>
                                <input class="form-control" type="text" name="quantity" onChange={setHandleChange}/>
                            </div>
                            <div class="form-group">
                                <label>Category</label>
                                <input class="form-control" type="text" name="category" onChange={setHandleChange}/>
                            </div>
                            <div class="form-group">
                                <label>Country</label>
                                <input class="form-control" type="text" name="country" value="India"/>
                            </div>
                            {/* <div class="form-group">
                                <label>Sub Category Image</label>
                                <input class="form-control" type="file"/>
                            </div> */}
                            <div class="mt-4">
                                <button class="btn btn-primary" onClick={handleSubmit}>Add Subcategory</button>
                                <a href="subcategories.html" class="btn btn-link">Cancel</a>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}