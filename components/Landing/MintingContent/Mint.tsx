import React, { useState } from 'react'
import IconMinus from '../../../public/images/minus.png'
import Image from 'next/image';
import IconPlus from '../../../public/images/plus.png';
export default function Mint() {
    const [mintAmt, setMintAmt] = useState(0); 
    const add = () => {
        const n = mintAmt + 1; 
        setMintAmt(n); 
    }
    const sub = () => {
        if(mintAmt < 1) {
            return; 
        }
        const n = mintAmt - 1; 
        
        setMintAmt(n); 
    }
    return (
        <div className="absolute top-7 md:top-6 lg:top-7 xl:top-9 2xl:top-12 w-full border-4 lg:border-r-4 lg:border-l-4 lg:border-b-4 border-t-0 rounded-br-3xl rounded-bl-3xl  border-black ">
            <div className=" mt-10 sm:mt-7 lg:mt-12 xl:mt-12 2xl:mt-16 flex justify-around font-normal px-10">
                <div className='flex flex-col items-center '>
                    <h1 className='text-black xl:text-lg 2xl:text-xl mb-3' style={{height:'28px'}}>Amount</h1>
                    <div className='bg-black px-4 rounded-tr-full rounded-tl-full' >
                        <h1>0.1ETH</h1>
                    </div>
                </div>

                <div className='flex flex-col items-center'>
                    <div className='flex mb-3 items-center'>
                        <div onClick={sub} className='w-7'>
                            <Image src={IconMinus} alt='Bloke NFT' />
                        </div>

                        <h1 className='mx-4 text-black text-xl xl:text-lg 2xl:text-xl' >{mintAmt}</h1>
                        <div onClick={add} className='w-7'>
                            <Image src={IconPlus} alt='Bloke NFT' />
                        </div>

                    </div>
                    <div className='bg-black px-4 rounded-tr-full rounded-tl-full' >
                        <h1>MAX</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}
