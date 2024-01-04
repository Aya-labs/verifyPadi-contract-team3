import React from 'react'
import check from '../../images/check.gif'

function EditSuccessful({ visible, onClose }) {

    if (!visible) return null
    function forwardClicks() {
        window.location.href = '/Account';
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center  h-[170vh]  overflow-auto '>
            <div className='bg-[white] flex-col flex h-46 p-10  items-center'>
                <img className=' bg-[#ECF9FF]' src={check} alt="" />
                <p className='text-[24px] font-Prompt text-[#2B2D5F]'>Edit Successful</p>
                <button onClick={forwardClicks} className='w-40 bg-[#4A6EFF] rounded-2xl text-center text-[white] font-Prompt text-[14.52px] mt-5 p-2'>Account page</button>
            </div>

        </div>
    )
}

export default EditSuccessful