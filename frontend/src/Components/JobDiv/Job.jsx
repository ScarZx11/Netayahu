import React from "react";
import { BiTimeFive } from "react-icons/bi";

const Data = [
    {
        id: 1,
        image: 'chrome://favicon2/?size=24&scaleFactor=1x&showFallbackMonogram=&pageUrl=https%3A%2F%2Fgithub.com%2FScarZx11',
        title: 'Web Developer',
        time: '10hrs',
        location: 'Canada',
        desc: 'Requires an experienced developer.',
        company: 'Line Co.'
    },
    {
        id: 2,
        title: 'Rust Developer',
        time: 'Now',
        location: 'Canada',
        desc: '5+ years experience required.',
        company: 'Astrix'
    },
    {
        id: 3,
        title: 'UX Designer',
        time: 'Now',
        location: 'Hong Kong',
        desc: 'Requires an experienced designer.',
        company: 'Ph 1.'
    }
];

const Jobs = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                {Data.map(({ id, image, title, time, location, desc, company }) => {
                    return (
                        <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                            <span className='flex justify-between items-center gap-4'>
                                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                                <span className='flex items-center text-[#ccc] gap-1'>
                                    <BiTimeFive /> {time}
                                </span>
                            </span>
                            <h6 className='text-[#ccc]'>{location}</h6>
                            <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                                {desc}
                            </p>
                            <div className='company flex items-center gap-2'>
                                <img src={image} alt="Company Logo" className='w-[10%]' />
                                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                            </div>
                            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover:text-white'>
                                Apply Now
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Jobs;
