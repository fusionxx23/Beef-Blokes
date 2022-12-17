import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function Nav() {
    const [active, setActive] = useState(false); 
    return (
        <>
            <Navbar bg={true} setActive={setActive} />
            <Sidebar active={active} setActive={setActive} />
        </>
    )
}
