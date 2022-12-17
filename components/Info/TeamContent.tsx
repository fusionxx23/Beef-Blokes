import React from 'react'
import Image, { StaticImageData } from 'next/image';
import jackson from '../../public/images/jackson.png'; 
import luis from '../../public/images/lui.png'; 
import hughezy from '../../public/images/hughezy.png'; 
export default function TeamContent() {
  const transform = 'rotate(5.62deg)'
  return (
    <div className="flex flex-col items-center w-full font-sniglet text-white h-full" style={{ marginTop: '34px' }}>
      <h2 className='text-2xl hidden sm:block sm:text-4xl' style={{ transform, }}>meet the</h2>
      <h1 className='font-extrabold hidden sm:block sm:text-8xl md:text-9xl  lg:text-11xl leading-8' style={{ transform }}>TEAM</h1>
      
      <h2 className='text-2xl sm:hidden' style={{ transform, fontSize: '35px' }}>meet the</h2>
      <h1 className='font-extrabold sm:hidden' style={{ transform, fontSize: '100px', lineHeight:'100px' }}>TEAM</h1>

      <div className='hidden sm:flex justify-around flex-wrap'>
        <MemberCard src={jackson} name={'JACKSON MEIJ'} title={'FOUNDER'} desc={'Founder of Meija Labs'}/>
        <MemberCard src={luis} name={'LUIS MARZONE'} title={'CO-FOUNDER'} desc={'Lawyer / Marketer'}/>
        <MemberCard src={hughezy} name={'HEGHEZY'} title={'C0-FOUNDER'} desc={'Lawyer / Marketer'}/>
      </div>
      <div className='flex sm:hidden justify-center sm:justify-around flex-wrap h-full'>
        <div className="mb-8"></div>
        <MemberCard src={jackson} name={'JACKSON MEIJ'} title={'FOUNDER'} desc={'Founder of Meija Labs'}/>
        <div className="mb-16"></div>
        <MemberCard src={luis} name={'LUIS MARZONE'} title={'CO-FOUNDER'} desc={'Lawyer / Marketer'}/>
        <div className="mb-16"></div>
        <MemberCard src={hughezy} name={'HEGHEZY'} title={'C0-FOUNDER'} desc={'Lawyer / Marketer'}/>
      </div>
    </div>
  )
}


function MemberCard({src, name, title, desc}: {src: StaticImageData, name: string, title: string, desc:string}) {
  return (
    <div className='md:mx-3 lg:mx-10 text-center text-black'>
      <Image className='hidden sm:block sm:w-40 md:w-56 lg:w-64 xl:w-80 2xl:w-96' src={src} alt={'member card'}></Image>
      <Image className='sm:hidden' src={src} style={{width:'400px'}} alt={'member card'}></Image>
      <h1 style={{fontSize:'32px'}}>{name}</h1>
      <h1 className='font-extrabold'>{title}</h1>
      <h2>{desc}</h2>
    </div>
  )
}