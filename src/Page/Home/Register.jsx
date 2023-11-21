import React, { useContext } from 'react';
import Navbar from './Shared/Navber/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, photo, email, password);
        // create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .then(error => {
                console.error(error);
            })

    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 md:w-[500px]  shadow-2xl bg-base-100">
                    <h1 className='text-lg pt-7 md:text-3xl font-bold text-center'>Place Register </h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photoUrl' className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='text-center pb-3'>All Ready Have an  Account <Link className='text-red-700 font-bold text-xl' to={'/login'}>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;