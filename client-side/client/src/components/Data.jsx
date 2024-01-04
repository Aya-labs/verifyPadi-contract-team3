import Arrow from '../../images/arrow.png'
import Leftarrow from '../../images/leftarrow.png'
import Rightarrow from '../../images/rightarrow.png'
import bet9ja from '../../images/bet.png'
import sendchamp from '../../images/sendchamp.png'
import Ekondo from '../../images/Ekondo.png'
import Arik from '../../images/Arik.png'
import Aella from '../../images/Aella.png'



const Data = () => {
    return (
        <div className="ml-20">
            <div className="w-[60vw] mt-20">
                <h1 className="font-AoboshiOne text-[#2B2D5F] text-[32px]">Data Sharing</h1>
                <p className="font-Prompt text-[#80819F] text-[16px] mt-5">Here are the platform or entity you have previously given access to your data information. You can revoke access to any that you no longer wish to share access.</p>

            </div>
            <div className="mt-10 flex justify-between">
                <p className="text-[#3b3b50] text-[20px] font-Prompt ">05 total approved access</p>
                <span className="text-[#7f809f] font-Prompt text-[16px] w-40 flex border-2 border-[#BEEAFF] mr-20">Filter by date   <img src={Arrow} className='w-3 h-3 mt-1 ml-5' alt="" /> </span>

            </div>
            <div className='h-[100vh] w-[69vw] bg-white mt-10 rounded-3xl border-2 border-[#BEEAFF] item-center  flex-col flex'>
                <div className=' w-full ' >
                    <div className="flex space-x-24 justify-around font-Prompt  text-[16px] text-[#2B2D5F] mt-5 mr-5 p-4 items-center">
                        <p className='text-[#78B348]'>Active</p>
                        <img src={sendchamp} alt="" />
                        <p>Sendchamp</p>
                        <p>Nov 12,2023.</p>
                        <p className='border text-[#4A6EFF] font-semibold border-[#4A6EFF] hover:text-white hover:bg-[#4A6EFF] cursor-pointer p-2 pl-4 pr-4 rounded-2xl text-center'>View</p>
                        <p className="border text-[#4A6EFF] font-semibold border-[#4A6EFF] hover:text-white hover:bg-[#4A6EFF] cursor-pointer p-2 rounded-2xl w-full text-center ">Revoke Access</p>
                    </div>
                    <div className="flex space-x-20 justify-around font-Prompt  text-[16px] text-[#2B2D5F] mt-5 mr-5 p-4 items-center">
                        <p className='text-[#78B348]'>Active</p>
                        <img src={Ekondo} alt="" />
                        <p>Ekondo Micro Bank</p>
                        <p className='w-full'>Nov 12,2023.</p>
                        <p className='border hover:text-white hover:bg-[#4A6EFF] cursor-pointer p-2 pl-4 pr-4 rounded-2xl  text-[#4A6EFF] font-semibold border-[#4A6EFF] text-center'>View</p>
                        <p className="border text-[#4A6EFF] font-semibold border-[#4A6EFF] hover:text-white hover:bg-[#4A6EFF] cursor-pointer p-2 rounded-2xl w-full text-center ">Revoke Access</p>
                    </div>
                    <div className="flex space-x-20 justify-around font-Prompt  text-[16px] text-[#2B2D5F] mt-5 mr-5 p-4 items-center">
                        <p className='text-[#E64852]'>Inactive</p>
                        <img src={Arik} alt="" />
                        <p> Arik Air</p>
                        <p className='w-full'>Nov 07,2023.</p>
                        <p className='border hover:text-white hover:bg-[#4A6EFF] cursor-pointer p-2 pl-4 pr-4 rounded-2xl  text-[#4A6EFF] font-semibold border-[#4A6EFF] items-center'>View</p>
                        <p className="border text-[#4A6EFF] font-semibold border-[#4A6EFF] hover:text-white hover:bg-[#4A6EFF] cursor-pointer p-2 text-center rounded-2xl w-full ">Delete</p>
                    </div>
                    <div className="flex space-x-20 justify-around font-Prompt  text-[16px] text-[#2B2D5F] mt-5 mr-5 p-4 items-center">
                        <p className='text-[#78B348]'>Active</p>
                        <img src={Aella} alt="" />
                        <p> Aella Credit</p>
                        <p className='w-full'>Nov 07,2023.</p>
                        <p className='border hover:text-white hover:bg-[#4A6EFF] cursor-pointer p-2 pl-4 pr-4 rounded-2xl  text-[#4A6EFF] font-semibold border-[#4A6EFF] items-center'>View</p>
                        <p className="border text-[#4A6EFF] font-semibold border-[#4A6EFF] hover:text-white hover:bg-[#4A6EFF] cursor-pointer p-2 text-center rounded-2xl w-full ">Delete</p>
                    </div>
                    <div className="flex space-x-20 justify-around font-Prompt  text-[16px] text-[#2B2D5F] mt-5 mr-5 p-4 items-center">
                        <p className='text-[#78B348]'>Inactive</p>
                        <img src={bet9ja} alt="" />
                        <p> bet9ja</p>
                        <p className='w-full'>Nov 07,2023.</p>
                        <p className='border hover:text-white hover:bg-[#4A6EFF] cursor-pointer p-2 pl-4 pr-4 rounded-2xl  text-[#4A6EFF] font-semibold border-[#4A6EFF] items-center'>View</p>
                        <p className="border text-[#4A6EFF] font-semibold border-[#4A6EFF] hover:text-white hover:bg-[#4A6EFF] cursor-pointer p-2 text-center rounded-2xl w-full ">Delete</p>
                    </div>
                </div>
            </div>
            <div className='flex  justify-center items-center mt-80 '>
                <p className='flex w-20 justify-between font-Prompt text-[16x] text-[#7f809f] mr-5 '><img className='w-3 h-4 mt-1 mr-2' src={Leftarrow} alt="left icon " />Previous</p>
                <p className='text-[#4A6EFF] font-Prompt mr-2 border-2 border-[#4A6EFF] text-center p-1'>1</p>
                <p className='text-[#80819F] font-Prompt mr-5'>2</p>
                <p className='flex justify-between font-Prompt text-[16px] text-[#80819F] '>Next <img className='w-3 h-4 mt-1 ml-2' src={Rightarrow} alt="right icon " /></p>

            </div>

        </div>
    )
}

export default Data