/*
    ID: IM104
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 경력 및 학력 컴포넌트
    버전: V0.5
    버전 이력: V0.5
*/
import { Link } from "react-router-dom";

const Advantage = ({ props }) => {
    const { advantageRef } = props;

    return (
        <>
            <div
                className="min-h-screen flex items-center justify-center p-8 bg-gray-200"
                ref={advantageRef}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl min-h-128">
                    <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-8">
                            🏢 경력
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold">SoyNet</h3>
                                <p className="text-gray-600">
                                    2021.02.15 - 현재
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">SoyNature</h3>
                                <p className="text-gray-600">
                                    MLOps 시스템 개발 및 운영 총괄
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">
                                    Marketplace
                                </h3>
                                <p className="text-gray-600">
                                    Marketplace 홈페이지 개발 및 운영
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">
                                    SoyStudy Untact CBT
                                </h3>
                                <p className="text-gray-600">
                                    홈페이지 개발 및 운영
                                </p>
                            </div>
                        </div>
                        <Link to={"/details"} className="md:mt-auto mt-8">
                            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                자세히 보기
                            </button>
                        </Link>
                    </div>

                    <div className="flex flex-col bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-8">
                            🏫 학력
                        </h2>
                        <ul className="list-disc space-y-2 pl-5 text-gray-600">
                            <li>
                                한국폴리텍 I 대학 성남캠퍼스(전자정보통신과) -
                                2021.03. ~ 2023.02
                            </li>
                            <li>
                                삼일상업고등학교(IT경영과) - 2018.03. ~ 2021.02
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

export default Advantage;
