import React from "react";

export default function Login() {
let [loginData,setLoginData] = React.useState(
    {
        userName:"",
        password:"",
        confirmPassword:"",
        checkbox: false
    })

let formHandler = (event)=>{
    const {name,value,checked,type} = event.target
setLoginData(prevLoginData =>{
return{
    ...prevLoginData,
    [name]: type==="checkbox" ? checked : value


}

})

}
   let submit = (event) =>{
event.preventDefault()
if (loginData.password !== loginData.confirmPassword) {
    alert("The passwords do not match");
  } else if (loginData.userName === "david" && loginData.password === "1234") {
    window.open("http://localhost:3000/page1");
  } else {
    alert("The user does not exist in the system");
  }
   }
    return (

<div className="form-login">
   
            <form onSubmit={submit}>
            <div className="form-login-item">
<label>User Name</label> 
<input onChange={formHandler} type="text" name="userName"placeholder="david" required />
<label>Password</label>
<input onChange={formHandler}type={loginData.checkbox ? "text" : "password"} name="password" placeholder="1234" required />
<label>confirm Password</label>
<input onChange={formHandler} type={loginData.checkbox ? "text" : "password"} name="confirmPassword" required />
<div className="input-checkbox"><input onChange={formHandler} type="checkbox" name="checkbox"/><label>Show Password</label> </div>
<button> Sigh in</button>
</div>
            </form >
         
            </div>
    )
}

