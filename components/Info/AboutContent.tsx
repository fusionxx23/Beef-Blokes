import React from 'react'
import Image from 'next/image';
import Face from '../../public/images/face.png'
import Card from './Card';

let textResponsive = 'sm:text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'
export default function AboutContent() {
    return (
        <div className='flex flex-col items-center h-full font-sniglet mt-6 overflow-x-hidden'>
            <div className='relative mb-4'>
                <h1  className='text-white text-center font-extrabold text-6xl  md:text-7xl lg:text-9xl 2xl:text-10xl'>ABOUT</h1>
                <div style={{transform: 'rotate(-6.18deg)'}} 
                className='absolute bottom-0 right-5 px-3 lg:bottom-0 lg:right-10  2xl:right-10 font-extrabold bg-black text-white lg:px-8 2xl:px-10 rounded-full'>
                    <h1 className='lg:text-3xl 2xl:text-5xl'>US</h1>
                </div>
            </div>

            <div className={`${textResponsive} mx-10 sm:mx-12 md:mx-16  lg:mx-24 pt-4  relative border-t-2 border-l-2 border-black px-4 md:px-10 lg:px-20 pb-3 text-center`}>
                    <div className="absolute -top-5 -left-5   lg:-top-10 lg:-left-10">
                        <Image src={Face} className='2xl:w-28 xl:w-24 lg:w-20 md:w-16 sm:w-12 w-10' alt=''></Image>
                    </div>
                    <p className='font-extrabold mb-6'>Beefy Blokes is an array of 1500 NFT’s that embody Aussie culture, with unique Aussie traits.</p>
                    <p className='mb-14'>What is a Bloke?</p>
                    <p className='mb-14'>A Bloke is a commonly referred to term in Australia. Often substituted with the word man!</p>
                    <p className='mb-14'>For example, He’s an Aussie man... sounds weird right? </p>
                    <p className='mb-14'>But he’s an Aussie Bloke. Well that fits like a glove.</p>
                    <p className='mb-14'>Your Bloke will range from a Boxing Kangaroo to a Barbeque King. Whatever your Bloke is, it will embody you. 
                                        Some of the traits consist of illuminated glasses, wavy mullet, a bushman’s hat or a fresh meat pie.</p>
            
            </div>
            <div className='flex justify-around w-full mt-5 overflow-hidden ' style={{width:'1500px'}} >
                    <Card marginTop={'10px'}/>
                    <Card marginTop={'100px'}/>
                    <Card marginTop={'5px'}/>
                    <Card marginTop={'90px'}/>
                    <Card marginTop={'5px'}/>
            </div>
        </div>
            
    )
}


/*Beefy Blokes is an array of 1500 NFT’s that embody Aussie culture, 
with unique Aussie traits.

What is a Bloke?

A Bloke is a commonly referred to term in Australia. Often substituted with the word man!

For example, He’s an Aussie man... sounds weird right? 
But he’s an Aussie Bloke. Well that fits like a glove.
Your Bloke will range from a Boxing Kangaroo to a Barbeque King. Whatever your Bloke is, it will embody you. 
Some of the traits consist of illuminated glasses, wavy mullet, a bushman’s hat or a fresh meat pie.
*/