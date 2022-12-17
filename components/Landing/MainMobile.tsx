import React from 'react'
import Image from 'next/image';
import Bg from '../../public/images/LandingMobileBackground.png';

export default function MainMobile({ children }: any) {
    return (
        <div className='absolute z-0 pt-12 top-0 w-full min-h-max' style={{
            background: 'linear-gradient(180deg, rgba(104, 211, 248, 0) 0%, rgba(215, 245, 255, 0.385) 91.67%, rgba(186, 237, 255, 0.42) 100%)',
            minHeight:'940px',
            height: '100vh'
        }}>
           <div className='w-full relative flex justify-center pt-6'   >
                <Image src={Bg} alt='Background' ></Image>
                {/* <div className="absolute bottom-20 right-3">
                    <Image src={meatOne} alt='Background'></Image>
                </div>
                <div className="absolute left-3 bottom-0">
                    <Image src={meatTwo} alt='Background'></Image>
                </div> */}
            </div>
            <div style={{paddingTop:'155px'}} className="absolute w-full h-full top-0 flex flex-col justify-between">
                {children}
            </div>
        </div>
    )
}
