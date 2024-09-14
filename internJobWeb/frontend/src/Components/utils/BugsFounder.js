import React from 'react'
import { Link } from 'react-router-dom'

const BugsFounder = () => {
    return (
        <span className="logo flex justify-center items-center">
            <Link to="/"><span className='font-extrabold' id="authorLogo"> <span >Aspire</span><span className='text-sky-600'>Link</span></span> </Link>
        </span>
    )
}

export default BugsFounder