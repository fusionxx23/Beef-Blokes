import React from 'react'
import Bg from '../../public/images/BackgroundInfo.png'

export default function Info({ children, height }: {children: any, height: string}) {
    return (
        <div className='absolute z-0 top-0 w-full min-h-max'
            style={{ height: '100vh' }}>
            <div className='h-full' style={{
                backgroundImage: `url(${Bg.src})`,
                filter: 'blur(3px)', 
                minHeight:height
            }}>
            </div>
            <div className="absolute top-0 w-full" style={{ paddingTop: '110px' }}>
                {children}
            </div>
        </div>
    )
}
