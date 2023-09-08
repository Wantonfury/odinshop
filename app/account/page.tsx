'use client'
import { ChangeEvent, useState } from 'react'
import Button from '../components/button';

const btnClassesDefault = 'w-half h-10 p-[4] text-center';
const btnClassesActive = 'bg-purple-100 hover:bg-purple-200 active:bg-purple-300';
const btnClassesInactive = 'bg-gray';

export default function Account() {
  const [isBtnLeftActive, setIsBtnLeftActive] = useState(true);
  const [signUpData, setSignUpData] = useState({
    email: '',
    username: '',
    password: ''
  });
  
  const [signInData, setSignInData] = useState({
    username: '',
    password: ''
  });
  
  const handlerSignIn = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value
    });
  }
  
  const handlerSignUp = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value
    });
  }
  
  const handlerSubmitSignIn = () => {
    fetch('/api/sign-in');
  }
  
  const handlerSubmitSignUp = () => {
    fetch('/api/sign-up');
  }
  
  return (
    <div className='h-full bg-dark-gray p-[200px]'>
      <div className='flex flex-col justify-center gap-10 bg-white'>
        <div className='flex items-end justify-center w-[200]'>
          <button type='button' className={`${btnClassesDefault} ${isBtnLeftActive ? btnClassesActive : btnClassesInactive}`} onClick={() => setIsBtnLeftActive(true)}>
            Sign In
          </button>
          
          <button type='button' className={`${btnClassesDefault} ${!isBtnLeftActive ? btnClassesActive : btnClassesInactive}`} onClick={() => setIsBtnLeftActive(false)}>
            Sign Up
          </button>
        </div>
        
        {
          isBtnLeftActive ? 
          <div className={`flex flex-col justify-center items-center gap-10`}>
            <p>Sign In</p>
            <form className='flex flex-col gap-10' onSubmit={handlerSubmitSignIn}>
              <input type='text' placeholder='Username' name='username' onChange={handlerSignIn} required />
              <input type='password' placeholder='Password' name='password' onChange={handlerSignIn} required />
              <Button type='submit'>Sign In</Button>
            </form>
          </div>
          :
          <div className='flex flex-col justify-center items-center gap-10'>
            <p>Sign Up</p>
            <form className='flex flex-col gap-10' onSubmit={handlerSubmitSignUp}>
              <input type='email' placeholder='Email' name='email' onChange={handlerSignUp} required />
              <input type='text' placeholder='Username' name='username' onChange={handlerSignUp} required />
              <input type='password' placeholder='Password' name='password' onChange={handlerSignUp} required />
              <Button type='submit'>Sign Up</Button>
            </form>
          </div>
        }
      </div>
    </div>
  );
}