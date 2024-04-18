import React, { useContext } from 'react'
import { MdCancel } from "react-icons/md";
import { AppContext } from './AppContext';
import { useNavigate } from "react-router-dom";

export const History = () => {
  const { SetHistoryActive } = useContext(AppContext);
  const { Data } = useContext(AppContext);

  const GoFor = useNavigate();

  function UserCLickX() {
    SetHistoryActive(false)
    GoFor('/')
  }

  return (
    <div className='bg-white w-[90%] h-[90%] flex flex-col px-4 rounded-lg'>

      <div className='w-full h-fit flex justify-between items-center gap-4 p-2 border-b-[1px] border-[#582FFF]' >
        <h2 className='font-bold text-[#582FFF] text-xl'>History</h2>
        <MdCancel onClick={UserCLickX} className='text-[#582FFF] text-3xl' />
      </div>

      <div className=' w-[100%] h-[90%] flex flex-col p-4 overflow-auto ' >
        {Data == [] ?
          (
            <div className='w-full h-full text-[#582FFF] text-xl font-semibold flex justify-center items-center'>Empty History</div>
          ) :
          (
            Data.toReversed().map((val) => {
              return (<div className='w-full h-fit p-2 flex justify-center items-center border-b-[1px] border-[#582FFF]' key={val.index} > <h2>{val}</h2> </div>)
            })
          )
        }
      </div>
    </div>
  )
}
