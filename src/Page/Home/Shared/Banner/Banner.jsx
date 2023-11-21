import React from 'react';

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url('https://i.ibb.co/m0Pf64c/w1.jpg')`,
            position: 'relative',
        }}
            className=' bg-cover bg-center h-[170px] md:h-[400px]  lg:h-[500px]'>
            <div className='relative'>
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for the overlay color
                    }}
                ></div>
                <div className='text-white relative  flex items-center z-10 h-[170px] md:h-[400px] lg:h-[500px]'>
                    <div className='m-auto w-[800px] text-center py-1'>
                        <div className='md:space-y-6'>
                            <h1 className='text-xl md:text-4xl lg:text-5xl font-bold  pt[50px]  '>Welcome To Our Web Coaching</h1>
                            <p className='text-[12px] md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                            <div>
                                <button
                                className='bg-purple-600 px-1 md:py-3 md:px-8 md:text-xl font-bold hover:bg-purple-900 duration-500 hover:border-2 border-2 '
                                >Read More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;


{/* <div style={
    { backgroundImage: `url('https://i.ibb.co/m0Pf64c/w1.jpg')` }}
    className='h-[170px] md:h-[400px] lg:h-[500px] bg-cover bg-center '>
    <div className='text-white bg-black'>
        <h1 className='py-10'>Banner section </h1>
    </div>
</div> */}