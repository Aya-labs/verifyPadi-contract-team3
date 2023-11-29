
import video from '../../images/video.png';

const Mid = () => {




    return (


        <div className="w-auto h-screen " >
            <div className="flex justify-evenly w-50 mb-20 ">
                <div className="flex-col bg-white p-5 mt-16 rounded-3xl pr-16 ml-20">

                    <h1 className="text-[#2B2D5F] text-[64px] font-AoboshiOne">26</h1>
                    <p className="text-[#80819F] font-Prompt text-[16px]"> Total request received</p>
                </div>
                <div className="flex-col bg-white p-5 mt-16 rounded-3xl pr-20">

                    <h1 className="text-[#2B2D5F] text-[64px] font-AoboshiOne">14</h1>
                    <p className="text-[#80819F] font-Prompt text-[16px]"> Revoked Access </p>
                </div>
                <div className="flex-col bg-white p-5 mt-16 rounded-3xl pr-20">

                    <h1 className="text-[#2B2D5F] text-[64px] font-AoboshiOne">11</h1>
                    <p className="text-[#80819F] font-Prompt text-[16px]"> Approved Access</p>
                </div>
                <div className="flex-col bg-white pt-3 w-[8vw]  mt-16 -pr-5  pl-5 rounded-l-lg overflow-hidden">

                    <h1 className="text-[#2B2D5F] text-[64px] font-AoboshiOne inline ">02</h1>
                    <span className="text-[#80819F] font-Prompt text-[16px] inline"> Total packe</span>
                </div>




            </div>

            <div className="flex  justify-around">
                <div >

                    <h1 className="font-AoboshiOne text-[#2B2D5F] text-[32px]">Get Started</h1>
                    <div className='mt-10 pt-5 p-5 bg-white rounded-3xl'>
                        <img src={video} alt="video image" />

                        <p className='font-Prompt text-[15px] text-[#2B2D5F] pt-5'>Hello there 👋, am going to show you how to get the most out<br /> of VerifyPadi</p>
                    </div>

                </div>
                <div>

                    <h1 className="text-[#2B2D5F] font-AoboshiOne text-[32px]">Activities</h1>
                    <div >

                    </div>

                </div>

            </div>

        </div >
    )
}

export default Mid