import search from '../../images/search.png'
import bell from '../../images/bell.png'
import man from '../../images/Frame 81.png'


const Header = () => {

    return (
        <div className="w-auto bg-[#BEEAFF] h-20">

            <div className="flex justify-around">
                <div className=' w-auto mt-5 rounded-3xl bg-[#FFFFFF] flex'>
                    <img className='w-[20px] h-[30px] pt-3' src={search} alt="" />
                    <input placeholder='Search' type="search" name='search' id='search' className=' border-2 border-transparent w-60 ' />

                </div>
                <div className='flex w-60 mt-5 ml-20  '>
                    <p className='bg-[#4A6EFF] text-white rounded-md p-2 mr-5'>0x57b01...3400</p>
                    <img src={bell} className='w-[20px] h-[25px]' alt="bell icon" />
                </div>

                <div className='flex w-60 mt-5'>
                    <img src={man} alt="user image" className='w-[40px] h-[40px]' />
                    <figcaption className='text-[#01033F] font-Prompt text-[15.947px] pl-2'> Gracious O'neil David
                        <p className='text-[#AAABBF] text-[12px]'>vp23x6x0143b0</p>
                    </figcaption>

                </div>
            </div>

        </div>)
}
export default Header