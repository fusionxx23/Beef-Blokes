import React from 'react'
import Bg from '../../public/images/BackgroundInfo.png'
import MobileBg from '../../public/images/MobileInfoBg.png'; 

export default function Info({ children, height }: {children: any, height: string}) {
    return (
        <div className='absolute z-0 top-0 w-full min-h-max'
            style={{ height: '100vh' }}>
            <div className='h-full hidden sm:block' style={{
                backgroundImage: `url(${Bg.src})`,
                backgroundSize:'cover',
                backgroundPosition: 'center',
                filter: 'blur(2px)', 
                minHeight:height
            }}>
            </div>
            <div className='h-full sm:hidden' style={{
                backgroundImage: `url(${MobileBg.src})`,
                backgroundSize:'cover',
                backgroundPosition: 'center',
                filter: 'blur(2px)', 
                marginTop:'73px', 
                minHeight:height
            }}>

            </div>
            <div className="absolute top-0 w-full" style={{ paddingTop: '110px' }}>
                {children}
            </div>
        </div>
    )
}
