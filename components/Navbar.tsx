import React from 'react'
import beefLogo from '../public/images/BEEFY-Logo 1.png';
import Opensea from '../public/images/Opensea.png';
import burger from '../public/images/burger.png'; 
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({bg}: {bg: boolean}) {
    return (
        <div className={`px-4 sm:px-10 xl:px-24 font-sniglet pt-2 flex ${bg ? 'bg-white' : ''} justify-between z-10 absolute w-full`} >
            <div className='flex  sm:ml-0'>
                <Link className='hidden sm:block' href="/"><Image  width='115' src={beefLogo} alt='' /></Link>
                <Link className='sm:hidden' href="/"><Image  className='w-14' src={beefLogo} alt='' /></Link>
                <div className='hidden sm:flex items-center'>
                    <NavLink title={'TEAM'} url={'/team'} />
                    <NavLink title={`FAQ's`} url={'/faqs'} />
                    <NavLink title={'ABOUT US'} url={'/about'} />
                    <NavLink title={'TWITTER'} url={'/'} />
                    <NavLink title={'DISCORD'} url={'/'} />
                </div>
            </div>

            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <Image className='w-8' src={Opensea} alt='' />
                </div>

                <div className='py-1 px-2 sm:py-2 sm:px-5 border-black border ml-4 rounded-full cursor-pointer' >
                    <h1 className='text-sm sm:text-xl'>CONNECT WALLET</h1>
                </div>

                <div className="sm:hidden ml-2">
                    <Image src={burger} alt='Navbar Open'></Image>
                </div>
            </div>

        </div>
    )
}

function NavLink({ title, url }: { title: string, url: string }) {
    return (
        <a href={`${url}`}>
            <h1 className='sm:mx-5 xl:mx-9 text-xl'>{title}</h1>
        </a>
    )
}
