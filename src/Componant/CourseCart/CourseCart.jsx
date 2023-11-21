import React from 'react';
import { Link } from 'react-router-dom';

const CourseCart = ({ courses }) => {
    console.log(courses);
    const { id, category_name, course_name, price, description, thumbnail_img, module, project, assignment, title } = courses;
    return (
        <div>
            <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className='flex flex-row'>
                    <div className=''>
                        <div class="relative mx-4 md:w-[315px] md:h-[200px] mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                            <img
                                className='w-full'
                                src={thumbnail_img}
                                alt="ui/ux review check"
                            />
                        </div>
                        <div class="p-6">
                            <div class="flex items-center justify-between mb-3">
                                <h5 class="block font-sans md:text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                    {title}
                                </h5>
                                <p class="flex items-center gap-1.5 font-sans text-xl font-bold leading-relaxed text-blue-gray-900 antialiased">

                                    ${price}
                                </p>
                            </div>
                            <p class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                                {
                                    description.length > 200
                                        ? <p>{description.slice(0, 200)}
                                            <Link
                                                to={`/courses/${id}`}
                                                className='text-red-500 font-bold text-sm'
                                            >Read More...</Link></p>
                                        : description
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' flex-grow'>
                    <div class="p-6 pt-3">
                        <Link to={`/courses/${id}`}>
                            <button
                                class="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            >

                                view Details

                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCart;