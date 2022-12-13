import React from 'react'
import Image, { StaticImageData } from 'next/image';
import jackson from '../../public/images/jackson.png'; 
import luis from '../../public/images/lui.png'; 
import hughezy from '../../public/images/hughezy.png'; 
export default function TeamContent() {
  const transform = 'rotate(5.62deg)'
  return (
    <div className="flex flex-col items-center w-full font-sniglet text-white" style={{ marginTop: '34px' }}>
      <h2 className='text-2xl' style={{ transform, fontSize: '45px' }}>meet the</h2>
      <h1 className='font-extrabold' style={{ transform, fontSize: '190px', lineHeight:'190px' }}>TEAM</h1>
      <div className='flex justify-around'>
        <MemberCard src={jackson} name={'JACKSON MEIJ'} title={'FOUNDER'} desc={'Founder of Meija Labs'}/>
        <MemberCard src={luis} name={'LUIS MARZONE'} title={'CO-FOUNDER'} desc={'Lawyer / Marketer'}/>
        <MemberCard src={hughezy} name={'HEGHEZY'} title={'C0-FOUNDER'} desc={'Lawyer / Marketer'}/>
      </div>
    </div>
  )
}


function MemberCard({src, name, title, desc}: {src: StaticImageData, name: string, title: string, desc:string}) {
  return (
    <div className='mx-10 text-center text-black'>
      <Image width={400} src={src} alt={'member card'}></Image>
      <h1 style={{fontSize:'32px'}}>{name}</h1>
      <h1 className='font-extrabold'>{title}</h1>
      <h2>{desc}</h2>
    </div>
  )
}