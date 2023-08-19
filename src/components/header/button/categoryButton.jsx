'use client'
import { ToggleContext } from '@/provider/contextProvider'
import { useContext } from 'react'
import { FaBars } from 'react-icons/fa'

function CategoryButton() {
    const { setData } = useContext(ToggleContext)
    return (
        <button
            onClick={() => setData(s => ({ ...s, sidebarCollapse: !s.sidebarCollapse }))}
            className="w-full h-full text-left flex items-center gap-2 pl-4"
        >
            <FaBars className="w-4 h-4" />
            <p className="font-semibold">{'path' == '/shop' ? "Filter & Categories" : "Categories"}</p>
        </button>
    )
}

export default CategoryButton