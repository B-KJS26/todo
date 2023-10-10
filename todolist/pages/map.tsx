import React from "react";
/*
  mdt: { max: '1280px'},
  wmob: { max: '960px' },
  smob: { max: '480px'},
  http://banobagiwellness.com
*/
export const Map: React.FC = () => {
    return (
        <section className="mx-auto max-w-screen-xl">
            <div className="flex md:px-8 md:w-full max-w-full md:space-between md:h-screen md:bg-gradient-to-t md:from-lime-50 md:to-white bg-none md:flex-row flex-col-reverse h-auto p-0">
                <div className="md:w-6/12 md:h-full md:pt-32 text-center items-center justify-center md:pb-24 md:px-8 h-96 w-full p-0 mb-12">
                    <div className="overflow-hidden w-full h-full">
                        <img
                            src="/images/JANDA.png"
                            alt="JANDA"
                            className="mx-auto w-full transform transition-transform ease-in-out"
                        />
                    </div>
                </div>
                <div className="md:w-6/12 h-full pt-32 pb-36 px-12 md:block hidden">
                    <div className="border-solid border-black border-t-2 ">
                        <p className="lg:text-3xl pt-12 px-2 text-2xl">
                            진료시간 및 오시는 길 안내
                        </p>
                        <p className="mt-12 mb-4 px-2 lg:text-2xl text-gray-400 text-xl">
                            오시는 길
                        </p>
                        <div className="flex justify-content px-2 items-end lg:flex-norwap flex-wrap">
                            <div className="lg:w-7/12 lg:text-2xl w-full text-xl">
                                <p>
                                    서울특별시 강남구 논현로 523 4층
                                    <br />
                                    (역삼동, 노바빌딩)
                                </p>
                                <p className="mt-2">02-538-6508</p>
                            </div>
                            <div className="xl:w-5/12 text-right w-full">
                                <p className="flex justify-end items-center">
                                    <span className="w-5 h-5 bg-green-500 text-white text-center rounded-full mr-1.5 leading-5 text-xs ">
                                        2
                                    </span>
                                    호선 역삼역 6번 출구 앞
                                </p>
                                <p className="flex justify-end items-center mt-1">
                                    <span className="w-5 h-5 bg-yellow-600 text-white text-center rounded-full mr-1.5 leading-5 text-xs">
                                        9
                                    </span>
                                    호선 언주역 7번 출구 앞
                                </p>
                            </div>
                        </div>
                        <div className="mt-12 mb-4 pt-12 px-2 border-solid border-black border-t">
                            <p className="xl:text-2xl text-gray-400 text-xl">진료시간 안내</p>
                        </div>
                        <div className="px-2">
                            <p className="flex items-center justify-start">
                                <span className="pr-2.5 xl:text-2xl font-normal tracking-wider text-xl">
                                    월 ~ 금
                                </span>
                                <span className="font-medium tracking-wide xl:text-2xl text-xl ">
                                    09:00 ~ 18:00
                                </span>
                            </p>
                            <p className="flex items-center justify-start mt-2">
                                <span className="pr-2.5 xl:text-2xl font-normal tracking-wider text-xl">
                                    월 ~ 금
                                </span>
                                <span className="font-medium tracking-wide xl:text-2xl text-xl">
                                    09:00 ~ 18:00
                                </span>
                            </p>
                            <p className="flex items-center justify-start mt-2">
                                <span className="pr-2.5 xl:text-2xl font-normal tracking-wider text-xl">
                                    월 ~ 금
                                </span>
                                <span className="font-medium tracking-wide xl:text-2xl text-xl ">
                                    09:00 ~ 18:00
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:hidden block w-full py-24 px-16">
                    <div className="flex flex-col justify-center items-center border-solid border-black border-t-2">
                        <div className="w-full max-w-lg text-center pt-12 px-2">
                            <p className="sm:text-3xl text-2xl">진료시간 및 오시는 길 안내</p>
                        </div>
                        <div className="w-full max-w-lg pt-12 sm:border-solid sm:border-black sm:border-t mt-12 mb-4 px-2 border-0">
                            <p className="text-xl text-gray-400">진료시간 안내</p>
                        </div>
                        <div className="w-full max-w-lg px-2 text-xl">
                            <p className="flex justify-start items-center">
                                <span className="w-28 pr-2.5 font-normal tracking-wider ">
                                    월 ~ 금
                                </span>
                                <span className="font-mideum tracking-wide">09:00 ~ 18:00</span>
                            </p>
                            <p className="flex justify-start items-center mt-2">
                                <span className="w-28 pr-2.5 font-normal tracking-wider">
                                    월 ~ 금
                                </span>
                                <span className="font-mideum tracking-wide">09:00 ~ 18:00</span>
                            </p>
                            <p className="flex justify-start items-center mt-2">
                                <span className="w-28 pr-2.5 font-normal tracking-wider">
                                    월 ~ 금
                                </span>
                                <span className="font-mideum tracking-wide">09:00 ~ 18:00</span>
                            </p>
                        </div>
                        <div className="w-full max-w-lg mt-12 mb-4 sm:px-2 sm:p-0 sm:border-0 border-solid border-black border-t pt-12">
                            <p className="font-medium text-xl text-gray-400">오시는 길</p>
                        </div>
                        <div className="flex items-end justify-between w-full max-w-lg flex-wrap px-2">
                            <div className="w-full text-xl">
                                <p>
                                    서울특별시 강남구 논현로 523 4층
                                    <br />
                                    (역삼동, 노바빌딩)
                                </p>
                            </div>
                            <div className="w-full mt-4 text-right">
                                <p className="flex justify-start items-center">
                                    <span className="w-5 h-5 text-sm bg-green-500 text-white mr-1.5 text-center rounded-full">
                                        2
                                    </span>
                                    호선 역삼역 6번 출구 앞
                                </p>
                                <p className="flex justify-start items-center mt-1">
                                    <span className="w-5 h-5 bg-yellow-600 text-white text-sm mr-1.5 text-center rounded-full">
                                        9
                                    </span>
                                    호선 언주역 7번 출구 앞
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;
