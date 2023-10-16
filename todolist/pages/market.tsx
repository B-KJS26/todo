export const Market: React.FC = () => {
    return (
        <section className="mx-auto max-w-screen-xl">
            <div className="flex items-center justify-center p-4">
                <p className="absolute text-white text-5xl lg:text-4xl">ABOUT - NOD</p>
                {/*원본페이지에서는 Text가 사라지고 그냥 완전 이미지로 대체*/}
                <img className="object-cover" src={"https://cdn.imweb.me/thumbnail/20230725/20c57c824ed56.png"}></img>
            </div>
        </section>
    );
}

export default Market;