export const Handcare: React.FC = () => {
    return (
        <section className="mx-auto max-w-screen-xl">
            {/* 헤더와 메인페이지 */}
            <section className="h-auto">
                {/* 헤더 */}
                <div className="fixed md:absolute flex w-full max-w-screen-xl top-0 h-32 items-center text-center justify-between">
                    <div className="min-w-[100px] w-[150px] flex justify-center">
                        <img src={"/images/handcare/logo.png"}></img>
                    </div>
                    <div className="hidden md:text-lg lg:text-xl text-white md:flex flex-row font-bold justify-center">
                        <nav>
                            <ul className="flex">
                                <li className="px-8">about</li>
                                <li className="px-8">service</li>
                                <li className="px-8">news</li>
                                <li className="px-8">contact</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="hidden md:flex justify-end px-5">
                        <a href="https://www.kakaocorp.com/page/service/service/KakaoTalk" className="mx-1.5">
                            <img src={"/images/handcare/KakaoTalk.png"} />
                        </a>
                        <a href="https://www.instagram.com/" className="mx-1.5">
                            <img src={"/images/handcare/Instagram.png"} />
                        </a>
                        <a href="https://mkt.naver.com/p1/blog-20th-anniversary" className="mx-1.5">
                            <img src={"/images/handcare/NaverBlog.png"} />
                        </a>
                    </div>
                    <div className="md:hidden min-w-[100px] flex justify-end pr-10">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>

                    </div>
                </div>
                <div className="h-[640px] md:h-[760px] lg:h-[920px] p-10 text-4xl lg:text-5xl text-white font-bold bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/1.jpg')] flex flex-col justify-center">
                    <h2>I'll make you<br />beautiful hands.</h2>
                    <div className="absolute flex justify-center bottom-[470px] md:bottom-[340px] lg:bottom-48 left-1/2 -translate-x-2/4 h-5">
                        <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
                        <div className="w-4 h-4 bg-black border-white-400 border-2 rounded-full mx-2"></div>
                    </div>
                </div>
            </section>
            {/* HandCare Concept */}
            <section className="pt-24 h-auto md:h-[950px] flex flex-wrap">
                <div className="bg-white h-full px-6 md:px-4 lg:px-8 py-20 md:w-5/12 w-full flex justify-center md:block">
                    <div className="flex-col">
                        <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold">Hand Care<br />Concept</h2>
                        <div className="md:text-sm lg:text-base">
                            <p className="mt-8">
                                하루종일 움직이는 손, 핸드케어는 핸드케어 및 네일 아트 등<br />
                                손에 관한 모든 케어를 담당하고 있습니다.<br />
                                하루종일 움직이는 손, 핸드케어는 핸드 케어 및 네일 아트등 손에 관한<br />
                                모든 케어를 담당하고 있습니다.<br />
                            </p>
                            <p className="mt-8">
                                하루종일 움직이는 손, 핸드케어는 핸드케어 및 네일 아트 등<br />
                                손에 관한 모든 케어를 담당하고 있습니다.<br />
                                하루종일 움직이는 손, 핸드케어는 핸드 케어 및 네일 아트등 손에 관한<br />
                                모든 케어를 담당하고 있습니다.<br />
                            </p>
                        </div>

                        <button className="mt-24 min-w-[130px] w-4/12 h-11 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white font-bold">about →</button>
                    </div>
                </div>
                <div className="md:w-7/12 w-full lg:h-full flex flex-col md:flex-row px-6 md:p-0 md:pr-4">
                    <div className="flex flex-col w-full h-96 md:h-full md:pb-24">
                        <div className="h-full bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/sample1.jpg')]"></div>
                    </div>
                    <div className="flex flex-col w-full h-96 md:h-full md:pt-24">
                        <div className="h-full bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/sample2.jpg')]"></div>
                    </div>
                </div>
            </section>
            {/* Hand care makes your hands beautiful.*/}
            <section className="pt-24 px-6 md:px-0 w-full h-[800px] md:h-[650px]">
                <p className="text-3xl lg:text-4xl font-bold">Hand care makes<br />your hands beautiful.</p>
                <div className="h-96 md:h-56 lg:h-72 w-full py-8 flex flex-wrap md:flex-nowrap border-0">
                    <img className="w-1/3 md:w-full bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/list1.jpg')]"></img>
                    <img className="w-1/3 md:w-full bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/list2.jpg')]"></img>
                    <img className="w-1/3 md:w-full bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/list3.jpg')]"></img>
                    <img className="w-1/3 md:w-full bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/list4.jpg')]"></img>
                    <img className="w-1/3 md:w-full bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/list5.jpg')]"></img>
                    <img className="w-1/3 md:w-full bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/list6.jpg')]"></img>
                </div>
                <p className="text-xl md:text-2xl font-bold">@ Hand_Care</p>
                <p className="text-sm md:text-base mt-1.5">문의 및 예약은 인스타그램 DM으로도 받습니다.</p>
                <p className="text-xs md:text-sm mt-4">인스타그램 연동시, 인스타그램 컨텐츠를 추가하고 위 갤러리를 삭제하세요. ( 갤러리 컨텐츠 그대로 활용하셔도 좋습니다. )</p>
            </section>
            {/*스와이프 페이지*/}
            <section className="h-[920px] md:h-[820px] flex flex-col w-full bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/background.png')] py-14 items-center">
                <div className="w-11/12 md:w-10/12">
                    <div className="flex flex-col md:flex-row  md:pt-20 w-full">
                        <p className="flex items-end text-3xl lg:text-4xl font-bold md:w-6/12 w-full text-white h-24 grow">I'll make you<br />beautiful hands.</p>
                        <p className="text-white md:text-sm lg:text-base h-24 flex items-center md:items-end">하루종일 움직이는 손, 핸드케어는 핸드 케어 및 네일 아트 등<br />손에 관한 모든 케어를 담당하고 있습니다.</p>
                    </div>
                    <div className="w-full bg-white h-[590px] md:h-[430px] mt-7 p-7 text-black">
                        <div className="flex flex-col text-2xl items-center">
                            <p>| 01 |</p>
                            <p className="font-bold pt-5 md:p-0">Nail Design</p>
                            <div className="flex flex-col md:flex-row w-full pt-4 md:mt-20">
                                <div className="md:w-7/12">
                                    <h2 className="text-xl">차별화된 네일디자인</h2>
                                    <p className="text-sm md:text-base mt-4 text-zinc-400">
                                        핸드케어는 다른 곳과 다른<br />
                                        차별화된 자체적인 네일 디자인과 기술로<br />
                                        고객분께 건강하고 아름다운<br />
                                        네일을 만들어 드립니다.</p>
                                </div>
                                <div className="h-[220px] md:m-0 mt-20 md:w-5/12 bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/nail.jpg')]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*스와이프 아래*/}
            <section className="h-[1900px] md:h-[1200px] lg:h-[1400px] flex flex-col">
                <div className="w-full h-1/2 flex flex-col md:flex-row">
                    <div className="py-16 md:py-40 md:px-10 px-20 w-full md:w-1/2 h-3/4 md:h-full flex flex-col md:flex-row bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/bgone.jpg')]">
                        <div className="w-full h-auto">
                            <p className="text-3xl md:text-2xl lg:text-4xl font-bold">Professional<br />Service</p>
                            <p className="md:text-sm text-base font-bold mt-8">전문적인 서비스</p>
                        </div>
                        <div className="w-full h-full mt-8 md:m-0 bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/bgone1.jpg')]">
                        </div>
                    </div>
                    <div className="flex md:w-1/2 w-full items-center">
                        <div className="h-[283px] hidden md:flex border-r-2 border-gray-300 md:w-[30px] lg:w-[50px]"></div>
                        <div className="flex flex-row md:flex-col md:ml-8 lg:ml-14 w-full h-[283px] md:justify-between justify-center">
                            <div className="flex-col flex justify-center">
                                <p className="text-xl md:text-base lg:text-xl">핸드케어는 전문적인 스킬과 디자인을 제공합니다.</p>
                                <p className="text-base mt-2 md:m-0 md:text-sm">핸드케어는 전문적인 스킬과 차별화된 디자인으로<br />
                                    고객 한분 한분께 1:1 맞춤 케어 및 아트를 제공해드립니다.</p>
                                <button className="mt-14 md:mt-24 min-w-[120px] w-3/12 h-11 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white font-bold">notice →</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-1/2 flex flex-col md:flex-row">
                    <div className="flex md:w-1/2 w-full items-center">
                        <div className="h-[283px] hidden md:flex border-r-2 border-gray-300 md:w-[30px] lg:w-[50px]"></div>
                        <div className="flex flex-row md:flex-col md:ml-8 lg:ml-14 w-full h-[283px] md:justify-between justify-center">
                            <div className="flex-col flex justify-center">
                                <p className="text-xl md:text-base lg:text-xl">핸드케어는 코스별 케어를 추구합니다.</p>
                                <p className="text-base mt-2 md:m-0 md:text-sm">핸드케어는 전문적인 스킬과 차별화된 디자인으로<br />
                                    고객 한분 한분께 1:1 맞춤 케어 및 아트를 제공해드립니다.</p>
                                <button className="mt-14 md:mt-24 min-w-[120px] w-3/12 h-11 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-white font-bold">service →</button>
                            </div>
                        </div>
                    </div>
                    <div className="py-16 md:py-40 md:px-10 px-20 w-full md:w-1/2 h-3/4 md:h-full flex flex-col md:flex-row bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/bgone.jpg')]">
                        <div className="w-full h-auto">
                            <p className="text-3xl md:text-2xl lg:text-4xl font-bold">Course<br />and Price</p>
                            <p className="md:text-sm text-base font-bold mt-8">서비스 별 코스</p>
                        </div>
                        <div className="w-full h-full mt-8 md:m-0 bg-cover bg-center bg-no-repeat bg-[url('/images/handcare/bgtwo2.jpg')]">
                        </div>
                    </div>
                </div>
            </section>
            {/*푸터*/}
            <section className="pt-24 w-full">
                <div className="w-full h-[25px] border-b-2 border-gray-200"></div>
                <div className="w-full h-[420px] py-8 px-4 flex flex-col md:flex-row">
                    <div className="w-full md:hidden md:w-4/12 flex flex-col justify-center items-center text-center mb-16">
                        <img className="md:m-0 mb-8" src={"/images/handcare/logo_black.png"}></img>
                        <div className="border-t-2">
                            <p className="mt-12 text-gray-400 hidden md:flex">Hand care & Beauty<br />shop</p>
                            <p className="mt-6 text-gray-400 md:hidden">Hand care & Beauty shop</p>
                            <div className="md:hidden flex-row flex justify-center mt-4">
                                <a href="https://www.kakaocorp.com/page/service/service/KakaoTalk" className="mx-1.5">
                                    <img src={"/images/handcare/KakaoTalk.png"} />
                                </a>
                                <a href="https://www.instagram.com/" className="mx-1.5">
                                    <img src={"/images/handcare/Instagram.png"} />
                                </a>
                                <a href="https://mkt.naver.com/p1/blog-20th-anniversary" className="mx-1.5">
                                    <img src={"/images/handcare/NaverBlog.png"} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-4/12 pt-16 md:pt-0 font-bold text-sm flex flex-col items-center text-center justify-center md:jusitfy-center md:text-start md:items-start md:border-r-2 border-t-2 md:border-t-0">
                        <p className="tesx">NAIL</p>
                        <div className="mt-7 md:mt-10">
                            <p className="text-xl text-coloring">Tel. 02-1234-5678</p>
                            <p className="mb-10 mt-2 md:m-0">서울특별시 마포구 서교동 A빌딩 3F</p>
                        </div>
                        <div className="pt-10 border-t-2">
                            <p className="text-coloring">운영시간</p>
                            <p>평일 <span className="font-normal">|</span> 09:00 ~ 21:00</p>
                            <p>주말 <span className="font-normal">|</span> 09:00 ~ 20:00</p>
                        </div>
                    </div>
                    <div className="hidden w-4/12 md:flex flex-col justify-center items-center text-center">
                        <img src={"/images/handcare/logo_black.png"}></img>
                        <p className="mt-12 text-gray-400">Hand care & Beauty<br />shop</p>
                    </div>
                    <div className="md:w-4/12 font-bold text-sm flex flex-col justify-center items-center md:border-l-2 mt-10 border-t-2 md:border-t-0">
                        <p className="mt-14">문의 및 예약</p>
                        <button className="text-white bg-coloring w-40 h-11 mt-8 mb-16">Contact Us</button>
                    </div>
                </div>

            </section>
            <div className="absolute b-0 w-full h-9 md:hidden bg-coloring"></div>
        </section>
    );
}
export default Handcare;