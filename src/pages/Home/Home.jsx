import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
    const container = useRef();
    const circle = useRef();

    useGSAP(
        () => {
            // use selectors...
            // or refs...
        },
        { scope: container }
    ); //

    return (
        <div className="flex flex-col" ref={container}>
            <div className="flex justify-center items-center border w-full h-screen box">
                <h1 className="text-6xl font-bold ">
                    <span>어서오세요.</span> <br />
                    김영훈 자기소개 페이지입니다.
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center border w-full h-screen box">
                <span className="text-3xl">
                    안녕하세요.
                    <br /> 현재 Soynet에 재직중인 주니어 디벨롭 김영훈 입니다.
                </span>
            </div>
            <div className="flex justify-center items-center border w-full h-screen box">
                <div className="m-12 p-8 min-h-96 border">
                    <span>나의 장점</span>
                    <li>Soynet - 2021.02.15 ~ </li>
                    <li>
                        주요 업무
                        <li>
                            SoyNatrue - 2023. 11 ~ 진행형
                            <li>DevOps 시스템 개발 총 담당 및 운영</li>
                        </li>
                        <li>
                            SoyMarket - 2022. 04 ~ 진행형
                            <li>
                                Soynet MarketPlace 프로젝트 페이지 운영 및 기능
                                개선
                            </li>
                        </li>
                        <li>
                            SoyStudy - 2023. 11 ~ 진행형
                            <li>Soynet Untact CBT 프로젝트 homepage 담당</li>
                        </li>
                    </li>
                </div>
                <div className="m-12 p-8 min-h-96 border">
                    <span>나의 단점</span>
                    <li>
                        한국폴리텍 I 대학 성남캠퍼스(전자정보통신과) - 2021.03.
                        ~ 2023.02
                    </li>
                    <li>삼일상업고등학교(IT경영과) - 2018.03. ~ 2021.02</li>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center border w-full h-screen box">
                <div className="m-12 p-8 min-h-96 border">
                    <span>경력</span>
                    <li>Soynet - 2021.02.15 ~ </li>
                    <li>
                        주요 업무
                        <li>
                            SoyNatrue - 2023. 11 ~ 진행형
                            <li>DevOps 시스템 개발 총 담당 및 운영</li>
                        </li>
                        <li>
                            SoyMarket - 2022. 04 ~ 진행형
                            <li>
                                Soynet MarketPlace 프로젝트 페이지 운영 및 기능
                                개선
                            </li>
                        </li>
                        <li>
                            SoyStudy - 2023. 11 ~ 진행형
                            <li>Soynet Untact CBT 프로젝트 homepage 담당</li>
                        </li>
                    </li>
                </div>
                <div className="m-12 p-8 min-h-96 border">
                    <span>학력</span>
                    <li>
                        한국폴리텍 I 대학 성남캠퍼스(전자정보통신과) - 2021.03.
                        ~ 2023.02
                    </li>
                    <li>삼일상업고등학교(IT경영과) - 2018.03. ~ 2021.02</li>
                </div>
            </div>
            <div className="flex flex-col items-center border w-full h-screen box">
                <span></span>
            </div>
        </div>
    );
};

export default Home;
