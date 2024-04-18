import { FaEquals } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { FaBackspace } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import './All.css';


function Footer() {

    const { EqualClick } = useContext(AppContext);
    const { ClickBack } = useContext(AppContext);
    const { SetHistoryActive } = useContext(AppContext);
    const { HistoryActive } = useContext(AppContext);
    const { removeData } = useContext(AppContext);


    const GoFor = useNavigate();

    function ClickHistory() {
        SetHistoryActive(true);
        GoFor('/History');
    }

    function UserClickBack(){
        SetHistoryActive(false);
        GoFor('/');
    }


    return (

        <>
            <div className="w-full h-[85px] select-none rounded-tr-[18px] rounded-tl-[18px]  flex justify-between items-center  bg-white relative pl-[20px] pr-[20px] ">

                {/* History BTN */}
                {HistoryActive == false ?
                    (
                        <div id="h-btn-box" onClick={ClickHistory } className="flex h-fit w-fit rounded-full  py-3 px-4 border-[1px] border-[#582FFF] justify-center items-center gap-3 hover:bg-white hover:drop-shadow-md ">
                            <MdHistory id="MDBTN" className="text-[20px] text-[#582FFF]" />
                            <p id="history-btn" className="">History</p>
                        </div>
                    ) :
                    (
                        <div className="hidden h-fit w-fit rounded-full bg-[#f9fafa] py-3 px-4 border-[1px] border-[#582FFF] justify-center items-center gap-3 hover:drop-shadow-md hover:bg-white ">
                            <MdHistory className="text-[20px] text-[#582FFF]" />
                            <p className="">History</p>
                        </div>
                    )

                }



                {/* Equal BTN */}
                {HistoryActive == false ?
                    (
                        <div onClick={EqualClick} className="w-[90px] select-none h-[90px] absolute top-[-55%] left-[50%] translate-x-[-50%]  border-[10px] border-white bg-[#582FFF] rounded-full flex items-center text-center justify-center hover:bg-[#500FFF]">
                            <FaEquals className="text-2xl text-white " />
                        </div>
                    ) :
                    (
                        <div onClick={removeData}  className="w-[90px] select-none h-[90px] absolute top-[-55%] left-[50%] translate-x-[-50%]  border-[10px] border-white bg-[#582FFF] rounded-full flex items-center text-center justify-center hover:bg-[#500FFF]">
                            <MdDelete className="text-2xl text-white " />
                        </div>
                    )

                }



                {/* Back BTN */}
                {HistoryActive == false ?
                    (
                        <div id="bb-box" onClick={ClickBack} className="  flex select-none h-fit w-fit rounded-full  bg-[#f9fafa] py-3 px-4 border-[1px] border-[#582FFF] justify-center items-center gap-3 hover:drop-shadow-md   ">
                            <FaBackspace className="text-[20px] text-[#582FFF] " />
                            <p id="tt" className="">Back</p>
                        </div>
                    ) :
                    (
                        <div id="bb-box" onClick={UserClickBack} className=" flex select-none h-fit w-fit rounded-full  bg-[#f9fafa] py-3 px-4 border-[1px] border-[#582FFF] justify-center items-center gap-3 hover:drop-shadow-md hover:bg-white  hover:border-[2px] ">
                            <FaBackspace className="text-[20px] text-[#582FFF]" />
                            <p id="tt" className="">Close</p>
                        </div>
                    )

                }

            </div>
        </>
    );
}

export default Footer;