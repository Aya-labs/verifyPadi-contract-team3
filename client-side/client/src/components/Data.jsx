import Arrow from '../../images/arrow.png'
import Circle from '../../images/plus-circle.png'
import Leftarrow from '../../images/leftarrow.png'
import Rightarrow from '../../images/rightarrow.png'


const Data = () => {
    return (
        <div className="ml-20">
            <div className="w-[60vw] mt-20">
                <h1 className="font-AoboshiOne text-[#2B2D5F] text-[32px]">Data Sharing</h1>
                <p className="font-Prompt text-[#80819F] text-[16px] mt-5">Here are the platform or entity you have previously given access to your data information. You can revoke access to any that you no longer wish to share access.</p>

            </div>
            <div className="mt-10 flex justify-between">
                <p className="text-[#3b3b50] text-[20px] font-Prompt ">00 total approved access</p>
                <span className="text-[#7f809f] font-Prompt text-[16px] w-40 flex border-2 border-[#BEEAFF] mr-20">Filter by date   <img src={Arrow} className='w-3 h-3 mt-1 ml-5' alt="" /> </span>

            </div>
            <div className='h-[150vh] w-[70vw] bg-white mt-10 rounded-3xl border-2 border-[#BEEAFF] justify-center items-center flex-col flex'>
                <div className='-mt-60 ' >
                    <img className='ml-32' src={Circle} alt="plus circle" />
                    <p className='text-[#AAABBF] text-[24px] font-AoboshiOne text-center '>A list of platform or entity that has access to <br /> your data will appear here!</p>
                </div>
            </div>
            <div className='flex  justify-center items-center mt-5 '>
                <p className='flex w-20 justify-between font-Prompt text-[16x] text-[#7f809f] mr-5 '><img className='w-3 h-4 mt-1 mr-2' src={Leftarrow} alt="left icon " />Previous</p>
                <p className='text-[#4A6EFF] font-Prompt mr-2 border-2 border-[#4A6EFF] text-center p-1'>1</p>
                <p className='text-[#80819F] font-Prompt mr-5'>2</p>
                <p className='flex justify-between font-Prompt text-[16px] text-[#80819F] '>Next <img className='w-3 h-4 mt-1 ml-2' src={Rightarrow} alt="right icon " /></p>

            </div>

        </div>
    )
}

export default Data