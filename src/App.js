import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



// Signin Component
function Signin() {
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'> 
            <h1 className='text-5xl font-semibold'>Hello SETS</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'> Welcome back! Please enter your details.</p>
            
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'> Email</label>
                    <input
                        type="email"
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your Email.'
                    />
                </div>
                <div className='mt-4'>
                    <label className='text-lg font-medium'> Password</label>
                    <input
                        type="password"
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your Password.'
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input 
                            type='checkbox'
                            id ='remember'
                        />
                        <label className='ml-2 font-medium text-base' htmlFor='remember'> Remember Me</label>
                    </div>
                    <button className='font-medium text-base text-blue-500'>Forgot Password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold'>Sign in</button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Don't have an account?</p>
                    <Link to="/signup" className='text-blue-500 text-base font-medium ml-2'>Sign up</Link>
                </div>
            </div>
        </div>
    );
}

// Signup Component
function Signup() {
    return (
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'> 
            <h1 className='text-5xl font-semibold'>Create an Account</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'> Please fill the details.</p>
            
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'> Full Name</label>
                    <input
                        type="text"
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your Full Name.'
                    />
                </div>
                <div>
                    <label className='text-lg font-medium'> Email</label>
                    <input
                        type="email"
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your Email.'
                    />
                </div>
                <div className='mt-4'>
                    <label className='text-lg font-medium'> Password</label>
                    <input
                        type="password"
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your Password.'
                    />
                </div>
                <div className='mt-4'>
                    <label className='text-lg font-medium'> Confirm Password</label>
                    <input
                        type="password"
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Confirm your Password.'
                    /> 
                </div>
                <div className='mt-4 flex items-center'>
                    <div className="flex items-center mr-4">
                        <input
                            type="radio"
                            id="nonAdmin"
                            name="role"
                            value="nonAdmin"
                            className="align-middle"
                        />
                        <label htmlFor="nonAdmin" className='ml-2 text-lg font-medium'>Non-Admin</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="admin"
                            name="role"
                            value="admin"
                            className="align-middle"
                        />
                        <label htmlFor="admin" className='ml-2 text-lg font-medium'>Admin</label>
                    </div>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-blue-500 text-white text-lg font-bold'>Sign Up</button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Already have an account?</p>
                    <Link to="/signin" className='text-blue-500 text-base font-medium ml-2'>Sign in</Link>
                </div>
            </div>
        </div>
    );
}


function App() {
  return (
    <Router>
      <div className="flex w-full h-screen">
        {/* Left half for Signin/Signup Form */}
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Signin />} />
          </Routes>
        </div>

        {/* Right half with decorative elements */}
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200 overflow-hidden">
          <img src="/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

        </div>

      </div>

    </Router>
  );
}


export default App;
