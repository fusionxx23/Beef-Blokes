import React from 'react'
import logo from '../public/images/BEEFY-Logo 1.png';
import Image from 'next/image';
import Link from 'next/link';
import vec from '../public/images/vec.png'; 
import { useRouter } from 'next/router';
export default function Sidebar({ active, setActive }: { active: boolean, setActive: (b: boolean) => void }) {

    return (
        <div className={`${active ? '' : 'hidden'} fixed z-20 left-0 top-0 h-full bg-black bg-opacity-40`} style={{
            width: '100%'
        }}>
            <div style={{ paddingLeft: '16px', width: '277px', height: '100vh', backgroundImage: 'linear-gradient( to right, #97e4fb, #6fd7f9)', paddingTop: '60px' }}
                className='relative w-full rounded-tr-3xl rounded-br-3xl'>
                <div onClick={() => setActive(false)} style={{ height: '30px', width: '30px', top: '72px' }}
                    className="absolute flex items-center justify-center -right-2 top-5 p-2 bg-white rounded-full">
                    <Image src={vec} alt=''></Image>
                </div>
                <div className='flex items-end' style={{ marginBottom: "44px" }} >
                    <Image className='w-12' src={logo} alt='logo' />
                    <h1 className='ml-2 font-bold text-2xl'>Beefy Blokes</h1>
                </div>
                <div className='font-sniglet'>
                    <MobileLink title={'TEAM'} url={'/team'}/>
                    <MobileLink title={'FAQs'} url={'/faqs'} />
                    <MobileLink title={'ABOUT'} url={'/about'} />
                </div>

            </div>
        </div>
    )
}

function MobileLink({title, url}: {title: string, url: string}) {
    const router = useRouter(); 
    console.log(router.pathname); 
    let active = false; 
    if(url === router.pathname){
        active = true; 
    }
    return (
        <Link href={url}>
            <div className={`${active ? 'bg-white' : ''} pl-2 mr-4 py-3 rounded-lg`} style={{ marginBottom: '24px', fontSize:'18px' }}>
                <h1>{title}</h1>
            </div>
        </Link>

    )
}
