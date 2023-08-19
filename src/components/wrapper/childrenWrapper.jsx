'use client'

import { ToggleContext } from "@/provider/contextProvider"
import { useContext } from "react"
import Footer from "../footer/footer"

function ChildrenWrapper({ children }) {
  const { data, setData } = useContext(ToggleContext)
  return (
    <div className={` ${data.sidebarCollapse ? "lg:w-[calc(100%-80px)]" : "lg:w-[calc(100%-230px)]"} transition-all w-full`}>
      {children}
      <Footer />
    </div>
  )
}

export default ChildrenWrapper