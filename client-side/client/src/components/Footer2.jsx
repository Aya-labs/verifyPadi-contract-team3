import mail from '../../images/mail.png';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';

const Footer2 = () => {
    return (
        <footer className='h-40 bg-[#E1F6FF] w-full flex justify-around text-[#80819F]'>
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

    )
}
export default Footer2