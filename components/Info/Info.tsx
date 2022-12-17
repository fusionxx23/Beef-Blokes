import React from 'react'
import Bg from '../../public/images/BackgroundInfo.png'
import MobileBg from '../../public/images/MobileInfoBg.png';

export default function Info({ children, height }: { children: any, height: string }) {
    return (
        <div className='absolute z-0 top-0 w-full min-h-max'
            style={{ height: '100vh' }}>
            <div className='h-full hidden sm:block relative' style={{
                backgroundImage: `url(${Bg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: height
            }}>
                <div style={{fontSize:'22px'}} className="absolute bottom-0 right-0 bg-white bg-opacity-40 px-2 py-1 rounded-tl-md font-sniglet">
                    <h1>Beef Blokes, 2022 | All rights reserved.</h1>
                </div>
            </div>
            <div className='h-full sm:hidden relative' style={{
                backgroundImage: `url(${MobileBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginTop: '73px',
                minHeight: height
            }}>
                <div className="absolute bottom-0 right-0 bg-white bg-opacity-40 px-2 py-1 rounded-tl-md font-sniglet">
                    <h1>Beef Blokes, 2022 | All rights reserved.</h1>
                </div>
            </div>
            <div className="absolute top-0 w-full" style={{ paddingTop: '110px' }}>
                {children}
            </div>
        </div>
    )
}
