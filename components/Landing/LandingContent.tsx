import React from 'react'
import Image from 'next/image';
import Wordmark from '../../public/images/Wordmark.png';
import Link from 'next/link';
import arrow from '../../public/images/arrow.png'
let textResponsive = 'sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'
const btnResponsiveH = 'sm:h-10 md:h-12 lg:h-14 xl:h-16  2xl:h-20'
const btnResponsiveW = 'sm:w-60 md:w-64 lg:w-72 xl:w-80 2xl:w-96'
export default function LandingContent() {
    return (
        <section>
            <div className='hidden sm:flex flex-col items-center h-full font-sniglet'>
                <Image src={Wordmark} alt='Wordmark' className='sm:w-64 md:w-72 lg:w-96 xl:w-128 2xl:w-160 mb-10' />
                <h1 className={`text-white font-sniglet ${textResponsive}`}>
                    1500 NFT&apos;s that embody Aussie culture, with unique Aussie traits.
                </h1>
                <Link href="/mint">
                    <div className={`flex justify-center items-center bg-black text-white rounded-full sm:mt-3 md:mt-5 lg:mt-10  cursor-pointer ${btnResponsiveH} ${btnResponsiveW}`} >
                        <h1 className={`font-sniglet font-extrabold mr-4 ${textResponsive}`}>MINT YOUR BLOKE</h1>
                        <Image src={arrow} alt=''></Image>
                    </div>
                </Link>
                <div className='  sm:mt-2 md:mt-3 lg:mt-5  xl:text-2xl 2xl:text-3xl cursor-pointer'>
                    <h1>SEE MARKETPLACE</h1>
                </div>
            </div>

            {/*  Mobile */}
            <div className='sm:hidden flex flex-col items-center h-full font-sniglet mt-20 px-4 '>
                <Image src={Wordmark} width='324' alt='Wordmark' />
                <h1 className='font-sniglet text-white text-center'
                    style={{ fontSize: '18px', width: '310px' }}>
                    1500 NFT&apos;s that embody Aussie culture, with unique Aussie traits.
                </h1>
                <Link href="/mint">
                    <div className='flex justify-center items-center bg-black text-white rounded-full mt-10 cursor-pointer'
                        style={{ width: '320px', height: '60px' }}>
                        <h1 style={{ fontSize: '22px' }} className='font-sniglet mr-3 font-extrabold'>MINT YOUR BLOKE</h1>
                        <Image src={arrow} alt=''></Image>
                    </div>
                </Link>
                <div style={{ fontSize: '22px' }} className='mt-5 text-3xl cursor-pointer'>
                    <h1>SEE MARKETPLACE</h1>
                </div>
            </div>
        </section>

    )
}
