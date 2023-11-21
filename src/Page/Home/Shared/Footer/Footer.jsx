import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#3a3a3a]'>
                <div className='px-1 grid md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto text-white py-10'>
                    <div>
                        <img src="https://i.ibb.co/VL7FZMH/icons8-laptop-coding-100.png" alt="" />
                        <div data-aos="fade-right" className='mt-5 '>
                            <ul className='space-y-2 '>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'>9876 543 210</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'>demo@gmail.com</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'>40 Baria Sreet 133/2 NewYork City, US</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className='text-xl mb-2 py-3'>FEATURED COURSES</h3>
                        </div>
                        <div>
                            <ul className='space-y-2'>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'>Starting Soon</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'>Just Added</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'>Most Viewed</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'>Top Paid</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className='text-xl mb-2 py-3'>CATEGORIES</h3>
                        </div>
                        <div>
                            <ul className='space-y-2'>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer' >Design</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'  >Development</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'  >Coding</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'  >Video Editing</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'  >Wordpress</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'  >Full Stack Developer</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'  >Software Development</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'  >Python Programming</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className='text-xl mb-2 py-3'>USEFUL LINKS</h3>
                        </div>
                        <div>
                            <ul className='space-y-2'>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'>FAQs</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'>Success Stories</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'>Shop</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'>Privacy policy</li>
                                <li className='hover:text-gray-500 duration-300 cursor-pointer'>Contact search</li>
                                <li data-aos="fade-right" className='hover:text-gray-500 duration-300 cursor-pointer'   >Jobs and vacancies</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <p className='text-center text-xl py-8'>
                <i class="fa fa-copyright" aria-hidden="true">Copyright 2023. All Rights Reserved. Shakil the sotto vhai </i>
            </p>
        </div>

    );
};

export default Footer;