import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('Location',location);




    const handleLogin = (e) =>{
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email,password);
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email'); 
        const password = form.get('password'); 
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
            console.log(result.user);
            // navigate after login
            navigate(location?.state ? location.state : '/');

        })
        .catch(error =>{
            console.log(error);
        })
    }

  return (
    <div>
      <Navbar></Navbar>
      
      <div className="mx-auto mt-10  md:w-3/4 lg:w-1/2 ">
      <h2 className="text-3xl text-center ">Login</h2>
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
     <div className="text-center">
     <p>Do not have an account <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
     </div>
      </div>
    </div>
  );
};

export default Login;
