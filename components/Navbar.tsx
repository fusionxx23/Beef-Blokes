import React from 'react'
import beefLogo from '../public/images/BEEFY-Logo 1.png';
import Opensea from '../public/images/Opensea.png';
import Image from 'next/image';
export default function Navbar({bg}: {bg: boolean}) {
    return (
        <div className='px-24 font-sniglet pt-2 flex bg-white justify-between z-10 absolute w-full' >
            <div className='flex'>
                <a href="/"><Image src={beefLogo} alt='' /></a>
                <div className='flex items-center'>
                    <NavLink title={'TEAM'} url={'/team'} />
                    <NavLink title={`FAQ's`} url={'/faqs'} />
                    <NavLink title={'ABOUT US'} url={'/about'} />
                    <NavLink title={'TWITTER'} url={'/'} />
                    <NavLink title={'DISCORD'} url={'/'} />
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

function NavLink({ title, url }: { title: string, url: string }) {
    return (
        <a href={`${url}`}>
            <h1 className='mx-12 text-xl'>{title}</h1>
        </a>
    )
}
