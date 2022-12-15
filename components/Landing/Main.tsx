import React from 'react'
import Image from 'next/image';
import Bg from '../../public/images/Background.png';
import meatOne from '../../public/images/meatOne.png'; 
import meatTwo from '../../public/images/meatTwo.png'; 
export default function Main({ children }: any) {
    return (
        <div className='absolute z-0 pt-32 top-0 w-full min-h-max' style={{
            background: 'linear-gradient(180deg, rgba(104, 211, 248, 0) 0%, rgba(215, 245, 255, 0.385) 91.67%, rgba(186, 237, 255, 0.42) 100%)', 
            minHeight:'947px', 
            height:'100vh'
        }}>
            <div className='w-full hidden relative sm:flex justify-center px-24' style={{ maxHeight: '700px' }}>
                <Image src={Bg} alt='Background'></Image>
                <div className="absolute bottom-20 right-3">
                    <Image src={meatOne} alt='Background'></Image>
                </div>
                <div className="absolute left-3 bottom-0">
                    <Image src={meatTwo} alt='Background'></Image>
                </div>
            </div>
            <div className="absolute pt-40 w-full h-full top-0 flex flex-col justify-between">
                {children}
            </div>
        </div>
    )
}
