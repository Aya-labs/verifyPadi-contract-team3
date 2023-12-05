

const Forms = () => {
    return (
        <div >
            <div className="flex justify-around mt-20 ">
                <form className="ml-10" action="">

                    <label className="text-[#01033F] font-Prompt " htmlFor="">First name</label>
                    <p className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt">Gracious</p>
                </form>
                <form action="">

                    <label className="text-[#01033F] font-Prompt" htmlFor="">Surname</label>
                    <p className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt">O'neil</p>
                </form>
                <form action="">

                    <label className="text-[#01033F] font-Prompt" htmlFor="">Othername</label>
                    <p className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2 rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt">David</p>
                </form>
            </div>
            <div className="flex justify-evenly mt-20 ">
                <form className="-ml-36" action="">

                    <label className="text-[#01033F] font-Prompt" htmlFor="">Email</label>
                    <p className="text-[#AAABBF] bg-[white] p-2 w-72 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt">Gracious@mymail.com</p>
                </form>
                <form action="">

                    <label className="text-[#01033F] font-Prompt" htmlFor="">Mobile number</label>
                    <p className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2 rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt">+234 | 8043555421</p>
                </form>
            </div>
            <div className=" mt-20">
                <form className="ml-24" action="">

                    <label className="text-[#01033F] font-Prompt" htmlFor="">Current address</label>
                    <p className="text-[#AAABBF] bg-[white] p-2 w-[65vw] mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt">Dolore exerci illum facilisis eu sed aliquip euismod commodo esse nulla elit,</p>
                </form>
            </div>
            <div className="flex justify-evenly mt-20 ">
                <form className="-ml-36" action="">

                    <label className="text-[#01033F] font-Prompt" htmlFor="">Country</label>
                    <p className="text-[#AAABBF] bg-[white] p-2 w-72 mt-2  rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt">Nigeria</p>
                </form>
                <form action="">

                    <label className="text-[#01033F] font-Prompt" htmlFor="">   State</label>
                    <p className="text-[#AAABBF] bg-[white] p-2 w-64 mt-2 rounded-md border-2 border-[#BEEAFF] text-[16px] font-Prompt">Lagos</p>
                </form>
            </div>

            <div className="mt-20 flex-col ml-20 ">
                <div className="bg-white w-[70vw] flex justify-between rounded-3xl p-5 border-2 border-[#BEEAFF]">
                    <h1 className="text-[#80819F] text-[32px] font-AoboshiOne">User identifiers</h1>
                    <p className="text-[14px] bg-[rgba(74,110,225,0.10)] font-Prompt text-[white] pl-10 h-9 pt-2 pr-10 text-[14px] rounded-md hover:bg-[#4A6DFF] hover:-translate-y-2  transition ease-in-out">Submit your identifiers</p>
                </div>
                <div className="bg-white w-[70vw] flex justify-between rounded-3xl p-5 border-2 border-[#BEEAFF] mt-10">
                    <h1 className="text-[#80819F] text-[32px] font-AoboshiOne">User Attestations</h1>
                    <p className="text-[14px] bg-[rgba(74,110,225,0.10)] font-Prompt text-[white] pl-10 h-9 pt-2 pr-10 text-[14px] rounded-md hover:bg-[#4A6DFF] hover:-translate-y-2  transition ease-in-out">Submit verifiable credentials</p>
                </div>

            </div>
        </div>
    )
}
export default Forms