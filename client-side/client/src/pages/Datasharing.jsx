import { Header, SidebarData, Footer2, Data } from '../components';

const Datasharing = () => {
    return (
        <div>
            <div className='min-h-screen h-98 flex w-full flex-row  bg-[#ECF9FF] '>
                <SidebarData />
                <div className='w-[90vw]'>
                    <Header />
                    <Data />


                </div>

            </div >
            <Footer2 />
        </div>
    )
}
export default Datasharing