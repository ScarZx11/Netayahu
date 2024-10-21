import React from 'react';

import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8px] grid grid-cols-5 m-auto items-center justify-center'>
            <div>
                <div className="logoDiv">
                    <h1 className="logo text-[25px] text-white pb-[1.5rem]">
                        <strong>Job</strong>Search
                    </h1>
                </div>
                <p className='text-white pb-[13px] opacity-70 leading-7'>
                    One Aim!! Get the Candidate Placed
                </p>
            </div>

            <div className='grid'>
                <span className='divTitle text-[18px] font-semibold py-[1.5rem] text-white'>
                    Company
                </span>

                <div className='grid gap-3'>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
                    <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
                </div>
            </div>

            {/* Additional columns (e.g., Resources, Support) can be added similarly */}
        </div>
    );
};

export default Footer;
