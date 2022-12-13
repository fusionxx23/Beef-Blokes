import React from 'react'
import Image from 'next/image';
import Wordmark from '../public/images/Wordmark.png';


export default function LandingContent() {
    return (
        <div className='flex flex-col items-center h-full font-sniglet mt-10'>
            <Image src={Wordmark} alt='Wordmark' />
            <h1 className='text-white font-sniglet text-2xl'>
                1500 NFT's that embody Aussie culture, with unique Aussie traits.
            </h1>
            <a href="/mint">
                <div className='flex justify-center items-center bg-black text-white rounded-full mt-10 cursor-pointer' style={{ width: '451px', height: '107px' }}>
                    <h1 className='font-sniglet font-extrabold text-3xl'>MINT YOUR BLOKE</h1>
                </div>
            </a>
            <div className='mt-5 text-3xl cursor-pointer'>
                <h1>SEE MARKETPLACE</h1>
            </div>
        </div>
    )
}
