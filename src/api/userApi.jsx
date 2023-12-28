const saveUser = (data) =>{
    localStorage.setItem('user',data)
}

const userIsLoggedin = () => {
    try {
      const val = localStorage.getItem("user");
      console.log(val);
      
      return !!val && val !== "null"; 
    } catch {
      return false;
    }
  }
export {saveUser, userIsLoggedin}