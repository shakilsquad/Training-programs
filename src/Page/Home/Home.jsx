import React, { useEffect, useState } from 'react';

import Navbar from './Shared/Navber/Navbar';
import Footer from './Shared/Footer/Footer';
import Banner from './Shared/Banner/Banner';
import CourseCart from '../../Componant/CourseCart/CourseCart';


const Home = () => {

    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('demo.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])


    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='container mx-auto'>
                <div className=''>
                    <h1 className='text-center py-1 md:py-9 md:text-5xl font-bold '>service section </h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {
                           course.map( courses => <CourseCart key={course.id} courses={courses} ></CourseCart>)
                        }

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;