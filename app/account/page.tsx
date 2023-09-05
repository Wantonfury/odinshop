'use client'
import { ChangeEvent, useState } from 'react'
import Button from '../components/button';

export default function Account() {
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
    <div className='flex justify-center items-align flex-grow gap-40 bg-background'>
      <div className='flex flex-col justify-center items-center gap-10'>
        <p>Sign In</p>
        <form className='flex flex-col gap-10' onSubmit={handlerSubmitSignIn}>
          <input type='text' placeholder='Username' name='username' onChange={handlerSignIn} required />
          <input type='password' placeholder='Password' name='password' onChange={handlerSignIn} required />
          <Button type='submit'>Sign In</Button>
        </form>
      </div>
      
      <div className='flex flex-col justify-center items-center gap-10'>
        <p>Sign Up</p>
        <form className='flex flex-col gap-10' onSubmit={handlerSubmitSignUp}>
          <input type='email' placeholder='Email' name='email' onChange={handlerSignUp} required />
          <input type='text' placeholder='Username' name='username' onChange={handlerSignUp} required />
          <input type='password' placeholder='Password' name='password' onChange={handlerSignUp} required />
          <Button type='submit'>Sign Up</Button>
        </form>
      </div>
    </div>
  );
}