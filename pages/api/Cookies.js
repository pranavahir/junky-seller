import Cookies from 'js-cookie'
export function getCookies(key) {
    let res = null
      try{
        
        res = Cookies.get(key)?Cookies.get(key):"";
      }
      catch(ex){
        console.log(ex);
      }
      return res
  };
  
  
  export function setCookies(key,value,option) {
    
    try{
      Cookies.set(key,value,option);
    }
    catch(ex){
      console.log(ex);
    }
    
  };
  
  export function removeCookies(key) {
    
    try{
      // Cookies.remove(key, { path: '' })
      Cookies.remove(key);
    }
    catch(ex){
      console.log(ex);
    }
  
  };
  