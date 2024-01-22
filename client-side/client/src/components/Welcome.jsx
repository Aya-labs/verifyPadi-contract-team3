import logo from '../../images/phonebg.png';



const Welcome = () => {

    function handleClick() {
        window.location.href = '/Login';
    }


    return (
        <div className="bg-gradient-to-tr from-[#145394] to-[#01033f] h-[80vh] w-90 mt-10 flex-col items-align mr-14 ml-14 rounded-md relative overflow-hidden  ">
            <div className="flex flex-col items-center w-full h-auto pt-10 ">

                <h1 className="font-medium text-white text-[40px] pb-5 animate-moveinright ">
                    Your secure identity Verification solution
                </h1>


                <p className="font-sm text-white text-[20px] pb-4 animate-moveinleft">
                    Unlock the Future of Identity Management with  <span className="cursor-pointer text-[white] animate-moveinopacity "> Verifypadi</span>
                </p>



            </div>
            <div className="flex items-center flex-row  justify-center pt-2  rounded-full">

                <button onClick={handleClick} className="text-white mr-20 font-md text-[20px] hover:bg-[#4A6DFf] rounded-md animate-moveinbottom p-2 ">Get started</button>
                <button className="text-white  font-md text-[20px] hover:bg-[#4A6DFF] rounded-md animate-moveinbottom p-2"> View demo</button>


            </div>
            <div className='justify-center items-center flex animate-moveinbottom pt-10 pl-20' >
                <img src={logo} alt="logo" className='w-[29vw] cursor-pointer   ' />

            </div>




        </div>




    )
}

export default Welcome;