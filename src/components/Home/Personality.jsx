/*
    ID: IM103
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 나의 성격 및 기술 컴포넌트
    버전: V0.5
    버전 이력: V0.5
*/

import { Link } from "react-router-dom";

const Personality = ({ props }) => {
    const { personalityRef } = props;

    const strengthData = [
        {
            title: "책임감이 강하다.",
            content:
                "책임감이 강하여 내가 맡은일에 대해 소홀히 하지 않고 끝까지 해내고 만다.",
        },
        {
            title: "정직하고 솔직한 피드백을 제공한다.",
            content:
                "상대방이 옳지 않게 생각하거나 얘기를 하면 피드백을 제공하여 바로 잡는다.",
        },
        {
            title: "긍정적이다.",
            content:
                "상대방이 의견을 내거나 나의 대해 피드백을 주었을때 긍정적으로 받아들여 협업에 용이하다.",
        },
        {
            title: "도전적이다.",
            content:
                "사용해보지 않은 언어를 배우거나 새로운 것을 시도하는 편이다.",
        },
    ];

    const skillsetData = [
        {
            title: "Front-end",
            content: "React, NextJs, VueJs",
        },
        {
            title: "Back-end",
            content: "NodeJs, ExpressJs",
        },
        {
            title: "Cloud Service",
            content:
                "AWS - EC2, Route53, CloudFront,S3, API Gateway, Lambda, DynamoDB",
            content2: "Google - Firebase",
        },
        {
            title: "DBMS",
            content: "Maria DB, PostgreSQL",
        },
    ];

    return (
        <>
            <div
                className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100"
                ref={personalityRef}
            >
                <div className="flex flex-col w-full min-h-[50%] bg-white rounded-lg shadow-md p-6 mb-12 grow">
                    <h2 className="text-xl font-semibold text-gray-800 mb-8">
                        저의 장점을 소개합니다.
                    </h2>
                    <ul className="flex flex-row w-full text-gray-600 flex-wrap">
                        {strengthData.map((value, index) => (
                            <li
                                className="w-full md:w-[50%] p-4 md:p-10"
                                key={`home_strength_${index}`}
                            >
                                <span className="font-bold text-xl">
                                    {value.title}
                                </span>
                                <br />
                                {value.content}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col w-full min-h-[50%] bg-white rounded-lg shadow-md p-6 mb-12 grow">
                    <h2 className="text-xl font-semibold text-gray-800 mb-8">
                        제가 잘하는 기술을 소개합니다.
                    </h2>
                    <ul className="flex flex-row w-full text-gray-600 flex-wrap">
                        {skillsetData.map((value, index) => (
                            <li
                                className="w-full md:w-[50%] p-4 md:p-10"
                                key={`home_skillset_${index}`}
                            >
                                <span className="font-bold text-xl">
                                    {value.title}
                                </span>
                                <br />
                                {value.content}
                                {value.content2 && (
                                    <>
                                        <br />
                                        {value.content2}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Personality;
