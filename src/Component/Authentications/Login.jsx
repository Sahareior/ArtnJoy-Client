import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import anime from 'animejs';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [clicked, setClicked] = useState(false);
  const { login, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.state?.state?.pathname || '/';

  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.password;
    login(email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate(path);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  const togglePasswordVisibility = () => {
    setClicked(!clicked);
  };

  const google = async () => {
    try {
      await googleSignIn();
      navigate(path);
    } catch (error) {
      console.log(error);
    }
  };


  const h1Ref = useRef(null);

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

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold" ref={h1Ref}>
              Login now!
            </h1>
            <p className="py-6">
              <button className="btn btn-primary" onClick={google}>
                Sign in With Google
              </button>
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
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
                  <div className="relative">
                    <input
                      type={clicked ? 'text' : 'password'}
                      placeholder="password"
                      className="input input-bordered pr-10"
                      {...register('password')}
                    />
                    <span
                      className="absolute top-2 right-2 text-gray-500 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                    {clicked ? (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 2l20 20M4 9a8 8 0 008 14m0-22a8 8 0 018 8"
    />
  </svg>
) : (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 9v6a2 2 0 002 2h8a2 2 0 002-2V9M6 9a2 2 0 012-2h8a2 2 0 012 2m-2 0V7a2 2 0 00-2-2H8a2 2 0 00-2 2"
    />
  </svg>
)}

                    </span>
                  </div>
                </div>
                <Link to="/reg">
                  <p className="hover:cursor-pointer hover:text-red-500">Need an account?</p>
                </Link>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* SVG and paths */}
    </div>
  );
};

export default Login;
