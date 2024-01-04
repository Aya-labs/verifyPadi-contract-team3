
import X from '../../images/Group 207.png'
import Man from '../../images/Man.png'
import Camera from '../../images/camera.png'
import EditSuccessful from './EditSuccessful'
import React, { useState } from "react"

function Profileidentifier({ visible, onClose }) {
    // const handleOnClose = () => {
    //    onClose()
    // }
    const [showMymodal, setShowMyModal] = useState(false)

    const handleOnClose = () => setShowMyModal(false)


    if (!visible) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center h-auto overflow-auto '>

            <div className='bg-[#ECF9FF] h-auto w-2/4  mt-[60vh]  '>
                <div className='mt-5 -right-10 flex space-x-48 items-center'>
                    <img className='bg-[#D5F1FF] rounded-full w-4 h-5 ml-2 items-center' onClick={onClose} src={X} alt="" />
                    <h1 className='text-[20px] text-[#2B2D5F] font-Prompt'>Edit your profile identifier</h1>
                </div>
                <div className='mt-10 flex justify-center w-full  '>
                    <img className='rounded-full w-40' src={Man} alt="" />
                    <img className='w-10 h-10 flex mt-28 bg-[#ECF9FF] -ml-8 rounded-full p-2 z-100' src={Camera} alt="" />
                </div>
                <div className=' mt-10'>

                    <div className='flex'>
                        <form className="ml-10 flex-col flex" action="">

                            <label className="text-[#01033F] font-Prompt " htmlFor="">First name</label>
                            <input onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt"></input>
                        </form>
                        <form className="ml-10 flex-col flex" action="">

                            <label className="text-[#01033F] font-Prompt " htmlFor="">Surname</label>
                            <input onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt"></input>
                        </form>
                    </div>
                    <form className="ml-10 mt-5 flex-col flex" action="">

                        <label className="text-[#01033F] font-Prompt " htmlFor="">Other Name</label>
                        <input onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt"></input>
                    </form>
                    <form className="ml-10 mt-5 flex-col flex" action="">

                        <label className="text-[#01033F] font-Prompt " htmlFor="">Email</label>
                        <p onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt">Gracious@mymail.com</p>
                    </form>
                    <form className="ml-10 mt-5 flex-col flex" action="">

                        <label className="text-[#01033F] font-Prompt " htmlFor="">Mobile Number</label>
                        <input onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt"></input>
                    </form>
                    <form className="ml-10 mt-5 flex-col flex" action="">

                        <label className="text-[#01033F] font-Prompt " htmlFor="">Current address</label>
                        <input onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-[40vw] mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt"></input>
                    </form>
                    <div className='flex mt-10'>
                        <form className="ml-10 flex-col flex" action="">

                            <label className="text-[#01033F] font-Prompt " htmlFor="">Country</label>
                            <p onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt">Nigeria</p>
                        </form>
                        <form className="ml-10 flex-col flex" action="">

                            <label className="text-[#01033F] font-Prompt " htmlFor="">State</label>
                            <p onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt">Lagos</p>
                        </form>

                    </div>
                    <form className="ml-10 flex-col flex mt-5" action="">

                        <label className="text-[#01033F] font-Prompt " htmlFor="">Bio</label>
                        <input onClick={visible} className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt w-[40vw]"></input>
                    </form>
                    <div className='mt-5 flex space-x-5 ml-10 mb-5'>
                        <button onClick={() => setShowMyModal(true)} type="submit" className="bg-[#4A6EFF] text-white py-2 px-4 rounded-md w-36">Submit</button>
                        <button onClick={onClose} type="submit" className="border-[#4A6EFF] border text-[#4A6EFF] py-2 px-4 rounded-md  w-36">Cancel</button>
                    </div>
                </div>
            </div>
            <EditSuccessful onClose={handleOnClose} visible={showMymodal} />
        </div>
    )
}

export default Profileidentifier 