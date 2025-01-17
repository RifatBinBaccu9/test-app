import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link href={"/"}>Home</Link>
        <Link href={"/About"}>About</Link>
        <Link href={"/Service"}>Service</Link>
    </div>
    
  )
}

export default Navbar