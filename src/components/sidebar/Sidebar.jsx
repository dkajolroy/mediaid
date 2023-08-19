'use client'
import { ToggleContext } from '@/provider/contextProvider';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import Filter from './Filter/Filter';
import Categories from "./categories";

const Sidebar = () => {

  const path = usePathname()
  const { data, setData } = useContext(ToggleContext)

  return (
    <div className={`${data.sidebarCollapse ? "w-[80px]" : "w-[230px]"} min-h-screen transition-all  shadow-md relative overflow-hidden hidden lg:block`}>
      <div
        className='fixed xl:p-3 '
      // className={`shadow-lg first: ${"sidebarOpen" ? "lg:w-[180px] xl:w-[240px]" : "lg:w-[80px] xl:w-[100px]"
      //   } h-[90vh] fixed border border-t-0 ${'' == '/shop' || 'lg:p-1 xl:p-3'}`}
      >
        {path == '/shop' && <Filter />}
        {path == '/shop' || <Categories />}
      </div>
    </div>
  );
};

export default Sidebar;
