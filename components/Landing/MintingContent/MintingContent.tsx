import React from 'react'
import Image from 'next/image';
import MintImg from '../../../public/images/mintImg.png';
import Mint from './Mint';

let s = 'bg-black cursor-pointer font-extrabold relative text-white flex items-center justify-center font-sniglet rounded-full'
export default function MintingContent() {
    return (
        <div className='flex flex-col items-center h-full font-sniglet'>
            <Image src={MintImg} className='sm:w-40 md:w-48 lg:w-72 xl:w-80 2xl:w-104 2xl:mt-10' alt='Bloke NFT' />
            <div className={s + ' sm:h-8 md:h-10 md:w-72 lg:h-16 lg:w-104 xl:w-112 xl:h-20 2xl:w-120 2xl:h-24 '} >
                <h1 className=' lg:text-3xl xl:text-4xl 2xl:text-5xl'>MINT</h1>
                <Mint />
            </div>
            <h1 className=' sm:mt-4 md:mt-20 sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>1323 / 1500</h1>
            <h2>BEEFY BLOKES MINTED</h2>
        </div>
    )
}
