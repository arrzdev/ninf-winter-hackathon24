"use client";

import {FormEvent, useState} from 'react'
import { signIn, signUp } from '@/lib/actions/auth'

// import Notification from '@/lib/components/Notification';

const LoginPage = () => {
  const [signingIn, setSigningIn] = useState(true)
  const [submitState, setSubmitState] = useState(false)
  const [serverResponse, setServerResponse] = useState({
    status: "",
    message: ""
  })

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    
    //mark submit state as started
    setSubmitState(true)

    //scroll user to the top
    window.scrollTo(0, 0)

    //reset error message
    setServerResponse({
      status: "",
      message: ""
    })

    const signResponse = signingIn ? await signIn({username, password}) : await signUp({username, password})

    if (signResponse){
      setServerResponse({
        status: signResponse.status,
        message: signResponse.message
      })
    }

    //mark submit state as false
    setSubmitState(false)
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-8 py-12 lg:px-8 bg-gradient-to-b from-[#111827] from-25% via-[#121127] via-75% to-[#0e0e0e] h-screen w-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      {/* {serverResponse.message && 
        <Notification type={serverResponse.status}>
          {serverResponse.message}
        </Notification>
      } */}
        <img
          className="mx-auto h-12 w-auto"
          src={`https://tailwindui.com/img/logos/mark.svg?color=${signingIn ? "indigo" : "teal"}&shade=600`}
          alt="Logo of the Tailwind CSS framework"
        />
        <h2 className="mt-4 sm:mt-12 text-center text-3xl font-bold leading-9 tracking-tight text-white">
          {signingIn ? "Sign in to your account" : "Sign up for an account"}
        </h2>  
      </div>
      {/* handle errors from backend */}
      <div className="mt-8 sm:mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={onSubmit}> 
        <div>
          <label htmlFor="username" className="block text-lg font-medium leading-6 text-white">
            Username
          </label>
          <div className="mt-4">
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
                className={`block w-full rounded-lg border-0 py-2.5 px-4 sm:py-4 text-lg text-white shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset ${signingIn ? "focus:ring-indigo-600" : "focus:ring-teal-600"} transition duration-200 ease-in-out sm:text-xl sm:leading-6 bg-[#1D2432]`}
            />
          </div>
        </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-lg font-medium leading-6 text-white">
            Password
          </label>
        </div>
        <div className="mt-4">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
                className={`block w-full rounded-lg border-0 py-2.5 px-4 sm:py-4 text-lg text-white shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset ${signingIn ? "focus:ring-indigo-600" : "focus:ring-teal-600"} transition duration-200 ease-in-out sm:text-xl sm:leading-6 bg-[#1D2432]`}
          />
        </div>
      </div>
      <div>
        <button
          id="loginButton"
          type="submit" 
          disabled={submitState}
          className={`flex w-full justify-center rounded-lg ${signingIn ? "bg-indigo-600" : "bg-teal-600"} py-2.5 px-4 sm:py-4 text-lg font-semibold leading-6 text-white shadow-lg hover:${signingIn ? "bg-indigo-500" : "bg-teal-500"} focus-visible:outline focus-visible:outline-2 transition duration-200 ease-in-out focus-visible:outline-offset-2 ${submitState && "cursor-not-allowed"}`}
        >
          {signingIn ? "Sign in" : "Sign up"}
          {submitState && (
          <div className='translate-y-1/4 h-4 w-4 ml-3'>
            <svg className='animate-spin' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"/>
            </svg>
          </div>
          )}
        </button>
      </div>
    </form>
    <p className="mt-4 sm:mt-10 text-center text-md sm:text-lg text-gray-500 font-semibold">
      {signingIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <a onClick={() => setSigningIn(!signingIn)} className={`font-semibold leading-6 ${signingIn ? "text-indigo-600" : "text-teal-600"} hover:${signingIn ? "text-indigo-500" : "text-teal-500"} cursor-pointer text-lg sm:text-xl`}>
        {signingIn ? "Sign up" : "Sign in"}
      </a>
    </p>
    </div>
  </div>
  )
}

export default LoginPage