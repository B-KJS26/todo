export const Keyword: React.FC = () => {
    return (
        <section className="mx-auto max-w-screen-xl">
            <div className="p-8 transition-all ease-in-out">
                <div className="block w-full h-auto text-center justify-center">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-center">광고 대행사도 의뢰하는 마케팅 전문가 집단<br />
                        재계약율 90% , 비결이 뭘까요?</h2>
                </div>
                <div className="relative mt-16 pt-138 md:pt-35 md:mt-24 w-full h-0 px-auto bg-[url('/images/banner_m.jpg')] md:bg-[url('/images/banner.png')] bg-cover bg-center bg-no-repeat mx-auto rounded-3xl">
                    <div className="p-8">
                        <div className="absolute top-1/3 md:top-1/2 transform -translate-y-1/2">
                            <p className="pr-4 text-4xl sm:text-5xl md:text-4xl lg:text-[2.7rem] text-text-col font-extrabold sm:leading-tight md:leading-snug tracking-tighter">누구나 할 수 없는 것을<br/><span className="text-white">제시해 왔기 때문입니다.</span></p>
                            <p className="md:pt-12 pt-7 pr-4text-base sm:text-xl md:text-base lg:text-xl font-bold text-white">아무나 할 수 있는건 결코 마케팅이 아닙니다.</p>
                            <p className="text-white pr-4 leading-relaxed text-base sm:text-xl md:text-base lg:text-xl">클라이언트가 혼자만의 힘으로 해결할 수 없는 부분을<br/>서포트하여 도움을 주는 것이 진정 마케팅이고 실력입니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Keyword;