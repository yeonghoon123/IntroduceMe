/*
    ID: IM101
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 인사말 컴포넌트
    버전: V0.5
    버전 이력: V0.5
*/

const Intro = ({ props }) => {
    const { introRef } = props;

    return (
        <>
            <div
                className="min-h-screen flex flex-col items-center justify-center bg-white"
                ref={introRef}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-center">
                    어서오세요. <br />
                    김영훈의 자기소개 페이지입니다.
                </h1>
            </div>
        </>
    );
};

export default Intro;
