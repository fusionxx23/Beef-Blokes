import React, { useState } from 'react'
import Image from 'next/image'; 
import plus from '../../public/images/plusText.png'; 
import minus from '../../public/images/minusText.png'; 
export default function FaqsContent() {
    return (
        <div className='px-4 lg:px-32  xl:px-56 font-sniglet mt-20 max-h-screen'>
            <div className='flex justify-between'>
                <div className="bg-black text-white font-extrabold py-1 px-3 rounded-xl lg:text-xl md:text-lg xl:text-2xl 2xl:text-3xl">
                    FAQ&apos;s
                </div>
              
            </div>
            <div className='relative inline-block'>
                <h1 className='font-extrabold text-white text-6xl lg:text-6xl xl:text-8xl 2xl:text-9xl'>ANSWERED</h1>
                <h2 className='absolute right-0 -top-10 lg:text-xl md:text-lg xl:text-2xl 2xl:text-3xl text-white' >your questions,</h2>
            </div>


            <div className='overflow-auto' style={{}}>
                <FAQ title={'PURPOSE'} />
                <FAQ title={'SUPPLY'} />
                <FAQ title={'STORY'} />
                <FAQ title={'HOW TO BUY?'} />
            </div>
        </div>
    )
}


function FAQ({ title }: { title: string }) {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open); 
    }
    return (
        <div className='border-t border-black py-2 md:py-4'>
            <div onClick={() => { toggle() }} className='flex justify-between items-center cursor-pointer'>
                <h1  className='font-extrabold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl'>{title}?</h1>
                {!open && <Image src={plus} alt={'plus text'}></Image>}
                {open && <Image src={minus} alt={'minus'}></Image>}
            </div>


            {open && <p className='xl:text-xl 2xl:text-2xl'>Our purpose is to bring together a community that encourages, motivates and supports holders.
                At Beefy Blokes we want our holders of our NFT to think of it as a membership to an exclusive community
                of like-minded individuals, who are all committed to helping each other.

                Moreover, our why is to onboard blokes to the Web3 space within the early phases of adoption. We are
                innovators guided by our community and the evolving Web3 world.</p>}
        </div>
    )
}