import { Header, SidebarAccount, Footer2, Middle, Forms } from '../components';

const Account = () => {
    return (
        <div>
            <div className='min-h-screen h-98 flex w-full flex-row  bg-[#ECF9FF] '>
                <SidebarAccount />
                <div className='w-[90vw]'>
                    <Header />
                    <Middle />
                    <Forms />

                </div>

            </div >
            <Footer2 />
        </div>
    )
}
export default Account