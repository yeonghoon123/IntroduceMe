/*
    ID: IM103
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 나의 성격 및 기술 컴포넌트
    버전: V0.5
    버전 이력: V0.5
*/

import { strengthData, skillsetData } from "../../constants/Home/Personality";

const Personality = ({ props }) => {
    const { personalityRef } = props;

    return (
        <>
            <div
                className="flex flex-col items-center justify-center p-8 bg-gray-100"
                ref={personalityRef}
            >
                <div className="flex flex-col max-w-[1180px] w-full min-h-[50%] bg-white rounded-lg shadow-md p-6 mb-16 grow">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
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

                <div className="flex flex-col max-w-[1180px] w-full min-h-[50%] bg-white rounded-lg shadow-md p-6 grow">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
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
