import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import { BtnBox } from './components/BtnBox';
import { History } from './components/History';
import { Navbar } from './components/Navbar';
import { useContext } from 'react';
import { AppContext } from './components/AppContext';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from 'react-router-dom';
import './components/All.css'


function App() {
  const { DisplayValue } = useContext(AppContext);
  const { ClearDisplayValue } = useContext(AppContext);
  const { ClickInfo } = useContext(AppContext);
  const { SetClickInfo } = useContext(AppContext);

  function BackInfo() {
    SetClickInfo(false)
  }

  return (
    <>
      {/* NavBar */}
      <Navbar />

      <div className='h-[100%] w-full max-w-[480px] flex flex-col justify-end m-auto'>

        {/* Display Calculation */}
        <div className=' relative '>
          <input type="text" disabled className='w-full h-[70px] text-4xl bg-transparent flex text-right px-4' value={DisplayValue} />

          {DisplayValue.length > 0 &&
            <div onClick={ClearDisplayValue} className='absolute top-[-10px] left-2 translate-y-[-50%] h-[55px] w-[55px] bg-[#e8efff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-xl hover:bg-[#582FFF] hover:text-white'>AC</div>
          }
          {typeof DisplayValue === 'number' &&
            <div onClick={ClearDisplayValue} className='absolute top-[-10px] left-2 translate-y-[-50%] h-[55px] w-[55px] bg-[#e8efff] select-none text-slate-600 font-bold border-[1px] border-[#592fff50]  rounded-full flex justify-center items-center text-xl hover:bg-[#582FFF] hover:text-white'>AC</div>
          }
        </div>

        {/* History & BTN  */}
        <div className='w-full h-[380px] pb-[45px] pt-[10px] flex justify-center items-center border-t-[1px] border-[#582FFF] '>
          <Routes>
            <Route path='/' element={<BtnBox />} />
            <Route path='/History' element={<History />} />
          </Routes>
        </div>

        {/* Special BTN */}
        <Footer />

      </div>

      {ClickInfo == true &&
        <div className=' w-[100%] h-[100%] bg-[#F5F6F7] flex absolute z-10 top-[0%] left-0 justify-center items-center'>

          <div id='uinfo' className='w-[300px] h-fit bg-white rounded-lg p-4 relative shadow-lg shadow-[#582FFF]-500/40  '>
            <h2> <span className='font-bold text-[#582FFF]'>Project Name </span>: Calculator</h2>
            <hr className=' my-2' />
            <p> <span className='font-bold text-[#582FFF]'>Info</span> : I made this ( Calculator ) project from scratch using React JS & Tailwind CSS. In this Calculator you can calculate normally and your claculation history will also be stored in it and you can also delete your history if you want. </p>
            <hr className=' my-2' />
            <h1> <span className='font-bold text-[#582FFF]' >Project Created By</span> : Inderjit Singh</h1>
            <hr className=' my-2' />
            <div className='w-full h-fit flex gap-4 p-1'>

              <Link to="https://www.instagram.com/me.inderjit?igsh=dTZhbThtNjk4OGFl" >
                <FaInstagram className='text-[22px] text-[#582FFF] font-bold' />
              </Link>

              <Link to="https://www.linkedin.com/in/inderjit-singh-fullstackwebdeveloper?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer=" >
                <FaLinkedinIn className='text-[22px] text-[#582FFF] font-bold ' />
              </Link>

              <Link to="https://x.com/me_inderjit_?t=J5QYcZ6H8qRDNDadInHwWg&s=09" >
                <FaXTwitter className='text-[22px] text-[#582FFF] font-bold ' />
              </Link>
            </div>

            <div id='bbbtn' onClick={BackInfo} className=' absolute w-[60px] h-[60px] bg-[#582FFF] rounded-full top-[-20px] right-[-20px] flex justify-center items-center'>
              <MdOutlineCancel id='bbblogo' className='text-white text-4xl' />
            </div>
          </div>

        </div>
      }

    </>
  )
}

export default App;
