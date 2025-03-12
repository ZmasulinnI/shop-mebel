import React from 'react';
import Image from 'next/image'

const Navbar = ({}) => {
    return (
        <>
            <div className=''>
                <Image src={'nav_logo.svg'} width={185} height={41} alt='logo'/>
            </div>
        </>
    );
};

export default Navbar;