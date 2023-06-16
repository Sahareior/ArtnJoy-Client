import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import anime from 'animejs';
import { useRef } from 'react';
import { useState } from 'react';

const Reg = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, profile } = useAuth();
  const navigate = useNavigate()
  const [error,setError] = useState("")

  const onSubmit = (data, e) => {
    const name = data.name;
    const email = data.email;
    const pass = data.password;
    const confirmPass = data.confirmPassword
    console.log(data)
    if(pass !== confirmPass){
      setError("Password didn't matched!")
      return
    }

    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append('image', image);
    const url =
      'https://api.imgbb.com/1/upload?key=fa3459e04fd74c5957822344e54de3a4';

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;

        createUser(email, pass)
          .then((userCredential) => {
            // Signed in
            profile(name, imageUrl);
            console.log(userCredential);
            setError("")
            // reset();
            navigate('/')
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
      });
  };
  const h1Ref = useRef(null);
  const h2Ref = useRef(null)

  useEffect(() => {
    const animation = anime({
      targets: h1Ref.current,
      translateX: ['-100%', '0%'],
      opacity: [0, 1],
      easing: 'easeInOutSine',
      duration: 2500,
    });

    return () => {
      animation.pause();
    };
  }, []);
  useEffect(() => {
    const animation = anime({
      targets: h2Ref.current,
      translateY: ['-100%', '0%'],
      opacity: [0, 1],
      easing: 'easeInOutSine',
      duration: 2500,
    });

    return () => {
      animation.pause();
    };
  }, []);
console.log(error)

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold" ref={h1Ref}>Login now!</h1>
            <p className="py-6" ref={h2Ref}>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form className='mt-10 p-2' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Upload an Image</span>
                  </label>
                  <input
                    type="file"
                    placeholder=""
                    name="image"
                    accept="image/*"
                    required
                    className="input input-bordered"
                    {...register('image')}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Input Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    {...register('name')}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    {...register('email')}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters long'
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                        message: 'Password must contain at least one capital letter and one special character'
                      }
                    })}
                  />
                  {errors.password && <p className="text-xs text-error">{errors.password.message}</p>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirm password"
                    className={`input input-bordered ${
                      errors.confirmPassword ? 'input-error' : ''
                    }`}
                    {...register('confirmPassword')}
                  />
                </div>
                      <p className='text-red-500'>{error}</p>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Registration
                  </button>
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