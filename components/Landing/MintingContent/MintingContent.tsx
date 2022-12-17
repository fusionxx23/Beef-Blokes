import React from 'react'
import Image from 'next/image';
import MintImg from '../../../public/images/mintImg.png';
import Mint from './Mint';


export default function MintingContent() {
    return (
        <div className='flex flex-col items-center h-full font-sniglet'>
            <Image src={MintImg} className='xl:w-80 2xl:w-128' alt='Bloke NFT' />
            <div className='bg-black cursor-pointer font-extrabold relative text-white flex items-center justify-center font-sniglet rounded-full' style={{ width: '451px', height: '107px' }}>
                <h1 className='text-5xl'>MINT</h1>
                <Mint />
            </div>
            <h1 className='mt-20 xl:text-2xl  2xl:text-3xl'>1323 / 1500</h1>
            <h2>BEEFY BLOKES MINTED</h2>
        </div>
    )
}
