import React from 'react'
import Image from 'next/image';
import Wordmark from '../../public/images/Wordmark.png';
import Link from 'next/link';


export default function LandingContent() {
    return (
        <div>
            <div className='hidden sm:flex flex-col items-center h-full font-sniglet mt-6'>
                <Image src={Wordmark} alt='Wordmark' />
                <h1 className='text-white font-sniglet text-2xl'>
                    1500 NFT's that embody Aussie culture, with unique Aussie traits.
                </h1>
                <Link href="/mint">
                    <div className='flex justify-center items-center bg-black text-white rounded-full mt-10 cursor-pointer' style={{ width: '451px', height: '107px' }}>
                        <h1 className='font-sniglet font-extrabold text-3xl'>MINT YOUR BLOKE</h1>
                    </div>
                </Link>
                <div className='mt-5 text-3xl cursor-pointer'>
                    <h1>SEE MARKETPLACE</h1>
                </div>
            </div>
            <div className=' sm:hidden flex flex-col items-center h-full font-sniglet mt-6 px-4'>
                <Image src={Wordmark} width='324' alt='Wordmark' />
                <h1 className='text-white font-sniglet text-white text-center' 
                style={{fontSize:'18px'}}>
                    1500 NFT's that embody Aussie culture, with unique Aussie traits.
                </h1>
                <a href="/mint">
                    <div className='flex justify-center items-center bg-black text-white rounded-full mt-10 cursor-pointer'
                        style={{ width: '310px', height: '60px' }}>
                        <h1 style={{ fontSize: '22px' }} className='font-sniglet font-extrabold'>MINT YOUR BLOKE</h1>
                    </div>
                </a>
                <div style={{fontSize:'22px'}} className='mt-5 text-3xl cursor-pointer'>
                    <h1>SEE MARKETPLACE</h1>
                </div>
            </div>
        </div>

    )
}
