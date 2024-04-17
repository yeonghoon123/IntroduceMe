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

    return (
        <>
            <div
                className="min-h-screen flex items-center justify-center p-8 bg-gray-100"
                ref={personalityRef}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl min-h-128">
                    <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-8">
                            🔥 나의 장점
                        </h2>
                        <ul className="list-disc space-y-2 pl-5 text-gray-600">
                            <li>책임감이 강하다.</li>
                            <li>정직하고 솔직한 피드백을 제공한다.</li>
                            <li>긍정적이다.</li>
                            <li>도전적이다.</li>
                            <li>꼼꼼하다.</li>
                        </ul>
                        <Link to={"/details"} className="md:mt-auto mt-8">
                            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                자세히 보기
                            </button>
                        </Link>
                    </div>

                    <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-8">
                            💻 기술 스택
                        </h2>
                        <ul className="list-disc space-y-2 pl-5 text-gray-600">
                            <li>Frontend: React, NextJs, VueJs</li>
                            <li>Backend: NodeJs</li>
                            <li>
                                CloudService: AWS EC2, Route53, API Gateway,
                                Lambda
                            </li>
                            <li>
                                DataBase: MySQL, PostgreSQL, Firebase, DynamoDB
                            </li>
                        </ul>
                        <Link to={"/details"} className="md:mt-auto mt-8">
                            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                자세히 보기
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Personality;
