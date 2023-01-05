import { useState } from "react"
import { SendOtp , Register, Login} from "../../api/Auth"
import {setCookies} from '../../api/Cookies'
import { useRouter } from "next/router"
export default function SellerLogin(){
    const router = useRouter()
    const [obj,setObj] = useState({})
    const setHandleChange = (event) => {
        setObj(((prevState) => {
            prevState[event.target.name] = event.target.value
            return {
              ...prevState,
              isSeller:true
            }
          }))
    }
    const LoginUser = () => {
        console.log("LOGIN")
        console.log(obj,"obj")
        if(obj.email && obj.password){
          Login(obj).then(response => {
            if(response.error){
              console.log(response.error)
            }
            else{
              console.log(response.data)
              setCookies("userid",response.data.user._id)
              router.push('/')
            }
          })
        }
      }
    console.log(obj,"obj")
    return(
        <div class="login-page">
        <div class="login-body container">
            <div class="loginbox">
                <div class="login-right-wrap">
                    <div class="account-header">
                        <div class="account-logo text-center mb-4">
                            <a href="index.html">
                                <img src="assets/img/logo-icon.png" alt="" class="img-fluid"/>
                            </a>
                        </div>
                    </div>
                    <div class="login-header">
                        <h3>Login <span>JunkyScrap</span></h3>
                        <p class="text-muted">Access to our dashboard</p>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div class="form-group">
                            <label class="control-label">Username</label>
                            <input class="form-control" name="email" type="text" placeholder="Enter your username" onChange={setHandleChange}/>
                        </div>
                        <div class="form-group mb-4">
                            <label class="control-label">Password</label>
                            <input class="form-control" name="password" type="password" placeholder="Enter your password" onChange={setHandleChange}/>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-primary btn-block account-btn" type="submit" onClick={() => LoginUser()}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}