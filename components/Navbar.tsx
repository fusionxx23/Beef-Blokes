import React from 'react'
import beefLogo from '../public/images/BEEFY-Logo 1.png';
import Opensea from '../public/images/Opensea.png';
import burger from '../public/images/burger.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useWeb3Provider from '../libs/web3';

export default function Navbar({ bg, setActive }: { bg: boolean, setActive: (b: boolean) => void }) {
    const { connect, address } = useWeb3Provider();
    return (
        <div className={`px-2 sm:px-4 xl:px-24 font-sniglet pt-2 flex pb-4 ${bg ? 'bg-white' : ''} justify-between z-10 absolute w-full`} style={{ paddingBottom: '14px' }} >
            <div className='flex  sm:ml-0'>
                <Link className='hidden md:block' href="/"><Image style={{ minWidth: '115px' }} width='115' src={beefLogo} alt='' /></Link>
                <Link className='md:hidden' href="/"><Image className='w-14' src={beefLogo} alt='' /></Link>
                <div className=' hidden sm:flex items-center'>
                    <NavLink title={'TEAM'} url={'/team'} />
                    <NavLink title={`FAQ's`} url={'/faqs'} />
                    <NavLink title={'ABOUT US'} url={'/about'} />
                    <NavLink title={'TWITTER'} url={'/twitter'} />
                    <NavLink title={'DISCORD'} url={'/discord'} />
                </div>
            </div>

            <div className='flex items-center'>
                <div className='cursor-pointer sm:hidden md:block'>
                    <Image className='w-8' src={Opensea} alt='' />
                </div>

                <div className='py-1 px-2 sm:py-2 sm:px-2 border-black border ml-4 rounded-full cursor-pointer' >
                    <h1 className='text-sm md:text-md sm:text-sm lg:text-lg xl:text-xl text-center whitespace-nowrap'
                        onClick={() => { connect(); }}>
                        {address ?
                            address.slice(0, 4) + address.slice(address.length - 4, address.length) + '...'
                            : 'CONNECT WALLET'}
                    </h1>
                </div>

                <div className="sm:hidden ml-2" onClick={() => { setActive(true) }}>
                    <Image src={burger} alt='Navbar Open'></Image>
                </div>
            </div>

        </div>
    )
}

function NavLink({ title, url }: { title: string, url: string }) {
    const router = useRouter();
    let active = false;
    if (url == router.pathname) {
        active = true;
    }
    return (
        <Link href={`${url}`}>
            <div className=''>
                <h1 className='sm:mx-5 md:text-md sm:text-sm lg:text-lg xl:text-xl xl:mx-9'>{title}</h1>
                <div className="flex justify-center">
                    <div className={`border-b-2 ${active ? '' : 'border-opacity-0'} w-10 border-black`}></div>
                </div>
            </div>

        </Link>
    )
}
