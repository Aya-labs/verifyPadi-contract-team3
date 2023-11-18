import logo from '../../images/3d internet secuirty badge.png';
import logo0 from '../../images/Logo.png';
import logo1 from '../../images/Logoipsum1.png';
import logo2 from '../../images/Logoipsum2.png';
import logo3 from '../../images/Logopsum3.png';

const Contact = () => {
    return (
        <div className="h-[90vh] w-full flex-col justify-center items-center">
            <div className="h-[40vh] w-90 rounded-md ml-14 mr-14 mt-20 flex justify-between bg-[#2EB9FF] justify-center items-center ">
                <div className=" pl-20 flex-col ">

                    <h1 className="font-medium text-[40px] text-[#2B2D5F] ">Ready to Take Control <br /> of Your identity </h1>
                    <p className="pt-2 text-[24px] font-medium text-[#2B2D5F]">Sign up with Verifypadi Today</p>
                    <button className=" text-[20px]  text-[#2B2D5F] hover:bg-[#4A6EFF] pt-2 mt-2 pr-5 pl-5 h-[41px] hover:text-white rounded-md pb-2 ">Get Started</button>
                </div>
                <div><img src={logo} alt="vault image" className='mr-40 w-50 focus:animate-moveinopacity' /></div>
            </div>
            <div className='pt-20 flex-col justify-center items-center w-full '>
                <div className='text-center text-[32px] text-[#01033F] font-medium'>
                    Trusted by leading Organizations
                </div>
                <div className='flex justify-around justify-center items-center pt-10'>
                    <img src={logo0} alt="vault image" className=' w-35 ' />
                    <img src={logo1} alt="vault image" className=' w-35 ' />
                    <img src={logo2} alt="vault image" className=' w-35 ' />
                    <img src={logo3} alt="vault image" className=' w-35 ' />
                </div>

            </div>
        </div>
    )
}

export default Contact;