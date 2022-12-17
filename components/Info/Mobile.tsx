import React from 'react'
import Info from './Info'

export default function Mobile({children}: any) {
    return (
        <div className='sm:hidden'>
            <Info height={"1691px"}>
                {children}
            </Info>
        </div>
    )
}
