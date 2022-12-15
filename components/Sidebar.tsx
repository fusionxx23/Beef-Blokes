import React from 'react'
import logo from '../public/images/BEEFY-Logo 1.png';
import Image from 'next/image';
export default function Sidebar({active}: {active: boolean}) {
    return (
        <div className={`${active ? '' : 'hidden'} absolute z-20 left-0 top-0 h-full bg-black bg-opacity-40`} style={{
            width: '100%'
        }}>
            <div style={{ paddingLeft: '16px', width: '277px', height: '100vh', background: '#76d9f9', paddingTop:'60px' }}
                className='relative w-full rounded-tr-3xl rounded-br-3xl'>
                <div style={{ height: '30px', width: '30px', top:'72px' }}
                    className="absolute flex items-center justify-center -right-2 top-5 p-2 bg-white rounded-full">
                    <h1> {'<'} </h1>
                </div>
                <div className='flex items-end' >
                    <Image className='w-12' src={logo} alt='logo' />
                    <h1 className='ml-2 font-bold text-2xl'>Beefy Blokes</h1>
                </div>
            </div>
        </div>
    )
}
