import React from 'react'
import Image, { StaticImageData } from 'next/image';


export default function Card({marginTop, img}:{marginTop:string, img:StaticImageData}) {
    return (
        <div style={{marginTop}} className='w-60'>
            <Image src={img} alt=''></Image>
            <div className='bg-white px-2 rounded-br-md rounded-bl-md'>
                <h1 className='font-extrabold mt-2 text-xl'>{`"Crocodile"`}</h1>
                <div className="mt-2 flex justify-between mb-2">
                    <h1>Beefy Bloke</h1>
                    <h2>#29</h2>
                </div>
            </div>
        </div>
    )
}