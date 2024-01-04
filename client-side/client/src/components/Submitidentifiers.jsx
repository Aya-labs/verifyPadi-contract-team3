import X from '../../images/Group 207.png'
import Man from '../../images/Man.png'
import Camera from '../../images/camera.png'
import EditSuccessful from './EditSuccessful'
import add from '../../images/adding.png'
import React, { useState } from "react"

function Submitidentifiers({ visible, onClose }) {
    // const handleOnClose = () => {
    //    onClose()
    // }
    const [showMymodal, setShowMyModal] = useState(false)

    const handleOnClose = () => setShowMyModal(false)


    if (!visible) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center h-auto overflow-auto '>
            <div className='bg-[#ECF9FF] h-auto  w-2/4 mt-60 '>
                <div className='mt-5 -right-10 flex space-x-48 items-center'>
                    <img className='bg-[#D5F1FF] rounded-full w-4 h-5 ml-2 items-center' onClick={onClose} src={X} alt="" />
                    <h1 className='text-[20px] text-[#2B2D5F] font-Prompt'>Submit your identifiers</h1>
                </div>


                <p className='text-center text-[#FF8B8B] font-Prompt mt-5 text-[14px] font-semibold'>Proceed to verifying your identifier, kindly note that this data will be<br /> stored on a decentralized storage system and can not be altered/ <br />changed when it has successful been recorded on the blockchain.</p>
                <div className='bg-white h-40 w-60 flex ml-56 mt-10 items-center justify-center border-dashed border border-[#56577F]  '>
                    <img className='w-10 bg-[#D5F1FF] p-1 rounded-full' src={add} alt="" />

                </div>
                <p className='font-Prompt text-center text=[15px] text-[#01033F] mt-5'>Take a picture of yourself</p>


                <div className='flex mt-10'>
                    <form className="ml-10 flex-col flex" action="">

                        <label className="text-[#01033F] font-Prompt " htmlFor="">Date of birth</label>
                        <input onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt"></input>
                    </form>
                    <form className="ml-10 flex-col flex" action="">

                        <label className="text-[#01033F] font-Prompt " htmlFor="">Gender</label>
                        <input onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt"></input>
                    </form>

                </div>
                <div className='flex mt-10'>
                    <form className="ml-10 flex-col flex" action="">

                        <label className="text-[#01033F] font-Prompt " htmlFor="">Nationality</label>
                        <input onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt"></input>
                    </form>
                    <form className="ml-10 flex-col flex" action="">

                        <label className="text-[#01033F] font-Prompt " htmlFor="">State of Origin</label>
                        <input onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt"></input>
                    </form>

                </div>
                <div className='flex mt-10 mb-14'>
                    <form className="ml-10 flex-col flex" action="">

                        <label className="text-[#01033F] font-Prompt " htmlFor="">National ID Number</label>
                        <input onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt"></input>
                    </form>
                    <div className="ml-10 flex-col flex " >

                        <p className="text-[#01033F] font-Prompt " htmlFor="">Signature</p>
                        <div onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2 h-20  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt items-center flex justify-center">
                            <img src={add} alt="" />

                        </div>
                        <div className='mt-5 flex space-x-5 -ml-72 mb-5'>
                            <button onClick={() => setShowMyModal(true)} type="submit" className="bg-[#4A6EFF] text-white py-2 px-4 rounded-md w-36">Submit</button>
                            <button onClick={onClose} type="submit" className="border-[#4A6EFF] border text-[#4A6EFF] py-2 px-4 rounded-md  w-36">Cancel</button>
                        </div>
                    </div>

                </div>
            </div>

            <EditSuccessful onClose={handleOnClose} visible={showMymodal} />
        </div>
    )
}

export default Submitidentifiers 