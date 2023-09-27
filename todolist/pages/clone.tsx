import React from "react";

export const Clone: React.FC = () => {
    return (
        <section className="mx-auto max-w-screen-xl">
            {/**
             * pl-16 pr-16 -> px-16
             * md -> 테일윈드에 쓰는 규칙이 있음
             * break point -> 768px 되어있음. 원래는 원본에 맞추는게 맞는데, * min-992로 맞추는게 좋겠다.
             
             */}
            <div className="flex h-screen pl-16 pr-16 min-w-full bg-neutral-700 items-center sm:flex-col sm:p-12 sm:pt-32 md:flex-col md:p-12 md:pt-32">
                {/**
                 * tracking-normal 삭제
                 * md:h-1/6,sm:h-1/6
                 */}
                <div className="flex w-6/12 flex-col h-full md:h-1/6 sm:h-1/6 lg:pr-30 justify-center trakcing-normal sm:justify-start sm:text-center sm:w-full md:justify-start md:text-center md:w-full">
                    {/**
                     * * h4 -> 이전 단계가 안나왔는데 h4는 지양
                     *   폰트 사이즈가 다르다.
                     */}
                    <p className="text-8xl font-light tracking-wide leading-none mb-8 text-white sm:text-4xl sm:mb-4 md:text-5xl md:mb-4">
                        Awards
                    </p>
                    {/**
                     * break-all -> break-keep
                     */}
                    <p className="text-xl font-light break-all leading-7 tracking-tighter text-neutral-400 md:text-sm sm:text-sm">
                        고객과 고객의 고객까지 만족시키는
                        <br /> 창의적인 디자인, 감각적인 움직임을 약속합니다.
                    </p>
                </div>
                {/**
                 * touch-pinch-zoom : 굳이 안해도 됀다.
                 *  inline-block, align-middle : 필요없다.
                 *
                 */}
                <ul className="m-0 p-0 w6/12 h-[700px] overflow-y-scroll sm:mt-16 sm:w-full sm:h-4/6 md:mt-16 md:w-full align-middle overflow-auto inline-block touch-pinch-zoom">
                    {/**
                     * li에는 table은 안된다.
                     * fist-child는 margin 0으로 해야한다.
                     * 단위를 테일윈드 유닛으로 맞춰야한다.
                     * flex또는 div로 감싸서 div flex로 해야한다. -> gap 또는 width를 주고 justify-between으로 해야한다.
                     * list를 가운데로 맞춰주면 좋을 것 같다.
                     * 연도와 수상내역이 라인이 안맞다.
                     */}
                    <li className="mb-4">
                        {/**
                         * 폰트 사이즈가 다르다.
                         *
                         * 1. margin
                         * 2. flex, justify-between
                         */}

                        <div>
                            <h4 className="table-cell text-white pr-10 text-5xl font-normal align-top tracking-wide md:text-xl sm:text-xl">
                                2020
                            </h4>
                            <ul className="text-gray ">
                                {/**
                                 * 폰트 사이즈가 다르다.
                                 */}
                                <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                    정부3.0서비스융합 부문 통합대상 수상(원더코드)
                                </li>
                                <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                    인프라/아키텍처 부문 인프라/아키텍처 수상(SRC 병원(본원))
                                </li>
                                <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                    디지털콘텐츠솔루션 부문 금상 수상(UBASE)
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-20 table">
                        <h4 className="table-cell text-white pr-10 text-5xl font-normal align-top tracking-wide md:text-xl sm:text-xl">
                            2019
                        </h4>
                        <ul className="text-gray ">
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                e-비즈니스 부문 대상 수상(본우리반상)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                UI/UX 디자인 부문 금상 수상(Airest)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                e-커머스 부문 은상 수상(오성과한음가구협동조합)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                크리에이티브 부문 은상 수상(세전예건)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                웹서비스 부문 은상 수상(앙쥬)
                            </li>
                        </ul>
                    </li>
                    <li className="mb-20 table">
                        <h4 className="table-cell text-white pr-10 text-5xl font-normal align-top tracking-wide md:text-xl sm:text-xl">
                            2018
                        </h4>
                        <ul className="text-gray ">
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                웹서비스 부문 대상 수상(내집)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                모바일 부문 금상 수상(작스모터스)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                e-비즈니스 부문 금상 수상(하이호주)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                e-커머스 부문 은상 수상(몽고식품)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                정부 3.0 서비스 융합 부문 은상 수상(한방진흥센터)
                            </li>
                        </ul>
                    </li>
                    <li className="mb-20 table">
                        <h4 className="table-cell text-white pr-10 text-5xl font-normal align-top tracking-wide md:text-xl sm:text-xl">
                            2017
                        </h4>
                        <ul className="text-gray ">
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                모바일분야 금상 수상(아트몰링)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                UX/UI 분야 우수상 수상 (인도네시아 Brain EduCenter)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                정부3.0서비스 융합 분야 우수상 수상 (디자인산업
                                국가인적자원개발컨소시엄)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                e-커머스분야 우수상 수상(BNS Smart Plaza)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                디지털 컨텐츠 솔루션분야 우수상 수상(하이파킹)
                            </li>
                        </ul>
                    </li>
                    <li className="mb-20 table">
                        <h4 className="table-cell text-white pr-10 text-5xl font-normal align-top tracking-wide md:text-xl sm:text-xl">
                            2016
                        </h4>
                        <ul className="text-gray ">
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                모바일분야 금상 수상(한양대학교 산학협력단)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                정부 3.0서비스 융합분야 은상 수상(한양대학교 대외협력처)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                정부3.0서비스 융합분야 우수상 수상 (화성시창의지성지원센터)
                            </li>
                        </ul>
                    </li>
                    <li className="mb-20 table">
                        <h4 className="table-cell text-white pr-10 text-5xl font-normal align-top tracking-wide md:text-xl sm:text-xl">
                            2015
                        </h4>
                        <ul className="text-gray ">
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                정부3.0서비스융합부문 대상 수상 (부천시자원순환센터)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                ICT K-AWARDS 디지털컨텐츠 부문 우수상 수상 (알로하테이블)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                정부3.0서비스 융합분야 우수상 수상 (화성시창의지성지원센터)
                            </li>
                        </ul>
                    </li>
                    <li className="mb-20 table">
                        <h4 className="table-cell text-white pr-10 text-5xl font-normal align-top tracking-wide md:text-xl sm:text-xl">
                            2013
                        </h4>
                        <ul className="text-gray ">
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                K-AWARDS 기업분야 최우수상 수상 (쓰리웨이)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                K-AWARDS 생활브랜드분야 우수상 수상 (라이프스포츠)
                            </li>
                        </ul>
                    </li>
                    <li className="mb-20 table">
                        <h4 className="table-cell text-white pr-10 text-5xl font-normal align-top tracking-wide md:text-xl sm:text-xl">
                            2012
                        </h4>
                        <ul className="text-gray ">
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                K-AWARDS 이벤트행사분야 최우수상 수상 (2012런던장애인올림픽대회)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                K-AWARDS 의료서비스분야 최우수상 수상 (하나이비인후과)
                            </li>
                        </ul>
                    </li>
                    <li className="mb-20 table">
                        <h4 className="table-cell text-white pr-10 text-5xl font-normal align-top tracking-wide md:text-xl sm:text-xl">
                            2011
                        </h4>
                        <ul className="text-gray ">
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                K-AWARD 문화레포츠부문 최우수상 수상 (인천한류관광콘서트)
                            </li>
                            <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight md:text-xs sm:text-xs">
                                K-AWARD 문화레포츠부문 우수상 수상 (국제농아인스포츠위원회)
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Clone;
