
import icon from '../../images/Locked.png';
import icon1 from '../../images/Gear.png';
import icon2 from '../../images/Support.png';
import icon3 from '../../images/Error.png';



const About = () => {
    return (
        <div className="w-full h-[80vh] bg-gradient-to-tr from-[#145394] to-[#01033f]  -mt-80">
            <div className='flex items-center justify-center text-center text-white text-[40px] pt-10'>

                What We Offer

            </div>

            <div className='flex justify-around items-center pt-10  '>

                <div className='relative'>
                    <img src={icon} alt="logo" className='w-10 cursor-pointer   ' />
                    <h1 className='text-white text-2xl pt-10 '>Enhanced Security & <br /> Data integrity</h1>
                    <p className='text-white pt-5 text-[20px]'>Say hello to our bulletproof <br /> security.Our blockchain<br /> ensures your<br /> data remains uncompromised.Say<br />goodbye to the days of<br /> identity  breaches. </p>
                </div>
                <div className='relative leading-8'>
                    <img src={icon1} alt="logo" className='w-10 cursor-pointer   ' />
                    <h1 className='text-white text-2xl pt-10 '>User-Centric <br /> Identity Ownership</h1>
                    <p className='text-white pt-5 text-[20px]'>Your identity,Your rules With <br /> Verifypadi you decide who <br />  accesses your data.it is time <br /> to take reins of your<br /> personal information.</p>
                </div>
                <div className='relative leading-10'>
                    <img src={icon2} alt="logo" className='w-10 cursor-pointer   ' />
                    <h1 className='text-white text-2xl pt-10 '>Privacy-Preserving <br /> Verification</h1>
                    <p className='text-white pt-5 text-[20px]'> Why expose more than you <br /> need to? Our system allows<br /> for verification without <br /> sharing your sensitive data. </p>
                </div>
                <div className='relative leading-10'>
                    <img src={icon3} alt="logo" className='w-10 cursor-pointer   ' />
                    <h1 className='text-white text-2xl pt-10 '>Fraud Prevention</h1>
                    <p className='text-white pt-5 text-[20px]'> Protect yourself against  <br /> identity theft. Our system <br /> makes it incredibly tough for<br /> fraudsters to get their hands <br /> on your information. </p>

                </div >
            </div >
        </div >
    )
}

export default About;