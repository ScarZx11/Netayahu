import React from 'react';

const Value = () => {
    return (
        <div className='mb-[4rem] mt-[6rem]'>
            <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>
                The value that holds us true and to account
            </h1>

            <div className='grid gap-[10rem] grid-cols-3 items-center'>
                <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                    <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[480px] w-[40px] flex items-center justify-center'>
                        <img src={simple} alt="Simplicity" className='w-[70%]' />
                    </div>

                    <span className='font-semibold text-textColor text-[18px]'>
                        Simplicity
                    </span>

                    <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                        Things being made beautifully simple are at the heart of everything we do.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Value;
