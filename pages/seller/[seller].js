import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import { useState } from "react"
import { SendOtp , Register, Login} from "../api/Auth"
import { setCookies } from "../api/Cookies"
import Router, { useRouter } from "next/router"
export default function Seller(){
    const [AuthMode, setAuthMode] = useState("signin")
    const [register,setRegister] = useState({})
    const router = useRouter()
    const changeAuthMode = (value) => {
        setAuthMode(value)
    }
    const setRegisterState = (event) => {
      setRegister(((prevState) => {
        prevState[event.target.name] = event.target.value
        return {
          ...prevState,
          isSeller:true
        }
      }))
    } 
    console.log(register,"register")
    const sendUserOtp = () => {
      if(register.fullname && register.email && register.password && register.gst){
        changeAuthMode("otp")
        SendOtp(register.email)
      }
    }
    const RegisterUser = () => {
      if(register.otp){
        Register(register).then(response => {
          if(response.error){
            console.log(response.error)
          }
          else{
            console.log(response.data)
          }
        })
      }
    }
    const LoginUser = () => {
      console.log("LOGIN")
      console.log(register,"register")
      if(register.email && register.password){
        Login(register).then(response => {
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
    return(
        <div>
            <Header/>
            {AuthMode === "signin"?
            <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={(e) => e.preventDefault()}>
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">Seller Login</h3>
                <div className="text-center">
                  Not registered yet?{" "}
                  <span className="link-primary" onClick={() => changeAuthMode("signup")}>
                   <a style={{cursor:"pointer"}}>Sign Up</a> 
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control mt-1"
                    placeholder="Email Address"
                    onChange={setRegisterState}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control mt-1"
                    placeholder="Password"
                    onChange={setRegisterState}
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary" onClick={() => LoginUser()}>
                    Submit
                  </button>
                </div>
                <p className="text-center mt-2">
                   <a style={{cursor:"pointer"}} >Forgot Password?</a>
                </p>
              </div>
            </form>
          </div>
          :
          AuthMode === "signup"?
          <div>
            <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Seller Register</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={() => changeAuthMode("signin")}>
             <a style={{cursor:"pointer"}}>Sign In</a> 
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              name="fullname"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={setRegisterState}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={setRegisterState}
            />
          </div>
          <div className="form-group mt-3">
            <label>GST Number</label>
            <input
              type="gst"
              name="gst"
              className="form-control mt-1"
              placeholder="GST Number"
              onChange={setRegisterState}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={setRegisterState}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" onClick={() => sendUserOtp()}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
          <p className="text-center mt-2">
                   <a style={{cursor:"pointer"}} >Forgot Password?</a>
                </p>
          </p>
        </div>
      </form>
    </div>
            </div>:
               AuthMode === "otp"? 
               <div className="Auth-form-container">
               <form className="Auth-form" onSubmit={(e) => e.preventDefault()}>
                 <div className="Auth-form-content">
                   <h3 className="Auth-form-title">Seller Login</h3>
                   <div className="form-group mt-3">
                     <label>OTP</label>
                     <input
                       type="otp"
                       name="otp"
                       className="form-control mt-1"
                       placeholder="otp"
                       onChange={setRegisterState}
                     />
                   </div>
                   <div className="d-grid gap-2 mt-3">
                     <button type="submit" className="btn btn-primary" onClick={() => RegisterUser()}>
                       Submit
                     </button>
                   </div>
                   <p className="text-center mt-2">
                      <a style={{cursor:"pointer"}} >Forgot Password?</a>
                   </p>
                 </div>
               </form>
             </div>:""
        }
            
            <Footer/>
        </div>
    )
}