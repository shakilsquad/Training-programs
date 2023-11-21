import React, { useContext } from 'react';
import Navbar from './Shared/Navber/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location  = useLocation();
    const naveGate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)

            .then(result => {
                console.log(result.user);
                // navigate after login
                naveGate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
            })

    }



    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0  md:w-[500px] shadow-2xl bg-base-100">
                    <h1 className='text-lg pt-7 md:text-3xl font-bold text-center'>Place Login </h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center pb-5'>Don't Have a Account <Link className='text-red-700 font-bold text-xl' to={'/register'}>Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;