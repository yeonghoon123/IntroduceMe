/*
    ID: IM101
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 인사말 컴포넌트
    버전: V0.5
    버전 이력: V0.5
*/

import ProfieImg from "../../assets/detail/profile.jpg";

const Intro = ({ props }) => {
    const { introRef } = props;

    return (
        <>
            <div
                className="min-h-screen flex flex-row items-center justify-center bg-white"
                ref={introRef}
            >
                <div className="w-[128px] md:w-[200px] ml:w-48 ml:h-48 overflow-hidden mr-12">
                    <img
                        src={ProfieImg}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                <div>
                    <h1 className="text-4xl md:text-4xl font-bold text-left mb-8">
                        안녕하세요. <br />
                        3년차 풀스택 개발자 김영훈 입니다.
                    </h1>
                    <p className="text-xl md:text-xl">
                        저는 문제 해결을 위해 끊임없이 도전하는 성격을 가지고
                        있으며, <br />
                        새로운 기술을 배우는 것을 두려워하지 않습니다.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Intro;
