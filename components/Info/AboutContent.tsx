import React from 'react'
import Image from 'next/image';
import Face from '../../public/images/face.png'


export default function AboutContent() {
    return (
        <div className='flex flex-col items-center h-full font-sniglet mt-6'>
            <div className='relative'>
                <h1 style={{ fontSize: '160px' }} className='text-white text-center font-extrabold'>ABOUT</h1>
                <div style={{transform: 'rotate(-6.18deg)'}} 
                className='absolute bottom-12 right-10 font-extrabold bg-black text-white px-10 rounded-full'>
                    <h1 style={{
                        fontSize: '40px',
                        
                    }}>US</h1>
                </div>
            </div>

            <div style={{fontSize:'36px'}} className="mx-24 pt-4 relative border-t-2 border-l-2 border-black px-20 pb-3 text-center">
                    <div className="absolute -top-10 -left-10">
                        <Image src={Face} alt=''></Image>
                    </div>
                    <p className='font-extrabold'>Beefy Blokes is an array of 1500 NFT’s that embody Aussie culture, with unique Aussie traits.</p>
                    <p className='mb-4'>What is a Bloke?</p>
                    <p className='mb-4'>A Bloke is a commonly referred to term in Australia. Often substituted with the word man!</p>
                    <p className='mb-4'>For example, He’s an Aussie man... sounds weird right? </p>
                    <p className='mb-4'>But he’s an Aussie Bloke. Well that fits like a glove. </p>
                    <p className='mb-4'>Your Bloke will range from a Boxing Kangaroo to a Barbeque King. Whatever your Bloke is, it will embody you. 
                                        Some of the traits consist of illuminated glasses, wavy mullet, a bushman’s hat or a fresh meat pie.</p>
            
            </div>
        </div>
            <div className='flex'>

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