import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import styles
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        toast.error(data.message); // Show error toast
        return;
      }
      dispatch(signInSuccess(data));
      // toast.success('Sign In Successful!'); // Show success toast
      localStorage.setItem('signInSuccess', 'true');
      navigate('/home');
      // toast.success('Sign In Successful!');
      
    } catch (error) {
      dispatch(signInFailure(error.message));
      toast.error(error.message); // Show error toast
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
      <ToastContainer /> {/* Add ToastContainer here */}
    </div>
  );
}
// import React from 'react';
// import home from './Home';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   signInStart,
//   signInSuccess,
//   signInFailure,
// } from '../redux/user/userSlice';
// import OAuth from '../components/OAuth';

// export default function SignIn() {
//   const [formData, setFormData] = useState({});
//   const { loading, error } = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       dispatch(signInStart());
//       const res = await fetch('/api/auth/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log(data);
//       if (data.success === false) {
//         dispatch(signInFailure(data.message));
//         return;
//       }
//       dispatch(signInSuccess(data));
//       navigate('/home');
//     } catch (error) {
//       dispatch(signInFailure(error.message));
//     }
//   };
//   return (
//     <div className='p-3 max-w-lg mx-auto'>
//       <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
//       <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
//         <input
//           type='email'
//           placeholder='email'
//           className='border p-3 rounded-lg'
//           id='email'
//           onChange={handleChange}
//         />
//         <input
//           type='password'
//           placeholder='password'
//           className='border p-3 rounded-lg'
//           id='password'
//           onChange={handleChange}
//         />

//         <button
//           disabled={loading}
//           className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
//         >
//           {loading ? 'Loading...' : 'Sign In'}
//         </button>
//         <OAuth/>
//       </form>
//       <div className='flex gap-2 mt-5'>
//         <p>Dont have an account?</p>
//         <Link to={'/sign-up'}>
//           <span className='text-blue-700'>Sign up</span>
//         </Link>
//       </div>
//       {error && <p className='text-red-500 mt-5'>{error}</p>}
//     </div>
//   );
// }
// import React from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import OAuth from "../components/OAuth.jsx";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   signInStart,
//   signInSuccess,
//   signInFailure,
// } from "../redux/user/userSlice.js";

// export default function SignIn() {
//   const [formData, setFormData] = useState({});
//   // const [error, setError] = useState(null);
//   // const [loading, setLoading] = useState(false);
//   const { loading, error } = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // setLoading(true);
//       dispatch(signInStart());
//       const res = await fetch("/api/auth/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log(data);
//       if (data.success === false) {
//         dispatch(signInFailure(data.message));
//         return;
//       }
//       dispatch(signInSuccess(data));
//       navigate("/home");
//     } catch (error) {
//       dispatch(signInFailure(error.message));
//     }
//   };
//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="email"
//           placeholder="email"
//           className="border p-3 rounded-lg"
//           id="email"
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           placeholder="password"
//           className="border p-3 rounded-lg"
//           id="password"
//           onChange={handleChange}
//         />

//         <button
//           disabled={loading}
//           className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
//         >
//           {loading ? "Loading..." : "Sign In"}
//         </button>
//         <OAuth />
//       </form>
//       <div className="flex gap-2 mt-5">
//         <p>Dont Have an account?</p>
//         <Link to={"/signup"}>
//           <span className="text-blue-700">Sign up</span>
//         </Link>
//       </div>
//       {error && <p className="text-red-500 mt-5">{error}</p>}
//     </div>
//   );
// }
