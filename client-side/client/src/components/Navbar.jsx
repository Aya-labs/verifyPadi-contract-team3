import React from 'react'
//import Login from '../pages/login';
import logo from '../../images/verifypadi logo.jpg';
//import useNavigate from 'react-router-dom';

const Navbar = () => {

    //const navigate = useNavigate();

//navigation to login page

    function handleClick() {
        window.location.href = '/Login';
    }


    return (
        <nav className="z-100 ">
            <div className=" flex pt-5 w-90 h-20 justify-between items-center justify-center pb-10 border-b-2  px-20  rounded-full text-[#01033f] mr-20 ml-20 mt-2  bg-white " >
                <img src={logo} alt="logo" className='w-32 cursor-pointer animate-moveinopacity' />
                <div>
                    <ul className="flex  justify-between list-none flex-initial items-center text-[#01033f] line-height:2 cursor-pointer">
                        <li className="px-4 hover:bg-[#4A6DFF]  rounded-full hover:border  hover:transition1  hover:transformer  hover:text-white ">Company</li>
                        <li className="px-4 hover:bg-[#4A6DFF] rounded-full  hover:border  hover:transition1  hover:transformer hover:text-white ">Token</li>
                        <li className="px-4 hover:bg-[#4A6DFF] rounded-full hover:border  hovertransition1  hover:transformer hover:text-white ">Services</li>
                        <li className="px-4 hover:bg-[#4A6DFF] rounded-full hover:border  hovertransition1  hover:transformer hover:text-white ">Pricing</li>
                        <button onClick={handleClick} className="px-4 hover:bg-[#4A6DFF] rounded-full hover:border  hovertransition1  hover:transformer hover:text-white ">Login</button>
                    </ul>

                </div>
            </div>




        </nav>



    )
}

export default Navbar;