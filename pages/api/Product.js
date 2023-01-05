import axios from "axios";
import { getCookies } from "./Cookies";
export async function UploadSingleProduct(product){
  product = {
    ...product,
    price:parseFloat(product.price),
    quantity:parseInt(product.quantity),
    weight:parseInt(product.weight),
    operations:"listing",
    userid:getCookies("userid")
  }
  console.log(product,"PRODUCTS")
    const promise =  axios.post("http://localhost:4000/uploadsingleproduct",product)
      const responsedata = promise.then(response => {
        return response.data
      })
      return responsedata
}
export async function ListOfProducts(query){
  const data = {
    createdBy:getCookies("userid")
  }
  const promise =  axios.post("http://localhost:4000/server/getproducts",data)
    const responsedata = promise.then(response => {
      return response.data
    })
    return responsedata
}

export async function FetchAllCategores(query){
  const data = {
    userid:getCookies("userid")
  }
  const promise =  axios.post("http://localhost:4000/fetchallcategoriesproduct",data)
    const responsedata = promise.then(response => {
      return response.data
    })
    return responsedata
}

export async function FetchAllSubCategores(query){
  const data = {
    userid:getCookies("userid")
  }
  const promise =  axios.post("http://localhost:4000/fetchallcategoriesproduct",data)
    const responsedata = promise.then(response => {
      return response.data
    })
    return responsedata
}