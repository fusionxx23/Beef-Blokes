import React from 'react'

export default function Footer() {
    return (
        <div className='font-sniglet'>
            <div className='px-2 sm:px-40 flex justify-between'>
                <div>
                    <h1>Your Blake will range from a Boxing Kangaroo to a Barbeque King.</h1>
                    <h1>Whatever your Bloke is, it will embody YOU.</h1>
                </div>
                <div className='hidden sm:block'>
                    <StayBeefy/>
                    <StayBeefy/>
                    <StayBeefy/>
                </div>
            </div>
            <div className='hidden sm:flex justify-end'>
               
                <div className='bg-black text-white px-4 py-2 rounded-tl-md'>
                    <h1>Beefy Blokes, 2022 | All rights reserved.</h1>
                </div>
            </div>
            <div className='flex sm:hidden justify-end mt-8'>
                <div className='bg-black text-white px-4 py-2 rounded-tl-md'>
                    <h1 style={{fontSize:'14px'}}>Beefy Blokes, 2022 | All rights reserved.</h1>
                </div>
            </div>
        </div>
    )
}


function StayBeefy() {
    return (
        <div className="flex">
            <h1 className='mr-2'>STAY BEEFY!</h1>
            <h1>STAY BEEFY!</h1>
        </div>
    )
}