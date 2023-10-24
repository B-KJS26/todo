import React from "react";

export const Care: React.FC = () => {
    return (
        <section className="mx-auto max-w-screen-xl relative">
            <header className="absolute top-0 left-0 right-0 w-full z-10 flex items-center justify-between text-white h-[80px] md:h-[120px] px-6 md:px-10 ">
                <div className="flex items-center">
                    <img
                        width={"70"}
                        height={"50"}
                        src={"/images/handcare/logo.png"}
                        alt="히어로 이미지"
                    />
                </div>
                <nav className="hidden md:block text-lg font-bold">
                    <ul className="flex">
                        <li className="px-8">
                            <a href="">about</a>
                        </li>
                        <li className="px-8">
                            <a href="">service</a>
                        </li>
                        <li className="px-8">
                            <a href="">news</a>
                        </li>
                        <li className="px-8">
                            <a href="">contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="hidden md:flex  gap-2">
                    <a href="https://www.kakaocorp.com/page/service/service/KakaoTalk">
                        <img src={"/images/handcare/KakaoTalk.png"} />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={"/images/handcare/Instagram.png"} />
                    </a>
                    <a href="https://mkt.naver.com/p1/blog-20th-anniversary">
                        <img src={"/images/handcare/NaverBlog.png"} />
                    </a>
                </div>
                <div className="md:hidden flex items-center p-4 -mr-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-8 h-8"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </header>
            <main>
                {/* Hero */}
                <section className="h-[640px] md:h-[760px] lg:h-[920px] relative bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/1.jpg')] text-white">
                    <div className="flex items-center h-full p-4 md:p-8">
                        <h2 className="ml-4 md:ml-8">
                            <span className="text-4xl font-bold">
                                I'll make you
                                <br />
                                beautiful hands.
                            </span>
                        </h2>
                    </div>
                </section>
                {/* HandCare Concept */}
                <section className="p-4 md:p-8 mt-12 md:mt-24">
                    <div className="flex md:flex-row flex-col md:gap-x-8 w-full ">
                        <div className="md:w-[35%] ml-8 md:ml-0 ">
                            <h2>
                                <span className="text-4xl font-bold">
                                    Hand Care
                                    <br />
                                    Concept
                                </span>
                            </h2>
                            <div className="flex flex-col gap-y-2 mt-8 font-light">
                                <p>
                                    하루종일 움직이는 손, 핸드케어는 핸드케어 및 네일 아트 등<br />
                                    손에 관한 모든 케어를 담당하고 있습니다.
                                    <br />
                                    하루종일 움직이는 손, 핸드케어는 핸드 케어 및 네일 아트등 손에
                                    관한
                                    <br />
                                    모든 케어를 담당하고 있습니다.
                                    <br />
                                </p>
                                <p className="mt-4">
                                    하루종일 움직이는 손, 핸드케어는 핸드케어 및 네일 아트 등<br />
                                    손에 관한 모든 케어를 담당하고 있습니다.
                                    <br />
                                    하루종일 움직이는 손, 핸드케어는 핸드 케어 및 네일 아트등 손에
                                    관한
                                    <br />
                                    모든 케어를 담당하고 있습니다.
                                    <br />
                                </p>
                            </div>
                            <div className="mt-24">
                                <button className="min-w-[130px] px-3 py-2  h-11  bg-[#be9f82] rounded-full text-white  flex items-center justify-center">
                                    about →
                                </button>
                            </div>
                        </div>
                        <div className="flex md:w-[65%] flex-col md:flex-row mt-24 md:mt-0">
                            <div className="md:flex-1 w-full md:w-auto aspect-video md:aspect-auto md:h-[750px] bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/sample1.jpg')]"></div>
                            <div className="md:flex-1 w-full md:w-auto aspect-video md:aspect-auto md:h-[750px] bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/sample2.jpg')] md:mt-24"></div>
                        </div>
                    </div>
                </section>
                {/* Hand care makes your hands beautiful.*/}
                <section className="p-4 md:p-8 mt-12 md:mt-24">
                    <p className="text-3xl lg:text-4xl font-bold">
                        Hand care makes
                        <br />
                        your hands beautiful.
                    </p>
                    <div className="w-full mt-8 flex flex-wrap md:flex-nowrap border-none">
                        <img className="w-1/3 md:w-1/6" src={"/images/handcare/list1.jpg"}></img>
                        <img className="w-1/3 md:w-1/6" src={"/images/handcare/list2.jpg"}></img>
                        <img className="w-1/3 md:w-1/6" src={"/images/handcare/list3.jpg"}></img>
                        <img className="w-1/3 md:w-1/6" src={"/images/handcare/list4.jpg"}></img>
                        <img className="w-1/3 md:w-1/6" src={"/images/handcare/list5.jpg"}></img>
                        <img className="w-1/3 md:w-1/6" src={"/images/handcare/list6.jpg"}></img>
                    </div>
                    <div className="mt-8">
                        <p className="text-xl md:text-2xl font-bold">@ Hand_Care</p>
                        <p className="text-sm md:text-base mt-1.5">
                            문의 및 예약은 인스타그램 DM으로도 받습니다.
                        </p>
                        <p className="text-xs md:text-sm mt-4">
                            인스타그램 연동시, 인스타그램 컨텐츠를 추가하고 위 갤러리를 삭제하세요.
                            ( 갤러리 컨텐츠 그대로 활용하셔도 좋습니다. )
                        </p>
                    </div>
                </section>
                <section className=" p-4 md:p-8 pt-12 mt-12 md:mt-24 bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/background.png')] h-[920px] md:h-[820px] text-white">
                    <div className="p-0 md:p-8 md:px-12 h-full flex flex-col justify-around">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <p className="text-3xl font-bold">
                                I'll make you
                                <br />
                                beautiful hands.
                            </p>
                            <p className="font-light mt-4">
                                하루종일 움직이는 손, 핸드케어는 핸드 케어 및 네일 아트 등<br />
                                손에 관한 모든 케어를 담당하고 있습니다.
                            </p>
                        </div>
                        <div className="bg-white  md:h-[430px] p-4 md:p-12  flex flex-col text-black">
                            <div className="flex flex-col w-full justify-center items-center ">
                                <p>{"3"}</p>
                                <p className="text-2xl font-bold">{"Nail Design"}</p>
                            </div>
                            <div className="mt-8 flex flex-col md:flex-row md:justify-between md:items-center h-full">
                                <div className="flex flex-col justify-center">
                                    <p className="text-xl ">{"에프터 케어 서비스"}</p>
                                    <p className="font-light mt-2">
                                        핸드케어는 다른 곳과 다른
                                        <br />
                                        차별화된 자체적인 네일 디자인과 기술로
                                        <br />
                                        고객분께 건강하고 아름다운
                                        <br />
                                        네일을 만들어 드립니다.
                                    </p>
                                </div>
                                <div className="mt-8 md:mt-0">
                                    <div className="h-[220px] w-full md:w-[350px]  bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/nail.jpg')]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
};

export default Care;
