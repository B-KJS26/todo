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
                <section className="flex flex-col md:flex-row w-full h-[750px] md:h-[480px] lg:h-[600px] pt-14 bg-cover bg-center bg-no-repeat bg-[url('https://efefeff.quv.kr/img/t/70/619b2674946e1_1920.jpg')] text-white px-3.5 md:px-10 lg:px-24">
                    <div className="flex flex-col m-0 md:mt-12 lg:mt-20 w-full md:w-6/12 items-start font-bold h-3/6 md:h-auto">
                        <p className='text-4xl lg:text-5xl'>
                            Please,
                            <br />
                            make what
                            <br />
                            you want.
                            <br />
                        </p>
                        <p className='my-8 md:text-sm lg:text-base'>
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
                <section className='flex flex-col h-auto md:h-[400px] lg:h-[480px] w-full px-3.5 md:px-10 lg:px-14 md:py-20 justify-center items-center'>
                    <p className='text-xl md:text-2xl lg:text-3xl font-bold h-[90px] md:h-auto flex items-center'>
                        ABOUT APP
                    </p>
                    <div className='flex flex-col md:flex-row w-full justify-center items-center h-auto md:mt-10 lg:mt-16'>
                        <div className='flex flex-col w-full md:w-1/3 items-center text-center'>
                            <div className='w-24 h-24 md:w-20 md:h-auto lg:w-24 flex justify-center items-center bg-[#569FFE] rounded-full p-5'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="white"
                                    className="">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                    />
                                </svg>
                            </div>
                            <p className='text-xs md:text-sm mt-2 md:mt-8'>
                                <span className='text-lg md:text-2xl'>
                                    About app
                                </span>
                                <br />
                                Lorem ipsum dolor sit amet, nemore
                                <br />
                                sapientem ei qui, no pri indoctum
                            </p>
                        </div>
                        <div className='flex flex-col w-full md:w-1/3 items-center text-center mt-16 md:m-0'>
                            <div className='w-24 h-24 md:w-20 md:h-auto lg:w-24 flex justify-center items-center bg-[#569FFE] rounded-full p-5'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="white"
                                    className="">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                    />
                                </svg>
                            </div>
                            <p className='text-xs md:text-sm mt-2 md:mt-8'>
                                <span className='text-lg md:text-2xl'>
                                    About app
                                </span>
                                <br />
                                Lorem ipsum dolor sit amet, nemore
                                <br />
                                sapientem ei qui, no pri indoctum
                            </p>
                        </div>
                        <div className='flex flex-col w-full md:w-1/3 items-center text-center mt-16 mb-16 md:m-0'>
                            <div className='w-24 h-24 md:w-20 md:h-auto lg:w-24 flex justify-center items-center bg-[#569FFE] rounded-full p-5'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="white"
                                    className="">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                            </div>
                            <p className='text-xs md:text-sm mt-2 md:mt-8'>
                                <span className='text-lg md:text-2xl'>
                                    About app
                                </span>
                                <br />
                                Lorem ipsum dolor sit amet, nemore
                                <br />
                                sapientem ei qui, no pri indoctum
                            </p>
                        </div>
                    </div>
                </section>
                <section className='flex flex-col md:h-[700px] w-full items-center px-3.5 md:px-10 lg:px-14 py-20 bg-[#F6F6F6]'>
                    <p className='text-3xl font-bold'>SERVICE</p>
                    <div className='grid grid-cols-1 grid-rows-7 md:grid-cols-3 md:grid-rows-1 gap-y-2 h-full w-full mt-4'>
                        <div className='flex flex-col'>
                            <div className='w-full h-full flex flex-col justify-center items-end text-end px-3 mt-8 md:m-0'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                                <p className='text-xs md:text-sm'>
                                    <span className='text-base md:text-lg font-bold'>
                                        Application
                                    </span>
                                    <br />
                                    Lorem ipsum dolor sit amet, nemore
                                    <br />
                                    sapientem ei qui, no pri indoctum predesset
                                </p>
                            </div>
                            <div className='w-full h-full flex flex-col justify-center items-end text-end px-3 mt-8 md:m-0'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                                </svg>
                                <p className='text-xs md:text-sm'>
                                    <span className='text-base md:text-lg font-bold'>
                                        Application
                                    </span>
                                    <br />
                                    Lorem ipsum dolor sit amet, nemore
                                    <br />
                                    sapientem ei qui, no pri indoctum
                                </p>
                            </div>
                            <div className='w-full h-full flex flex-col justify-center items-end text-end px-3 mt-8 md:m-0'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                </svg>
                                <p className='text-xs md:text-sm'>
                                    <span className='text-base md:text-lg font-bold'>
                                        Application
                                    </span>
                                    <br />
                                    Lorem ipsum dolor sit amet, nemore
                                    <br />
                                    sapientem ei qui, no pri
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center ">
                            <img
                                src='https://efefeff.quv.kr/img/t/70/619adba03a7ba_800.png'
                                className='h-5/6 md:h-auto'
                            >
                            </img>
                        </div>
                        <div className='flex flex-col'>
                            <div className='w-full h-full flex flex-col justify-center items-start text-start px-3'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <p className='text-xs md:text-sm'>
                                    <span className='text-base md:text-lg font-bold'>
                                        Application
                                    </span>
                                    <br />
                                    Lorem ipsum dolor sit amet, nemore
                                    <br />
                                    sapientem ei qui, no pri indoctum predesset
                                </p>
                            </div>
                            <div className='w-full h-full flex flex-col justify-center items-start text-start px-3 mt-8 md:m-0'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                </svg>
                                <p className='text-xs md:text-sm'>
                                    <span className='text-base md:text-lg font-bold'>
                                        Application
                                    </span>
                                    <br />
                                    Lorem ipsum dolor sit amet, nemore
                                    <br />
                                    sapientem ei qui, no pri indoctum
                                </p>
                            </div>
                            <div className='w-full h-full flex flex-col justify-center items-start text-start px-3 mt-8 md:m-0'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                </svg>
                                <p className='text-xs md:text-sm'>
                                    <span className='text-base md:text-lg font-bold'>
                                        Application
                                    </span>
                                    <br />
                                    Lorem ipsum dolor sit amet, nemore
                                    <br />
                                    sapientem ei qui, no pri
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="h-[500px] md:h-[420px] lg:h-[500px] flex flex-col items-center justify-evenly text-center bg-cover bg-center bg-no-repeat bg-fixed bg-[url('https://efefeff.quv.kr/img/t/70/619adde326276_1920.jpg')] text-white px-4 py-16 md:px-0">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-14 h-14 md:w-16 md:h-16"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                    <p className='text-3xl md:text-3xl lg:text-4xl '>
                        Please, make what you want.
                    </p>
                    <p className='md:text-sm lg:text-base'>
                        Lorem ipsum dolor sit amet, nemore sapientem ei qui,
                        <br />
                        no pri indoctum prodesset, omnis quidam utroque nam ei.
                    </p>
                    <button className='h-11 w-28 md:h-8 md:w-20  lg:h-12 lg:w-28 border-white border-2 md:text-xs lg:text-sm font-bold md:py-1 lg:py-2.5 md:px-2 lg:px-6 mt-4'>
                        Button
                    </button>
                </section>
                <section className='h-[1200px] md:h-[750px] lg:h-[916px] flex flex-col pt-14 md:p-0'>
                    <div className='h-1/2 md:pt-20 px-4 md:px-24 flex md:flex-row flex-col justify-between'>
                        <div className="md:w-4/12 h-full bg-contain bg-center md:bg-cover bg-no-repeat bg-[url('https://efefeff.quv.kr/img/t/70/619ae33bd378d_800.png')]">
                        </div>
                        <div className='w-full md:w-7/12 h-full flex flex-col justify-center'>
                            <p className='text-2xl md:text-2xl lg:text-3xl font-bold'>
                                Please, make what you want.
                            </p>
                            <p className='text-xs md:text-sm mt-6'>
                                Lorem ipsum dolor sit amet, nemore sapientem ei qui,
                                <br />
                                no pri indoctum prodesset, omnis quidam utroque nam ei.
                                <br />
                                Ne utamur similique repudiandae eum.
                            </p>
                        </div>
                    </div>
                    <div className='h-1/2 md:pt-20 px-4 md:px-24 flex md:flex-row flex-col justify-between bg-[#F6F6F6]'>
                        <div className='w-full md:w-7/12 h-full flex flex-col justify-center items-end text-end'>
                            <p className='text-2xl md:text-2xl lg:text-3xl font-bold'>
                                Please, make what you want.
                            </p>
                            <p className='text-xs md:text-sm mt-6'>
                                Lorem ipsum dolor sit amet, nemore sapientem ei qui,
                                <br />
                                no pri indoctum prodesset, omnis quidam utroque nam ei.
                                <br />
                                Ne utamur similique repudiandae eum.
                            </p>
                        </div>
                        <div className="md:w-4/12 h-full bg-contain bg-center md:bg-cover bg-no-repeat bg-[url('https://efefeff.quv.kr/img/t/70/619ae33bd4f6b_800.png')]">
                        </div>
                    </div>
                    
                </section>
                <section className="h-[400px] md:h-80 lg:h-[400px] flex flex-col items-center justify-evenly text-center bg-cover bg-center bg-no-repeat bg-fixed bg-[url('https://efefeff.quv.kr/img/t/70/619aeb3d7b8db_1920.jpg')] text-white py-12 px-4 md:px-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-14 h-14 md:w-12 md:h-12 lg:w-14 lg:h-14"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                    <p className='text-3xl md:text-4xl'>
                        Download
                    </p>
                    <button className='h-11 w-44 md:h-10 md:w-40 lg:h-12 lg:w-48 border-white font-bold px-3 py-2 bg-gradient-to-r from-[#FF908A] to-[#9873D1] rounded-full mt-4 text-sm  md:text-base lg:text-lg'>
                        App Store
                    </button>
                    <button className='h-11 w-44 md:h-10 md:w-40 lg:h-12 lg:w-48 border-white font-bold px-3 py-2 text-black rounded-full mt-2 bg-white text-sm md:text-base lg:text-lg'>
                        Play Store
                    </button>
                </section>
                <section className="h-[330px] md:h-[270px] lg:h-[330px] flex flex-col items-center justify-evenly text-center bg-cover bg-center bg-no-repeat  bg-[url('/images/구글.png')] text-white py-12">

                </section>
            </main>
        </section>
    )
}

export default Application;