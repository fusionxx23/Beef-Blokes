import React from 'react'
import Image from 'next/image';
import MintImg from '../public/images/mintImg.png';
import IconMinus from '../public/images/minus.png'
import IconPlus from '../public/images/plus.png';

export default function MintingContent() {
    return (
        <div className='flex flex-col items-center h-full font-sniglet'>
            <Image src={MintImg} width={400} alt='Bloke NFT' />
            <div className='bg-black font-extrabold relative text-white flex items-center justify-center font-sniglet rounded-full' style={{ width: '451px', height: '107px' }}>
                <h1 className='text-5xl'>MINT</h1>
                <div className="absolute top-12 w-full border-r-4 border-l-4 border-b-4 border-t-0 rounded-br-3xl rounded-bl-3xl  border-black ">
                    <div className="mt-16 flex justify-around font-normal px-10">

                        <div className='flex flex-col items-center'>
                            <h1 style={{ fontSize: '28px' }} className='text-black text-xl mb-3'>Amount</h1>
                            <div className='bg-black px-4 rounded-tr-full rounded-tl-full' >
                                <h1>0.1ETH</h1>
                            </div>
                        </div>

                        <div className='flex flex-col items-center'>
                            <div className='flex mb-3 items-center'>
                                <div className='w-7'>
                                    <Image src={IconMinus} alt='Bloke NFT' />
                                </div>

                                <h1 className='mx-4 text-black text-xl' style={{ fontSize: '28px' }}>2</h1>
                                <div className='w-7'>
                                    <Image src={IconPlus} alt='Bloke NFT' />
                                </div>

                            </div>
                            <div className='bg-black px-4 rounded-tr-full rounded-tl-full' >
                                <h1>0.1ETH</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
