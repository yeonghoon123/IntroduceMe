import React from "react";

const Home = () => {
    return (
        <div className="flex h-full flex-col justify-center">
            <div className="border w-full mx-auto text-center">
                <h1 className="text-lg font-bold">
                    어서오세요. <br />
                    김영훈 자기소개 페이지입니다.
                </h1>
            </div>
            <div className="border w-full mx-auto text-center">
                <h1 className="text-lg font-bold">간단 소개</h1>
                <span>
                    안녕하세요. 현재 Soynet에 재직중인 주니어 디벨롭 김영훈
                    입니다.
                    <br />
                    주로 맡고 있는 업무는 풀스택과 인프라를 담당하고 있습니다.
                </span>
            </div>
            <div className="border w-full mx-auto text-center">
                <h1 className="text-lg font-bold">자신의 성격</h1>
                <span>
                    제 성격은 활발하면서 나에게 할당된 일에 대해서는 책임을 질
                    수 있는 책임감을 갖고있습니다.
                    <br />
                    상대방의 기분을 생각하며 말하며 회사에서 의사소통이 잘 되는
                    편입니다.
                </span>
            </div>
            <div className="border w-full mx-auto text-center">
                <h1 className="text-lg font-bold">경력 및 학력</h1>
                <li>Soynet - 2021.02.15 ~ </li>

                <li>
                    한국폴리텍 I 대학 성남캠퍼스(전자정보통신과) - 2021.03. ~
                    2023.02
                </li>
                <li>삼일상업고등학교(IT경영과) - 2018.03. ~ 2021.02</li>
            </div>
            <div className="border w-full mx-auto text-center">
                <h1 className="text-lg font-bold">자신의 성격</h1>
                <span>
                    제 성격은 활발하면서 나에게 할당된 일에 대해서는 책임을 질
                    수 있는 책임감을 갖고있습니다.
                    <br />
                    상대방의 기분을 생각하며 말하며 회사에서 의사소통이 잘 되는
                    편입니다.
                </span>
            </div>
        </div>
    );
};

export default Home;
