import React from 'react';
import Image from 'next/image'
import { Heart, Search, ShoppingCart } from 'lucide-react';

const Navbar = ({ }) => {
    return (
        <>
            <div className='mx-auto w-fit flex items-center my-7'>
                <Image src={'nav_logo.svg'} width={185} height={41} alt='logo' className='mr-[266px]'/>
                <div className='flex gap-18 mr-[231px]'>
                    <a href="">Home</a>
                    <a href="">Shop</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
                <div className='flex gap-11'>
                    <Search size={28}/>
                    <Heart size={28}/>
                    <ShoppingCart size={28}/>
                </div>
            </div>
        </>
    );
};

export default Navbar;