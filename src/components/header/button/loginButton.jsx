'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

function LoginButton() {
    const { status } = useSession()

    const query = useSearchParams()
    const isOpen = query.get("signin")

    useEffect(() => {

        if (isOpen === "user" && status === "unauthenticated") {
            window.login_modal_1.showModal()
        }

    }, [isOpen, status])
    return (
        <Link onClick={() => window.login_modal_1.showModal()} href={{ pathname: "/", query: { signin: "user" } }}
            className="cursor-pointer hover:outline rounded-sm outline-teal-400 p-[2px] ">
            <p className="font-semibold text-sm text-slate-600">Hello, Bulbul</p>

            <p className="font-bold text-base text-teal-500">Account & Lists</p>
        </Link>
    )
}

export default LoginButton