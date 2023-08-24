'use client'
import { usePathname } from 'next/navigation';
import Filter from './Filter/Filter';
import Categories from "./categories";

const Sidebar = () => {

  const path = usePathname()

  return (
    <> <div className='xl:p-3 '>
      {path == '/shop' && <Filter />}
      {path == '/shop' || <Categories />}
    </div>
    </>
  );
};

export default Sidebar;
