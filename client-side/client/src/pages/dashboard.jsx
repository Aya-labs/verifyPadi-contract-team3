import { Header, Down, Outlet, Sidebar, Mid, Footer2 } from '../components';

const Dashboard = () => {
    return (
        <div>
            <div className='min-h-screen h-98 flex w-full flex-row  bg-[#ECF9FF] '>
                <Sidebar />
                <div className='w-[90vw]'>
                    <Header />

                    <Outlet />
                    <Mid />
                    <Down />
                </div>

            </div >
            <Footer2 />
        </div>
    )
}
export default Dashboard