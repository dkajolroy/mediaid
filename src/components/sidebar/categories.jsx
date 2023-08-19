'use client'
import { categories } from '@/constant/data';
import { ToggleContext } from '@/provider/contextProvider';
import Image from 'next/image';
import { useContext } from 'react';

const Categories = () => {
  const { data } = useContext(ToggleContext)
  return (
    <ul className="space-y-2">
      {
        categories.map((item, i) => {
          return (
            <li key={i} className="flex gap-2 items-center cursor-pointer lg:px-2 xl:px-3 py-2 rounded hover:bg-slate-100">
              <Image
                src={item.image}
                alt="categories"
                width={25}
                height={25} />

              <h3 className={`text-sm transition-all origin-left ${data.sidebarCollapse ? "invisible scale-0" : "visible scale-100"}`}>
                {item.name}
              </h3>
            </li>
          )
        })
      }
    </ul>
  );
};

export default Categories;