'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from 'react-hot-toast'

function LoginForm({ closeBtnRef }) {
    const [inputData, setInputData] = useState({ username: "", password: "" })
    const { push } = useRouter()
    // find Redirect url 
    const searchParams = useSearchParams()
    const callback = searchParams.get('callbackUrl')

    function loginHandler() {
        const toastId = toast.loading('Loading...', { duration: 8000, style: { zIndex: 555 } });
        signIn("credentials", { ...inputData, redirect: false })
            .then(({ error, url }) => {
                if (!error) {
                    // Login Successfully
                    toast.success('Login Successfully', {
                        id: toastId,
                        duration: 3000
                    });
                    push(callback || "/")
                    closeBtnRef.current?.click()
                } else {
                    // error toast
                    toast.error('Invalid username or password !', {
                        id: toastId,
                        duration: 3000,
                    });
                }
            })
    }
    return (
        <div className="animate-popup origin-right flex flex-col w-full border-opacity-50">

            {/* Login with credentials */}
            <div className='flex flex-col gap-2'>
                <input onChange={({ target }) => {
                    setInputData(s => ({ ...s, username: target.value }))
                }} type="text" placeholder='Username'
                    className='border rounded text-sm focus:outline-none focus:border-[#60b8a6] px-2 py-[6px]' />
                <input onChange={({ target }) => {
                    setInputData(s => ({ ...s, password: target.value }))
                }} type="text" placeholder='Password'
                    className='border rounded text-sm focus:outline-none focus:border-[#60b8a6] px-2 py-[6px]' />
                <span onClick={loginHandler} className='bg-[#60b8a6] text-white py-1 rounded text-center  cursor-pointer hover:bg-[#448b7d] transition'>Sign In</span>
            </div>
            <div className="divider text-sm md:text-base text-slate-500">
                OR
            </div>
            {/* Login with google */}
            <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="w-full hover:bg-slate-200 transition py-1 outline-none border rounded text-sm md:text-base font-medium text-slate-500 flex items-center justify-center gap-2">
                <Image
                    src="https://i.ibb.co/5x1KjyG/googleicon-removebg-preview.png"
                    alt="googleicon"
                    width={15}
                    height={15} />
                Continue With Google
            </button>
        </div>

    )
}

export default LoginForm