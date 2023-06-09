import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const Reg = () => {
  const { register, handleSubmit } = useForm();
  const {createUser} = useAuth()

  const onSubmit = (data) => {
    const name = data.name 
    const email = data.email
    const pass = data.password 
    createUser(email,pass) 
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Input Your Name</span>
                  </label>
                  <input type="text" placeholder="Name" className="input input-bordered" {...register('name')} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" className="input input-bordered" {...register('email')} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered" {...register('password')} />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Registration</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
