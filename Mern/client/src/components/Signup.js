import React,{useState} from 'react'
import "../components/Signup.css";
import {NavLink , useHistory} from 'react-router-dom';


const Signup = () => {
    const history = useHistory();
    const [user,setUser]=useState({name:"",email:"",phone:"",btechBranch:"",password:""});

    let name,value;
    const handleInputs =(e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});

}

const PostData = async(e)=>{
        e.preventDefault();
        const{name,email,phone,btechBranch,password}= user;
        const res = await fetch("/register",{
            method:"post",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({ name,email,phone,btechBranch,password})
        });
        const data = await res.json();
        if(data.status===422 || !data){
            window.alert("inavaliud resgistration");
        }else{
            window.alert("sucessfully registered");
            history.push("/signin")

        }

}

    return (
        <>
            <div className="signup-form">
    <form method="post">
		<h2>Create your account</h2>
		<p className="hint-text">Create your account.To get admission</p>
        <div className="form-group">
			<div className="row">
				<div className="col"><input type="text" class="form-control" name="name" 
                value={user.name}
                onChange={handleInputs}
                placeholder="Full name" required="required"/></div>
				
			</div>        	
        </div>
        <div className="form-group">
        	<input type="email" class="form-control" name="email" 
             value={user.email}
             onChange={handleInputs}placeholder="Email" required="required"/>
        </div>
        <div className="form-group">
        	<input type="numerical" class="form-control" name="phone" 
             value={user.phone}
             onChange={handleInputs}placeholder="Number" required="required"/>
        </div>
		<div className="form-group">
            <input type="password" class="form-control" name="password" 
             value={user.password}
             onChange={handleInputs}placeholder="Password" required="required"/>
        </div>
		<div className="form-group">
            <input type="text" class="form-control" 
             value={user.btechBranch}
             onChange={handleInputs}name="btechBranch" placeholder="btechBranch" required="required"/>
        </div>        
       
		<div className="form-group">
            <button type="submit" 
            name = "signup"
            id ="signup"
            class="btn btn-success btn-lg btn-block"
            value="register"
            onClick={PostData}
            >Register Now</button>
        </div>
    </form>
	<div className="text-center">Already have an account? <NavLink to="/signin"><b className="hint-text" >Sign in</b></NavLink></div>
</div>
        </>
    )
}

export default Signup;
