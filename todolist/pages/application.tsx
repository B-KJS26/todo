import React from 'react';
export const Application: React.FC = () => {
    return (
        <section className="mx-auto max-w-screen-xl">
            <header className='flex h-12 md:h-20 lg:h-24 w-full items-center justify-start md:justify-center md:px-16 lg:px-28 bg-white'>
                <div className='w-1/6 h-full md:hidden flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className='w-4/6 md:w-2/6 text-xl font-bold flex justify-center md:justify-start'>
                    <h1>Application</h1>
                </div>
                <div className='w-5/6 text-base font-bold hidden md:block'>
                    <nav>
                        <ul className='flex justify-end'>
                            <li className='mx-5 text-[#569FFE]'>
                                <a href="">
                                    HOME
                                </a>
                            </li>
                            <li className='mx-5'>
                                <a href="">
                                    ABOUT
                                </a>
                            </li>
                            <li className='mx-5'>
                                <a href="">
                                    SERVICE
                                </a>
                            </li>
                            <li className='mx-5'>
                                <a href="">
                                    CONTACT US
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <section className="flex flex-col md:flex-row w-full h-[750px] md:h-[480px] lg:h-[600px] pt-14 bg-cover bg-center bg-no-repeat bg-[url('https://efefeff.quv.kr/img/t/70/619b2674946e1_1920.jpg')] text-white px-3.5 md:px-10 lg:px-14">
                    <div className="flex flex-col m-0 md:mt-12 lg:mt-20 w-full md:w-6/12 items-start font-bold h-3/6 md:h-auto">
                        <p className='text-4xl lg:text-5xl'>
                            Please,
                            <br />
                            make what
                            <br />
                            you want.
                            <br />
                        </p>
                        <p className='my-8 md:text-sm lg:text-base '>
                            Lorem ipsum dolor sit amet, nemore sapientem ei qui,
                            <br />
                            no pri indoctum prodesset, omnis quidam utroque nam ei.
                        </p>
                        <button className='w-32 text-sm border-white border-2 h-12 p-2'>
                            WELCOME
                        </button>
                    </div>
                    <div className="w-full md:w-6/12 flex items-end h-3/6 md:h-full bg-no-repeat bg-center bg-contain bg-[url('https://efefeff.quv.kr/img/t/70/619ad6883e67f_800.png')] ">
                    </div>
                </section>
            </main>
        </section>
    )
}

export default Application;