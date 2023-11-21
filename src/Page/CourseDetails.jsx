import React, { useEffect, useState } from 'react';
import Navbar from './Home/Shared/Navber/Navbar';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {

    const { id } = useParams();
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('/demo.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    let data = course.find(itm => itm.id === parseFloat(id))
    return (
        <div>
            <Navbar></Navbar>
            <div className='md:flex gap-5 p-6  md:w-[1400px] m-auto border bg-base-200'>
                <div className=' flex-1  p-3 border-2 border-green-800'>
                    <div className='md:w-[500px]  pb-3'>
                        <img className='rounded-lg md:w-[350px]' src={data?.thumbnail_img} alt="" />
                    </div>
                    <p className='md:text-xl text-[#241010]'>Category Name:
                        <span className='md:text-xl text-[#f85050]'>{data?.category_name}</span></p>
                    <p className='md:text-xl text-[#241010]'> Price$:
                        <span className='md:text-xl text-[#f85050]' >{data?.price}</span> </p>
                    <p className='md:text-xl text-[#241010]' > Course Name:
                        <span className='md:text-xl text-[#f85050]' >{data?.course_name}</span></p>
                    <p className='md:text-xl text-[#241010]' >Course Title:
                        <span className='md:text-xl text-[#f85050]'>{data?.title}</span></p>
                    <p className=' md:text-xl text-[#241010]' > description:
                        <span className=' text-base text-[#403F3F]'>{data?.description}</span></p>
                </div>
                <div className='flex-1 p-3 border-2 border-red-800'>
                    <div className='grid md:grid-cols-2 gap-2 '>
                        {
                            data?.project.map(item =>
                                <div className='mb-6   '>
                                    <div className='  md:h-[200px]'>
                                        <img className=' h-full   rounded-lg' src={item?.img} alt="" />
                                    </div>
                                    <p className='text-lg font-bold py-5'> Project:
                                        <span className='text-red-600'> {item?.name}</span></p>
                                </div>)
                        }
                    </div>
                    <div>
                        <p className='text-lg'>Total Module :
                            <span className='font-bold text-red-400 text-xl'>{data?.module}</span></p>
                        <p className='text-xl'>Total QUZ :
                            <span className='font-bold text-red-400 text-xl'>{data?.Que}</span></p>
                        <p className='text-xl'>Total Assignment :
                            <span className='font-bold text-red-400 text-xl'>{data?.assignment}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;