import React from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
export default function Home() {
  const {currentUser}=useSelector(state=>state.user)
  return (
    <div className='h-screen w-5/6 ml-20 mt-5 flex'>
      <div className=' text-center flex flex-col items-center ml-auto mt-10'>
        <h1 className='lora-font text-6xl text-mblue mt-20'>
          Welcome to <span className='text-dblue'>Shyam</span>Web App
        </h1>
        <h3 className='sedan-regular text-2xl'>
         School's CRM Solution.
        </h3>
        {currentUser ? (
        <p className='mt-10 text-lg sedan-regular'> Welcome <Link to='/profile'><span  className='cursor-pointer underline text-dblue'>{currentUser.username}</span></Link> to our School CRM WebApp</p>
        ) : (
        <h6 className='text-xl mt-5 sedan-regular'>
          Sign up for shyam webapp now and experience the difference firsthand...
        </h6>
        )}
        {currentUser ? (
        <></>
        ) : (
          <Link to='/sign-in' className='bg-dblue text-white rounded-lg p-4 uppercase hover:opacity-95 disabled:opacity-80 items-end mt-3 w-2/6'>
              Sign In
          </Link>
        )}
        <div className='flex gap-2 mt-5'>
        {currentUser ? (
            <></>
        ) : (
          <>
          <p>Dont have an account?</p>
          <Link to='/sign-up' className='text-red underline'>
            Sign up
          </Link>
          </>
        )}
          </div>
        </div>
      </div>
  );
}

