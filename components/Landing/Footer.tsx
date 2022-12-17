import React from 'react'

export default function Footer() {
    return (
        <footer className='font-sniglet'>
            <div className='px-2 sm:px-10 md:px-14 lg:px-40 flex justify-between'>
                <div>
                    <h1>Your Blake will range from a Boxing Kangaroo to a Barbeque King.</h1>
                    <h1>Whatever your Bloke is, it will embody YOU.</h1>
                </div>
                <div className='hidden md:block'>
                    <StayBeefy/>
                    <StayBeefy/>
                    <StayBeefy/>
                </div>
            </div>
            {/* Mobile */}
            <div className='hidden md:flex justify-end'>
               
                <div className='bg-black text-white px-4 py-2 rounded-tl-md'>
                    <h1>Beefy Blokes, 2022 | All rights reserved.</h1>
                </div>
            </div>
            <div className='flex md:hidden justify-end mt-8'>
                <div className='bg-black text-white px-4 py-2 rounded-tl-md'>
                    <h1 style={{fontSize:'14px'}}>Beefy Blokes, 2022 | All rights reserved.</h1>
                </div>
            </div>
        </footer>
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