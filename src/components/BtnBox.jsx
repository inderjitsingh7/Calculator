import { useContext } from "react"
import { AppContext } from "./AppContext"
import './All.css';


export const BtnBox = () => {

  const {BTNClick} = useContext(AppContext);

  return (
    <div id="b-t-n-BOX" className=' w-full h-full flex py-3 px-3 flex-col gap-2 items-center'>

      <div className='h-[70px] w-full flex items-center justify-center item-center gap-2'>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#e8efff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>7</div>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#e8efff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>8</div>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#e8efff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>9</div>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#d1dfff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>/</div>
      </div>

      <div className='h-[70px] w-full  flex items-center justify-center gap-2'>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#e8efff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>4</div>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#e8efff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>5</div>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#e8efff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>6</div>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#d1dfff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>*</div>
      </div>

      <div className='h-[70px] w-full  flex items-center justify-center item-center gap-2'>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#e8efff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50] rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>1</div>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#e8efff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>2</div>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#e8efff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>3</div>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#d1dfff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>-</div>
      </div>

      <div className='h-[70px] w-full  flex items-center justify-center item-center gap-2'>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#d1dfff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>%</div>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#e8efff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>0</div>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#d1dfff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>.</div>
        <div id='b-t-n' onClick={BTNClick} className='h-full w-[70px] bg-[#d1dfff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-3xl hover:bg-[#582FFF] hover:text-white'>+</div>
      </div>

    </div>
  )
}