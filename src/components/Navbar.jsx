import React, { useContext } from 'react'
import { LuInfo } from "react-icons/lu";
import { AppContext } from './AppContext';

export const Navbar = () => {
  const { SetClickInfo } = useContext(AppContext);

  function infoClicked(){
    SetClickInfo(true)
  }

  return (
    <div className='w-full max-w-[480px] h-fit absolute top-0 p-4 flex m-auto items-center justify-between border-b-[1px] border-[#582FFF]'>

      {/* Title */}
      <h2 className='font-bold text-2xl text-[#582FFF]'>Calculator</h2>

      {/* Info LOGO */}
      <LuInfo onClick={infoClicked} className='text-[#582FFF] text-3xl' />
      
    </div>
  )
}
