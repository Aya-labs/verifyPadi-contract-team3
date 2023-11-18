import logo from '../../images/verifipadi logo trans 4 1.png';
import Check from '../../images/check.gif';
import mail from '../../images/mail.png';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';

const Connect = () => {
    return (
        <div>
            <nav className="bg-[#D5F1FF] h-24 w-full flex justify-between items-center ">
                <img src={logo} alt="verifypadi logo" className='w-50 pl-20' />
                <p>hello</p>
            </nav>
            <div className='flex  items-center flex-col h-screen'>
                <img src={Check} alt="check gif" />
                <p className='text-[#78B348] font-Prompt text-[24px] '>Wallet connected successfully</p>
                <button className='mt-20 bg-[#4A6EFF] p-2 rounded-md text-[white] hover:-translate-y-2 transition ease-in-out duration-300'>Proceed to dashboard</button>
            </div>
            <footer className='h-40 bg-[#F3F3F3] w-full flex justify-around text-[#80819F]'>
                <div className='pt-5 '>
                    <p>Questions?Contact us.</p>
                    <p className='pt-10'>FAQ.</p>
                    <p className='pt-5'>Cookies Preferences.</p>
                </div>
                <div className='pt-20 '>
                    <p>Help Center.</p>
                    <p className='pt-5'>Corporate information.</p>

                </div>
                <div className='pt-20 '>
                    <p>Terms of use.</p>


                </div>
                <div className='pt-20'>
                    <p>Privacy.</p>


                </div>
                <div className='pt-10 flex items-center justify-center justify-around '>
                    <img src={mail} alt="E-mail" className='w-10 hover:bg-white cursor-pointer rounded-full  hover:-translate-y-2 transition ease-in-out duration-300  ' />
                    <img src={instagram} alt="instagram" className='w-8 hover:bg-white cursor-pointer rounded-full  hover:-translate-y-2 transition ease-in-out duration-300 ' />
                    <img src={linkedin} alt="linkedin" className='w-8 hover:bg-white cursor-pointer rounded-full  hover:-translate-y-2 transition ease-in-out duration-300 ' />
                    <img src={twitter} alt="twitter" className='w-8 hover:bg-white cursor-pointer rounded-full  hover:-translate-y-2 transition ease-in-out duration-300 ' />


                </div>
            </footer>
        </div>

    )

}
export default Connect