import React from "react";

/**
 *
 * https://www.movementk.com/index.php?cont=five
 */

export const Clone: React.FC = () => {
    return (
        <section className="mx-auto max-w-screen-xl">
            <div className="flex h-screen px-16 min-w-full bg-neutral-700 items-center dt:flex-col dt:p-12 dt:pt-32">
                <div className="flex w-6/12 flex-col h-full dt:h-1/6 lg:pr-30 justify-center dt:text-center dt:w-full">
                    <p className="text-8xl font-light tracking-wide leading-none mb-8 text-white dt:text-7xl dt:mb-5 mob:text-4xl mob:mb-2.5">
                        Awards
                    </p>

                    <p className="text-xl font-light break-keep leading-7 tracking-tighter text-neutral-400 dt:text-lg mob:text-sm">
                        고객과 고객의 고객까지 만족시키는
                        <br /> 창의적인 디자인, 감각적인 움직임을 약속합니다.
                    </p>
                </div>
                <ul className="m-0 p-0 w-6/12 h-[700px] overflow-y-scroll sm:w-full sm:h-4/6 dt:mt-16 dt:w-9/12 overflow-auto">
                    <div className="flex flex-col gap-14">
                        <li className="flex">
                            <h2 className="text-white text-5xl -mt-1 font-normal pr-14 tracking-wide dt:text-4xl dt:pr-10 mob:pr-6 mob:text-2xl">
                                2020
                            </h2>
                            <ul className="text-gray">
                                <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight dt:text-base mob:text-sm">
                                    정부3.0서비스융합 부문 통합대상 수상(원더코드)
                                </li>
                                <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight dt:text-base mob:text-sm">
                                    인프라/아키텍처 부문 인프라/아키텍처 수상(SRC 병원(본원))
                                </li>
                                <li className="leading-6 mb-3.5 text-white opacity-60 font-light break-all tracking-tight dt:text-base mob:text-sm">
                                    디지털콘텐츠솔루션 부문 금상 수상(UBASE)
                                </li>
                            </ul>
                        </li>
                        <li className="flex">
                            <h2 className="text-white lg:text-5xl -mt-1 font-normal lg:pr-14 md:text-4xl md:pr-10 pr-6 text-2xl">
                                2019
                            </h2>
                            <ul className="mt-1">
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    e-비즈니스 부문 대상 수상(본우리반상)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    UI/UX 디자인 부문 금상 수상(Airest)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    e-커머스 부문 은상 수상(오성과한음가구협동조합)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    크리에이티브 부문 은상 수상(세전예건)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    웹서비스 부문 은상 수상(앙쥬)
                                </li>
                            </ul>
                        </li>
                        <li className="flex">
                            <h2 className="text-white lg:text-5xl -mt-1 font-normal lg:pr-14 tracking-wide md:text-4xl md:pr-10 pr-6 text-2xl">
                                2018
                            </h2>
                            <ul className="text-gray mt-1">
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    웹서비스 부문 대상 수상(내집)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    모바일 부문 금상 수상(작스모터스)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    e-비즈니스 부문 금상 수상(하이호주)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    e-커머스 부문 은상 수상(몽고식품)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    정부 3.0 서비스 융합 부문 은상 수상(한방진흥센터)
                                </li>
                            </ul>
                        </li>
                        <li className="flex">
                            <h2 className="text-white lg:text-5xl -mt-1 font-normal lg:pr-14 tracking-wide md:text-4xl md:pr-10 pr-6 text-2xl">
                                2017
                            </h2>
                            <ul className="text-gray mt-1">
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    모바일분야 금상 수상(아트몰링)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    UX/UI 분야 우수상 수상 (인도네시아 Brain EduCenter)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    정부3.0서비스 융합 분야 우수상 수상 (디자인산업
                                    국가인적자원개발컨소시엄)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    e-커머스분야 우수상 수상(BNS Smart Plaza)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    디지털 컨텐츠 솔루션분야 우수상 수상(하이파킹)
                                </li>
                            </ul>
                        </li>
                        <li className="flex">
                            <h2 className="text-white lg:text-5xl -mt-1 font-normal lg:pr-14 tracking-wide md:text-4xl md:pr-10 pr-6 text-2xl">
                                2016
                            </h2>
                            <ul className="text-gray mt-1">
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    모바일분야 금상 수상(한양대학교 산학협력단)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    정부 3.0서비스 융합분야 은상 수상(한양대학교 대외협력처)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    정부3.0서비스 융합분야 우수상 수상 (화성시창의지성지원센터)
                                </li>
                            </ul>
                        </li>
                        <li className="flex">
                            <h2 className="text-white lg:text-5xl -mt-1 font-normal lg:pr-14 tracking-wide md:text-4xl md:pr-10 pr-6 text-2xl">
                                2015
                            </h2>
                            <ul className="text-gray mt-1">
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    정부3.0서비스융합부문 대상 수상 (부천시자원순환센터)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    ICT K-AWARDS 디지털컨텐츠 부문 우수상 수상 (알로하테이블)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    정부3.0서비스 융합분야 우수상 수상 (화성시창의지성지원센터)
                                </li>
                            </ul>
                        </li>
                        <li className="flex">
                            <h2 className="text-white lg:text-5xl -mt-1 font-normal lg:pr-14 tracking-wide md:text-4xl md:pr-10 pr-6 text-2xl">
                                2013
                            </h2>
                            <ul className="text-gray mt-1">
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    K-AWARDS 기업분야 최우수상 수상 (쓰리웨이)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    K-AWARDS 생활브랜드분야 우수상 수상 (라이프스포츠)
                                </li>
                            </ul>
                        </li>
                        <li className="flex">
                            <h2 className="text-white lg:text-5xl -mt-1 font-normal lg:pr-14 tracking-wide md:text-4xl md:pr-10 pr-6 text-2xl">
                                2012
                            </h2>
                            <ul className="text-gray mt-1">
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    K-AWARDS 이벤트행사분야 최우수상 수상 (2012런던장애인올림픽대회)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    K-AWARDS 의료서비스분야 최우수상 수상 (하나이비인후과)
                                </li>
                            </ul>
                        </li>
                        <li className="flex">
                            <h2 className="text-white lg:text-5xl -mt-1 font-normal lg:pr-14 tracking-wide md:text-4xl md:pr-10 pr-6 text-2xl">
                                2011
                            </h2>
                            <ul className="text-gray mt-1">
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    K-AWARD 문화레포츠부문 최우수상 수상 (인천한류관광콘서트)
                                </li>
                                <li className="mb-3.5 text-neutral-400 font-light break-keep tracking-tight lg:text-base md:text-sm text-xs">
                                    K-AWARD 문화레포츠부문 우수상 수상 (국제농아인스포츠위원회)
                                </li>
                            </ul>
                        </li>
                    </div>
                </ul>
            </div>
        </section>
    );
};

export default Clone;
