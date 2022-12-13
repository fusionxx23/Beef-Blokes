import React, { useState } from 'react'

export default function FaqsContent() {
    return (
        <div className='px-56 font-sniglet mt-20 max-h-screen'>
            <div className='flex justify-between' style={{ width: '723px' }}>
                <div className="bg-black text-white font-extrabold py-1 px-3 rounded-xl" style={{ fontSize: '33px' }}>
                    FAQ's
                </div>
                <h2 style={{ fontSize: '33px' }} >your questions</h2>
            </div>
            <h1 style={{ fontSize: '122px' }} className='font-extrabold text-white'>ANSWERED</h1>

            <div className='overflow-auto' style={{}}>
                <FAQ title={'PURPOSE'} />
                <FAQ title={'SUPPLY'} />
                <FAQ title={'STORY'} />
                <FAQ title={'HOW TO BUY?'} />
            </div>
        </div>
    )
}


function FAQ({title}: {title: string}) {
    const [open, setOpen] = useState(false);
    return (
        <div className='border-t border-black py-4'>
            <div className='flex justify-between'>
                <h1 style={{ fontSize: '45px' }} className='font-extrabold'>{title}?</h1>
                {!open && <h1 onClick={() => {setOpen(true)}} style={{ fontSize: '45px' }} className={'cursor-pointer'} >+</h1>}
                {open && <h1 onClick={() => {setOpen(false)}} style={{ fontSize: '45px' }} className={'cursor-pointer'} >x</h1>}
            </div>


            {open && <p style={{ fontSize: '28px' }}>Our purpose is to bring together a community that encourages, motivates and supports holders.
                At Beefy Blokes we want our holders of our NFT to think of it as a membership to an exclusive community
                of like-minded individuals, who are all committed to helping each other.

                Moreover, our why is to onboard blokes to the Web3 space within the early phases of adoption. We are
                innovators guided by our community and the evolving Web3 world.</p>}
        </div>
    )
}