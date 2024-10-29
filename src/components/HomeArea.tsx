import React from 'react';
import Header from './Header';
import Image from 'next/image';

import homeLeft from '@/assets/static/home-left.png';
import homeRight from '@/assets/static/home-right.png';

const HomeArea = () => {
    return (
        <div>
            <Header />

            <main className="relative flex justify-center items-center min-h-screen bg-white">
                <div className="absolute left-0 top-0 bottom-0 hidden md:block">
                    <Image src={homeLeft} alt="Left Image" className="h-full w-auto" />
                </div>

                <div className="text-center z-10">
                    <img src="/path-to-your-logo.png" alt="SIBAQ Logo" className="mx-auto mb-4 h-16" />
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                        THE FESTIVAL<br /> OF CULTURES
                    </h1>
                    <button className="mt-8 px-6 py-2 border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                        Celebrate 🎉
                    </button>
                </div>

                <div className="absolute right-0 top-0 bottom-0 hidden md:block">
                    <Image src={homeRight} alt="Right Image" className="h-full w-auto" />
                </div>
            </main>
        </div>
    );
};

export default HomeArea;
