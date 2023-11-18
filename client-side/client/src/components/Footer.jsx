

import logo1 from '../../images/verifipadi logo trans 1.png'
import mail from '../../images/mail.png'
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'
import twitter from '../../images/twitter.png'

const Footer = () => {
    return (
        <div className="flex justify-around h-[50vh]  justify-center bg-gradient-to-tr from-[#01033F] to-[#2EB9FF]  pt-10 ">
            <div className=''>
                <img src={logo1} alt="" className='w-50' />

                <p className='pt-10 text-white text=[20px]'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Repellat et consequatur expedita, dicta. <br /> provident ipsa hic nam omnis .</p>
            </div>
            <div className='flex justify-around w-[50vh] justify-center items-center'>
                <img src={mail} alt="E-mail" className='w-50 hover:bg-white cursor-pointer rounded-full  hover:-translate-y-2 transition ease-in-out duration-300  ' />
                <img src={instagram} alt="instagram" className='w-50 hover:bg-white cursor-pointer rounded-full  hover:-translate-y-2 transition ease-in-out duration-300 ' />
                <img src={linkedin} alt="linkedin" className='w-50 hover:bg-white cursor-pointer rounded-full  hover:-translate-y-2 transition ease-in-out duration-300 ' />
                <img src={twitter} alt="twitter" className='w-50 hover:bg-white cursor-pointer rounded-full  hover:-translate-y-2 transition ease-in-out duration-300 ' />
            </div>
        </div>
    )
}

export default Footer;