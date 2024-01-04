
import check from '../../images/check.png';
//import check2 from '../../images/check@2x.png';
import wrong from '../../images/wrong.png'

const Down = () => {
    return (

        <div className=' pt-40 bg-[#ECF9FF]  h-screen'>

            <div className="flex justify-around ">
                <h1 className='text-[#2B2D5F] text-[32px] font-AoboshiOne ml-20'>History</h1>
                <button className="font-Prompt text-[12.864px] text-[white] pr-16 pl-16 bg-[#4A6EFF] rounded-2xl ml-[40rem]  hover:-translate-y-2  transition ease-in-out duration-300">See more</button>
            </div>
            <div className="h-screen bg-[white] w-[70vw] rounded-3xl mt-10 ml-20 border-[#BEEAFF] border-2">
                <div className="flex justify-evenly w-98 font-Prompt text-[16px] text-[#2B2D5F] pt-5 font-bold ">
                    <h1 className='-ml-20'>Id</h1>
                    <h1 className='-ml-10'>Type</h1>
                    <h1 className='-ml-5'>Date</h1>
                    <h1>Data</h1>
                    <h1 className='ml-[17vw]'>Status</h1>


                </div>
                <div className="flex justify-around font-Prompt pt-5 text-[16px] text-[#2B2D5F] border-2 border-[#BEEAFF] mt-5 rounded-md ml-5 mr-5 p-3">
                    <p>0023</p>
                    <p>Created Packet</p>
                    <p>Nov 12, 2023</p>
                    <p>vp:dids:5H8ykdJqjf7Z4H7Hox3HNFv71E2hkKZM...</p>
                    <img className='bg-green-500 p-1 rounded-full' src={check} alt="check.png" />
                    <p className="border-2 pr-2 pl-2 border-[#BEEAFF] rounded-md ">view</p>
                </div>
                <div className="flex justify-around font-Prompt pt-5 text-[16px] text-[#2B2D5F] border-2 border-[#BEEAFF] mt-5 rounded-md ml-5 mr-5 p-3">
                    <p>0543</p>
                    <p>Revoked Packet</p>
                    <p>Nov 10, 2023</p>
                    <p>vp:dids:5H8ykdJqjf7Z4H7Hox3HNFv71E2hkKZM...</p>
                    <img className='bg-red-500 p-1 rounded-full' src={wrong} alt="check.png" />
                    <p className="border-2 pr-2 pl-2 border-[#BEEAFF] rounded-md ">view</p>
                </div>
                <div className="flex justify-around font-Prompt pt-5 text-[16px] text-[#2B2D5F] border-2 border-[#BEEAFF] mt-5 rounded-md ml-5 mr-5 p-3">
                    <p>0243</p>
                    <p>Created Packet</p>
                    <p>Nov 08, 2023</p>
                    <p>vp:dids:5H8ykdJqjf7Z4H7Hox3HNFv71E2hkKZM...</p>
                    <img className='bg-green-500 p-1 rounded-full' src={check} alt="check.png" />
                    <p className="border-2 pr-2 pl-2 border-[#BEEAFF] rounded-md ">view</p>
                </div>
                <div className="flex justify-around font-Prompt pt-5 text-[16px] text-[#2B2D5F] border-2 border-[#BEEAFF] mt-5 rounded-md ml-5 mr-5 p-3">
                    <p>0063</p>
                    <p>Received VPT</p>
                    <p>Nov 05, 2023</p>
                    <p>vp:dids:5H8ykdJqjf7Z4H7Hox3HNFv71E2hkKZM...</p>
                    <img className='bg-green-500 p-1 rounded-full' src={check} alt="check.png" />
                    <p className="border-2 pr-2 pl-2 border-[#BEEAFF] rounded-md ">view</p>
                </div>
                <div className="flex justify-around font-Prompt pt-5 text-[16px] text-[#2B2D5F] border-2 border-[#BEEAFF] mt-5 rounded-md ml-5 mr-5 p-3">
                    <p>0163</p>
                    <p>Received VPT</p>
                    <p>Nov 02, 2023</p>
                    <p>vp:dids:5H8ykdJqjf7Z4H7Hox3HNFv71E2hkKZM...</p>
                    <img className='bg-red-500 p-1 rounded-full' src={wrong} alt="check.png" />
                    <p className="border-2 pr-2 pl-2 border-[#BEEAFF] rounded-md ">view</p>
                </div>
                <div className="flex justify-around font-Prompt pt-5 text-[16px] text-[#2B2D5F] border-2 border-[#BEEAFF] mt-5 rounded-md ml-5 mr-5 p-3">
                    <p>0233</p>
                    <p>Created Packet</p>
                    <p>Nov 01, 2023</p>
                    <p>vp:dids:5H8ykdJqjf7Z4H7Hox3HNFv71E2hkKZM...</p>
                    <img className='bg-red-500 p-1 rounded-full' src={wrong} alt="check.png" />
                    <p className="border-2 pr-2 pl-2 border-[#BEEAFF] rounded-md ">view</p>
                </div>
            </div>
        </div >



    )
}
export default Down