import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import PIC from "../images/PIC.png";
import ICON from "../images/icon.png";
import Image from 'next/image';

export default function MenuBar() {
  return (
    <div className='w-full flex justify-center gap-2 py-2 px-4 border-b-[1px] border-gray-300'>
       <div type="text" className='w-[60%] rounded-full border-gray-400 border-[1px] flex justify-between items-center p-1'>
       <CiSearch />
       <input type="text" className='w-[80%]' placeholder='Search' />
       <FaBell />
       </div>

       <div type="text" className='w-[10%] rounded-2xl flex justify-between items-center p-1'>
       <Image src={PIC} alt="profile" width={30} height={30} className='rounded-full' />
       <span>Amir</span>
       <Image src={ICON} alt="icon" width={30} height={30} />
       </div>

    </div>
  )
}
