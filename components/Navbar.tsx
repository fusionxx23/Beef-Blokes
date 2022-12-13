import React from 'react'
import beefLogo from '../public/images/BEEFY-Logo 1.png';
import Opensea from '../public/images/Opensea.png';
import Image from 'next/image';
export default function Navbar() {
    return (
        <div className='px-24 font-sniglet pt-2 flex justify-between z-10 absolute w-full' >
            <div className='flex'>
                <Image src={beefLogo} alt='' />
                <div className='flex items-center'>
                    <NavLink title={'TEAM'} />
                    <NavLink title={`FAQ's`} />
                    <NavLink title={'ABOUT US'} />
                    <NavLink title={'TWITTER'} />
                    <NavLink title={'DISCORD'} />
                </div>
            </div>

            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <Image src={Opensea} alt='' />
                </div>

                <div className='py-2 px-5 border-black border ml-4 rounded-full cursor-pointer' >
                    <h1 className='text-xl'>CONNECT WALLET</h1>
                </div>
            </div>

        </div>
    )
}

function NavLink({ title }: { title: string }) {
    return (
        <a href="/">
            <h1 className='mx-12 text-xl'>{title}</h1>
        </a>
    )
}
