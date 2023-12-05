import Man from '../../images/Man.png'
import Rectangle from '../../images/rectanglefull.png'
import Barcode from '../../images/barcode.png'

const Middle = () => {
    return (
        < div className="mt-20" >
            <div className="flex justify-around animate-moveinopacity ">
                <h1 className='text-[#2B2D5F] text-[32px] font-AoboshiOne ml-20'>Account </h1>
                <button className="font-Prompt text-[13.864px] text-[white] pr-16 pl-16 bg-[#4A6EFF] rounded-2xl ml-[20rem] hover:cursor-pointer hover:-translate-y-2 transition ease-in-out duration-300">Edit Profile Identifiers</button>
            </div>

            <div className="bg-[white] h-80 rounded-3xl w-[70vw] ml-20 mt-10 flex   animate-moveinright ">
                <img src={Man} alt="user picture" className='rounded-full w-[10vw] h-[22vh] ml-10 mt-10 border-2 border-[#ECF9FF]' />
                <div className='mt-10'>
                    <figcaption className='text-[#01033F] font-Prompt text-[24px] pl-2'> Gracious O'neil David
                        <p className='text-[#AAABBF] text-[15px]'>vp23x6x0143b0</p>
                    </figcaption>
                    <p className='mt-5 font-Prompt text-[#2B2D5F] text-[15px]'>Accumsan diam dolore feugait ea ad volutpat. in luptatum tation<br /> hendrerit lobortis feugiat facilisi. enim</p>

                    <div className='mt-10 bg-[#ECF9FF] p-5 rounded-md'>
                        <p className='text-[#80819F] font-Prompt'>
                            Your identity data 45% complete
                        </p>
                        <span ><img src={Rectangle} alt="percentage full" /></span>

                    </div>
                </div>
                <div className='ml-20 mt-5 bg-[#ECF9FF] p-2 h-60 rounded-md flex-col justify-center items-center'>
                    <img src={Barcode} alt="barcode" />
                    <button className=' text-[#4A6EFF] mt-5 ml-12 border-2 border-[#4A6EFF] rounded-md pl-2 pr-2 font-Prompt'>Share</button>
                </div>

            </div>
        </div >
    )
}
export default Middle