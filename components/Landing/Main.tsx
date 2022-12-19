import React from 'react'
import Image from 'next/image';
import Bg from '../../public/images/Background.png';
import Footer from './Footer';
// import meatOne from '../../public/images/meatOne.png'; 
// import meatTwo from '../../public/images/meatTwo.png'; 
//linear-gradient(180deg, rgba(104, 211, 248, 0) 0%, rgba(215, 245, 255, 0.385) 91.67%, rgba(186, 237, 255, 0.42) 100%)
export default function Main({ children }: any) {
    return (
        <div className='absolute z-0 pt-32 top-0 w-full min-h-max page-height' style={{
            background: '',
            height: '100vh'
        }}>
            <div className='h-full flex pb-32 md:items-center xl:items-start'>
                <div className='w-full hidden relative md:flex justify-center bg-white' >
                    <div className='overflow-hidden flex justify-center md:mb-10 xl:mb-0' >
                        <Image src={Bg} style={{ minWidth: '1300px' }} alt='Background'></Image>
                    </div>

                    {/* <div className="absolute bottom-20 right-3">
                    <Image src={meatOne} alt='Background'></Image>
                </div>
                <div className="absolute left-3 bottom-0">
                    <Image src={meatTwo} alt='Background'></Image>
                </div> */}
                    <div className="absolute w-full h-full top-0 flex flex-col justify-center z-10">
                        {children}
                    </div>
                </div>
            </div>

            <div className="absolute w-full h-full top-0 flex flex-col justify-between">
                <div></div>
                <Footer></Footer>
            </div>

        </div>
    )
}
