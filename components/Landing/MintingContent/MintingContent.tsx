import React from 'react'
import Image from 'next/image';
import MintImg from '../../../public/images/mintImg.png';
import Mint from './Mint';

let s = 'bg-black cursor-pointer font-extrabold relative text-white flex justify-center items-center font-sniglet rounded-full'
export default function MintingContent() {
    return (
        <section>
            <div className='hidden md:flex flex-col items-center h-full font-sniglet'>
                <Image src={MintImg} className='sm:w-40 md:w-32 lg:w-52 xl:w-64 2xl:w-80' alt='Bloke NFT' />
                <div className={s + ' sm:h-8 md:h-10 md:w-72 lg:h-16 lg:w-104 xl:w-112 xl:h-20 2xl:w-120 2xl:h-24 '} >
                    <h1 className=' lg:text-3xl xl:text-4xl 2xl:text-5xl'>MINT</h1>
                    <Mint />
                </div>
                <h1 className='lg:pt-2 sm:mt-4 md:mt-20 sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>1323 / 1500</h1>
                <h2>BEEFY BLOKES MINTED</h2>
            </div>
            {/* Mobile */}
            <div className='md:hidden'>
                <div className="flex justify-center mt-10">
                    <Image style={{ width: '270px' }} src={MintImg} alt='Bloke NFT' />
                </div>
                <div className='flex justify-center'>
                    <div className={'bg-black cursor-pointer font-extrabold relative text-white flex justify-center items-center font-sniglet rounded-full'} style={{ width: '310px', height: '60px' }} >
                        <h1 style={{ fontSize: '30px' }}>MINT</h1>
                        <Mint />
                    </div>
                </div>
                <div className='flex justify-center font-sniglet mt-20'>
                    <div className='text-center'>
                        <h1 className='text-xl mt-2' style={{fontSize:'32px'}}>1323 / 1500</h1>
                        <h2>BEEFY BLOKES MINTED</h2>
                    </div>

                </div>

            </div>

        </section>
    )

}
