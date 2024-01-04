import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/verifipadi logo trans 3.png';
import logo1 from '../../images/padlock.png';
import { ThirdwebProvider } from "@thirdweb-dev/react";
//import { Web3Button } from "@thirdweb-dev/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react"
import { darkTheme } from "@thirdweb-dev/react"
//import link from '../../images/link.png'


const BusinessLogin = () => {
    const addressy = () => {

        return (
            <ThirdwebProvider>{useAddress}</ThirdwebProvider>

        )

    }


    const customDarkTheme = darkTheme({
        fontFamily: "Prompt, sans-serif",
        colors: {
            modalBg: "#2EB9FF",
            accentText: "black",
            // ... etc
        },
    });

    //navigation to the connct wallet page 
    function forwardClicks() {
        window.location.href = '/connect';
    }

    //navigation back to the landing page

    function backClick() {
        window.location.href = '/';
    }
    return (

        <div className='h-[124vh] w-full flex justify-around '>
            <div className="bg-gradient-to-tr from-[#0F054C] to-[#31CB9E] w-[50vw] ">
                <img src={logo} alt="logo" className=' cursor-pointer pt-10 pl-10  animate-moveinright ' />
                <img src={logo1} alt="logo" className=' cursor-pointer mt-40 ml-32  animate-moveinopacity ' />

            </div>
            <div className="bg-white w-[50vw] h-auto flex-col">
                <div className='float-right flex-row justify-evenly w-20  inline'>
                    <FontAwesomeIcon onClick={backClick} className='mt-[2rem] p-2 rounded-full bg-[#D5F1FF] hover:translate-y-2 transition ease-in-out duration-300   ' icon={faArrowLeft} />
                    <p className=' pl-2 inline -pt[-2] leading-3'>Back</p>
                </div>

                <div className='mt-[14vh]'>
                    <h1 className='text-[#01033F] font-normal text-[30px] font-AoboshiOne justify-center items-center flex'>Let's get started</h1>
                    <p className='text-[#56577F] text-[17px] justify-center items-center flex pb-14'>Signup for a new account</p>
                </div>
                <div className='bg-[#D5F1FF] w-[439px] h-[367.257px] mt-2 items-center flex-col flex ml-32 rounded-3xl'>
                    <p className='pt-2 text-[#56577F] font-Prompt text-[13.665px]' > Already a User?<span className='text-[#4A6EFF]'> Login here</span></p>

                    <input className=' mt-10 mb-10 font-Prompt border-white  ' type="text" placeholder='Business Name' />

                    <input className=' mb-10 font-Prompt' type="text" placeholder='Business Email' />
                    <ThirdwebProvider> <ConnectWallet btnTitle="Select a wallet option " modalSize="compact" theme={customDarkTheme} className="my-custom-class" hideSwitchToPersonalWallet={true} />

                        {addressy}
                    </ThirdwebProvider>


                    <button onClick={forwardClicks} className='bg-[#4A6EFF] mt-16 p-2 rounded-md text-[white] hover:-translate-y-2 transition ease-in-out duration-300'>Proceed</button>
                </div>
                <p className='text-center font-Prompt text-[14px] text-[#01033F] mt-5 '>Connecting your wallet is required for signing into<br /> our platform and into Web3. Select your wallet from the options to get started.</p>
                <p className='text-center font-Prompt text-[14px] text-[#01033F] mt-20'>By connecting your wallet, you agree to our Terms of <br /> Service and our Privacy Policy</p>
            </div>

        </div >

    )



}

export default BusinessLogin