import password from '../../images/Computer security with login and password padlock.png'


const Outlet = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between text-[#2B2D5F] mt-10">
                <h1 className="text-[32px] font-AoboshiOne ml-10">Dashboard</h1>
                <div className="bg-white p-2 pr-10 font-Prompt mr-10">
                    <h1 className="text-[#2B2D5F] text-[14.52px]">VPT 683.200</h1>
                    <p className=" text-[#AAABBF] text-[13px]">$34.00</p>
                </div>
            </div>
            <div className="bg-gradient-to-bl from-[#2EB9FF] to-[#4A6EFf] h-[30vh] w-90 rounded-3xl mr-14 ml-14 overflow-hidden flex justify-between p-5 mt-10 ">
                <div className="text-[white] animate-moveinbottom">
                    <h1 className="font-Prompt text-[24px] ">
                        Welcome <span className='font-light'>Gracious</span> 👋
                    </h1>
                    <p>You are in control of your identity</p>

                    <p className="bg-white rounded-2xl w-[15vw] font-extrabold justify-center flex p-2  text-[#2B2D5F] font-Prompt text-[15px] mt-10">Individual Plan:Free</p>

                </div>
                <div className="animate-moveinright">
                    <img src={password} alt=" password image" />
                </div>
            </div>
        </div>


    )
}
export default Outlet