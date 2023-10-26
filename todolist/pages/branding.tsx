import React from 'react';
export const Branding: React.FC = () => {
    return (
        <section className='mx-auto max-w-screen-xl'>
            <div className='relative'>
                <header className='fixed h-16 lg:h-24 w-full max-w-screen-xl flex bg-white'>
                    <div className="md:hidden w-2/12 flex flex-row justify-center items-center  cursor-all">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#7C7C7C"
                            className='h-10 p-1'
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className='w-6/12 h-full bg-white md:hidden'></div>
                    <div className='w-4/12 md:w-2/12 items-center justify-center flex md:text-2xl lg:text-3xl font-bold'>
                        <p>
                            graphic.
                        </p>
                    </div>
                    <div className='hidden w-10/12 md:flex md:h-16 lg:h-24 items-center justify-end md:text-base lg:text-lg font-bold text-[#A4A4A4]'>
                        <nav className='m-0 ml-auto md:h-16 lg:h-24'>
                            <ul className='flex'>
                                <li>
                                    <a
                                        href=''
                                        className='px-12 flex md:h-16 lg:h-24 items-center'>
                                        about
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=''
                                        className='px-12 flex md:h-16 lg:h-24 items-center'>
                                        works
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=''
                                        className='px-12 flex md:h-16 lg:h-24 items-center'>
                                        contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main>
                    <div className='w-full h-auto pt-[75px] md:pt-[150px] pb-5 md:pb-[25px] flex flex-col bg-white'>
                        <div className='grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-y-12 md:gap-x-20 lg:gap-x-32 px-14'>
                            <div className='w-full h-[446px] md:h-auto flex flex-col'>
                                <p className='text-lg font-bold'>
                                    Website
                                </p>
                                <p className='text-sm'>
                                    2020
                                </p>
                                <div className='h-full md:h-[480px] items-center flex overflow-hidden'>
                                    <img
                                        src='https://cdn.quv.kr/mtzteubf9/up/6018b3e1077ba_1920.jpg'
                                        className='w-full h-full object-cover md:h-auto'
                                    />
                                </div>
                            </div>
                            <div className='w-full h-[446px] md:h-auto flex flex-col'>
                                <p className='text-lg font-bold'>
                                    Mobile graphic
                                </p>
                                <p className='text-sm'>
                                    2020
                                </p>
                                <div className='h-full md:h-[480px] items-center flex overflow-hidden'>
                                    <img
                                        src='https://cdn.quv.kr/mtzteubf9/up/6018b3e10839a_1920.jpg'
                                        className='w-full h-full object-cover md:h-auto'
                                    />
                                </div>
                            </div>
                            <div className='w-full h-[446px] md:h-auto flex flex-col'>
                                <p className='text-lg font-bold'>
                                    Mobile UI/UX
                                </p>
                                <p className='text-sm'>
                                    2019
                                </p>
                                <div className='h-full md:h-[480px] items-center flex overflow-hidden'>
                                    <img
                                        src='https://cdn.quv.kr/mtzteubf9/up/6018b3e111262_1920.jpg'
                                        className='w-full h-full object-cover md:h-auto'
                                    />
                                </div>
                            </div>
                            <div className='w-full h-[446px] md:h-auto flex flex-col'>
                                <p className='text-lg font-bold'>
                                    Watch UI/UX
                                </p>
                                <p className='text-sm'>
                                    2019
                                </p>
                                <div className='h-full md:h-[480px] items-center flex overflow-hidden'>
                                    <img
                                        src='https://cdn.quv.kr/mtzteubf9/up/6018b3e12b932_1920.jpg'
                                        className='w-full h-full object-cover md:h-auto'
                                    />
                                </div>
                            </div>
                            <div className='w-full h-[446px] md:h-auto flex flex-col'>
                                <p className='text-lg font-bold'>
                                    Tab graphic
                                </p>
                                <p className='text-sm py-1.5 md:p-0'>
                                    2018
                                </p>
                                <div className='h-full md:h-[480px] items-center flex overflow-hidden'>
                                    <img
                                        src='https://cdn.quv.kr/mtzteubf9/up/6018b3e13b1ca_1920.jpg'
                                        className='w-full h-full object-cover md:h-auto'
                                    />
                                </div>
                            </div>
                            <div className='w-full h-[446px] md:h-auto flex flex-col'>
                                <p className='text-lg font-bold'>
                                    Mobile app
                                </p>
                                <p className='text-sm py-1.5 md:p-0'>
                                    2018
                                </p>
                                <div className='w-full h-full md:h-[480px] items-center flex overflow-hidden'>
                                    <img
                                        src='https://cdn.quv.kr/mtzteubf9/up/6018b3e13eaee_1920.jpg'
                                        className='w-full h-full object-cover md:h-auto'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className='w-full h-auto pt-14 md:pt-[125px] flex flex-col bg-white border-t-2'>
                        <div className='w-full h-auto md:h-96 px-9 md:px-24 flex flex-col md:flex-row md:justify-between items-start'>
                            <div className='w-full md:w-4/12 lg:w-5/12 h-auto text-4xl md:text-4xl lg:text-6xl font-bold'>
                                <p>
                                    <span className='mb-1'>
                                        /
                                    </span>
                                    <br />
                                    <span className='mb-1'>
                                        WE CREATIVE
                                    </span>
                                    <br />
                                    <span className='mb-1'>
                                        NEW BRANDING
                                    </span>
                                </p>
                            </div>
                            <div className='w-full md:w-5/12 h-full flex flex-col pt-10'>
                                <div className='h-2/6 text-sm lg:text-base'>
                                    <p className='mb-1'>
                                        <strong>
                                            Graphic
                                        </strong>
                                        은 브랜딩을 기반으로 그래픽, 웹, 모바일 등
                                    </p>
                                    <p className='mb-1'>
                                        디자인 전 분야를 제한 없이 진행합니다.
                                    </p>
                                    <p className='mb-1'>
                                        다년간 쌓아온 경험한 실력으로
                                    </p>
                                    <p className='mb-1'>
                                        <strong>
                                            Graphic
                                        </strong>
                                        만의 새로운 브랜드를 만들어 드립니다.
                                    </p>
                                </div>
                                <div className='h-full flex flex-col justify-between pt-10'>
                                    <div className='font-bold md:text-sm lg:text-base'>
                                        <p>
                                            <span className='text-[#939393]'>
                                                ADDRESS
                                            </span>
                                            Eulji-ro, Jung-gu, Seoul, Republic of Korea
                                        </p>
                                        <p>
                                            <span className='text-[#939393]'>
                                                CELL
                                            </span>
                                            02-1234-5678
                                        </p>
                                        <p>
                                            <span className='text-[#939393]'>
                                                EMAIL
                                            </span>
                                            graphic@quv.kr
                                        </p>
                                    </div>
                                    <div className=' h-20 md:h-16 p-4 pl-2 flex items-center'>
                                        <img src='https://vneikvnief.quv.kr/img/sc/sns/icon/Square-Black-30/Instagram.png' className='mr-4 w-[22px] h-[22px] rounded-lg'></img>
                                        <img src='https://vneikvnief.quv.kr/img/sc/sns/icon/Square-Black-30/Twitter.png' className='mr-4 w-[22px] h-[22px] rounded-lg'></img>
                                        <img src='https://vneikvnief.quv.kr/img/sc/sns/icon/Square-Black-30/Facebook.png' className='mr-4 w-[22px] h-[22px] rounded-lg'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-5 md:py-24 w-full h-auto md:h-[750px]'>
                        <div className='md:px-9 h-full flex'>
                            <img
                                src="https://vneikvnief.quv.kr/img/t/62/6018b8f82a8cb_1920.jpg"
                                className='w-6/12 object-cover md:pr-1'>
                            </img>
                            <img
                                src='https://vneikvnief.quv.kr/img/t/62/6018b8f82d423_1920.jpg'
                                className='w-6/12 object-cover md:pl-1'>
                            </img>
                        </div>
                    </div>
                    <div className='flex h-20 w-full md:hidden flex-col justify-center text-center'>
                        <p>
                            <strong>
                                Copyright©graphic. All Rights Reserved.
                            </strong>
                        </p>
                        <p>
                            Powerd by QUV
                        </p>
                    </div>
                </footer>
            </div>
        </section>
    );
}

export default Branding;