import axios from "axios";
export async function SendOtp(email){
    const data = {
        email:email
    }
    const promise =  axios.post("https://www.junkyscrap.com/server/sendOtp",data)
      const responsedata = promise.then(response => {
        return response.data
      })
      return responsedata
}
export async function Register(user){
    const data = {
        email:user.email,
        otp:parseInt(user.otp),
        isSeller:user.isSeller,
        isBuyer:user.isBuyer,
        password:user.password,
        name:user.fullname,
        gst:user.gst
    }
    const promise =  axios.post("https://www.junkyscrap.com/server/register",data)
      const responsedata = promise.then(response => {
        return response.data
      })
      return responsedata
}

export async function Login(user){
  const data = {
      email:user.email,
      isSeller:user.isSeller,
      password:user.password,
      isBuyer:user.isBuyer,
  }
  const promise =  axios.post("http://localhost:4000/server/login",data)
    const responsedata = promise.then(response => {
      return response.data
    })
    return responsedata
}