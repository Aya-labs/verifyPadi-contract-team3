import logo from '../../images/verifipadi logo trans 3.png'
import workflow from '../../images/workflow.png'
import home from '../../images/home.png'
import timer from '../../images/timer.png'
import Account from '../../images/Account.png'
import Dids from '../../images/wallet-cards.png'
import token from '../../images/coins.png'
import share from '../../images/waypoints.png'
import Subscription from '../../images/subscription.png'
import Analysis from '../../images/analysis.png'
import Settings from '../../images/settings.png'
import Logout from '../../images/logout.png'



const Sidebar = () => {

    function forwardClicks() {
        window.location.href = '/Account';
    }

    return (
        <div className='bg-gradient-to-tr from-[#145394] to-[#01033f] w-[20vw] h-[350vh]  flex  items-center flex-col '>

            <div>
                <img className='w-40 mt-5' src={logo} alt="verifypadilogo" />
            </div>
            <div className='text-white mt-20'>
                <ul className='text-[18px] font-Prompt'>
                    <li className='mb-5 flex bg-white text-[#01033f] cursor-pointer rounded-md '><img src={home} className='w-[20px] h-[20px]' alt="home image" /><figcaption className='pl-2'>Home</figcaption> </li>
                    <li onClick={forwardClicks} className=' mb-5 flex  hover:bg-white hover:text-[#01033f] cursor-pointer hover:rounded-md  '><img src={Account} className='w-[20px] h-[20px]' alt="home image" /><figcaption className='pl-2'>Account</figcaption></li>
                    <li className=' mb-5 flex  hover:bg-white hover:text-[#01033f] cursor-pointer hover:rounded-md '><img src={Dids} className='w-[20px] h-[20px]' alt="home image" /><figcaption className='pl-2'>Dids Packet</figcaption></li>
                    <li className=' mb-5 flex  hover:bg-white hover:text-[#01033f] cursor-pointer hover:rounded-md '><img src={timer} className='w-[20px] h-[20px]' alt="home image" /><figcaption className='pl-2'>History</figcaption></li>
                    <li className=' mb-5 flex  hover:bg-white hover:text-[#01033f] cursor-pointer hover:rounded-md '><img src={workflow} className='w-[20px] h-[20px]' alt="home image" /><figcaption className='pl-2'>Request Mgt</figcaption></li>
                    <li className=' mb-5 flex  hover:bg-white hover:text-[#01033f] cursor-pointer hover:rounded-md '><img src={token} className='w-[20px] h-[20px]' alt="home image" /><figcaption className='pl-2'>VPT Token</figcaption></li>
                    <li className=' mb-5 flex  hover:bg-white hover:text-[#01033f] cursor-pointer hover:rounded-md '><img src={share} className='w-[20px] h-[20px]' alt="home image" /><figcaption className='pl-2'>Data Sharing</figcaption></li>
                    <li className=' mb-5 flex  hover:bg-white hover:text-[#01033f] cursor-pointer hover:rounded-md '><img src={Subscription} className='w-[20px] h-[20px]' alt="home image" /><figcaption className='pl-2'>User Plan</figcaption></li>
                    <li className='  flex  hover:bg-white hover:text-[#01033f] cursor-pointer hover:rounded-md '><img src={Analysis} className='w-[20px] h-[20px]' alt="home image" /><figcaption className='pl-2'>Analysis</figcaption></li>
                </ul>
            </div>
            <div className='text-white mt-40'>
                <ul className='text-[18px] font-Prompt'>
                    <li className='mb-5 flex  hover:bg-white hover:text-[#01033f] cursor-pointer hover:rounded-md '><img src={Settings} className='w-[20px] h-[20px]' alt="home image" /><figcaption className='pl-2'>Settings</figcaption> </li>
                    <li className='mb-5 flex  hover:bg-white hover:text-[#01033f] cursor-pointer hover:rounded-md '><img src={Logout} className='w-[20px] h-[20px]' alt="home image" /><figcaption className='pl-2'>Logout</figcaption> </li>
                </ul>
            </div>

        </div>)
}



export default Sidebar