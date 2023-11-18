import logo from '../../images/fingerprint.png';
import logo1 from '../../images/cyber-security-data-protection 1.png';
import logo2 from '../../images/finger verify.png';
import React, { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });

        scrollObserver.observe(ref.current);

        return () => {
            if (ref.current) {
                scrollObserver.unobserve(ref.current);
            }
        };
    }, []);

    const classes = `transition-opacity duration-200  
        ${isVisible ? "opacity-100" : "opacity-0"
        }`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};


const Services = () => {
    return (
        <div className="mt-10 h-screen w-90 rounded-md items-center justify-center flex-col  ">

            <RevealOnScroll>
                <div className="text-center">
                    <h1 className="font-bold text-[20px] text-[#01033f]"> Welcome to Verifypadi</h1>
                    <p className="  text-[#01033f] text-[17px]">We are ushering a new era of identity verification.Say goodbye to the limitations of traditional<br />centralized systems and embrace the future with our decentralized,blockchain powered solution.<br />We put you in control of your identity like never before</p>
                </div>
            </RevealOnScroll>
            <RevealOnScroll>
                <div className="flex flex-row items-center justify-center justify-between mr-20 ml-20 mt-20 p-5 ">


                    <div className="bg-[#4A6DFF] pl-5 pr-21 pt-5 flex justify-around rounded-md pb-2 w-80 hover:-translate-y-2 hover:scale-110 transition ease-in-out duration-300 ">
                        <div className=''>
                            <img src={logo} alt="logo" className='w-16 rounded-md items-center justify-center' />

                        </div>

                        <div>

                            <figcaption className='text-white pl-5 text-[20px] inline top-20 '>
                                Individuals
                            </figcaption>
                            <div className='text-white block pl-5  text-[15px]'>Own control over your <br /> personal data.</div>
                        </div>

                    </div>

                    <div className="bg-[#4A6DFF] pl-5 pr-21 pt-5 flex justify-around rounded-md pb-2 w-80 hover:-translate-y-2 hover:scale-110 transition ease-in-out duration-300">
                        <div className=''>
                            <img src={logo1} alt="logo" className='w-16 rounded-md items-center justify-center' />

                        </div>

                        <div>

                            <figcaption className='text-white pl-5 text-[20px] inline top-20 '>
                                Business/Organization
                            </figcaption>
                            <div className='text-white block pl-5  text-[15px]'>Request identity verification  <br /> to ensure accuracy.</div>
                        </div>

                    </div>

                    <div className="bg-[#4A6DFF] pl-5 pr-21 pt-5 flex justify-evenly rounded-md pb-2 w-80 hover:-translate-y-2 hover:scale-110 transition ease-in-out duration-300">
                        <div className=''>
                            <img src={logo2} alt="logo" className='w-16 rounded-md items-center justify-center' />

                        </div>

                        <div>

                            <figcaption className='text-white pl-5 text-[20px] inline top-20 '>
                                Institution
                            </figcaption>
                            <div className='text-white block pl-5 text-[15px]'>Monitor identity verification  <br /> processes for compliance.</div>
                        </div>

                    </div>


                </div>
            </RevealOnScroll>
        </div>
    )
}

export default Services;