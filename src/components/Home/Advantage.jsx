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

    const careerData = [
        {
            company: "Narasoft",
            duration: "2019.03 ~ 2020.03 - 학습 근로자(도제학교)",
        },
        {
            company: "Jober",
            duration: "2020.03 ~ 2021.01 - 학습 근로자(도제학교)",
        },
        {
            company: "SoyNet",
            duration: "2021.02.15 - 현재",
        },
    ];

    return (
        <>
            <div
                className="flex flex-row items-center justify-center p-8 bg-gray-100"
                ref={advantageRef}
            >
                <div className="flex flex-row max-w-[1180px] w-full min-h-[50%] bg-white rounded-lg shadow-md p-6 mb-12 grow">
                    <div className="w-[50%] p-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-8">
                            🏢 경력
                        </h2>
                        <ul className="flex flex-col w-full text-gray-600 flex-wrap">
                            {careerData.map((value, index) => (
                                <div
                                    key={`home_career_${index}`}
                                    className="w-full p-4"
                                >
                                    <h3 className="text-lg font-bold">
                                        {value.company}
                                    </h3>
                                    <p className="text-gray-600">
                                        {value.duration}
                                    </p>
                                </div>
                            ))}
                        </ul>
                        {/* <Link to={"/details"} className="md:mt-auto mt-8">
                            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                자세히 보기
                            </button>
                        </Link> */}
                    </div>
                    <div className="w-[50%] p-8">
                        <h2 className="text-xl font-semibold text-gray-800 mb-8">
                            학력
                        </h2>
                        <ul className="flex flex-col w-full text-gray-600 flex-wrap">
                            <li className="mb-4">
                                한국폴리텍 I 대학 성남캠퍼스(전자정보통신과)
                            </li>
                            <li>삼일상업고등학교(IT경영과)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Advantage;
