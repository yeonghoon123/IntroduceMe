/*
    ID: IMD102
    작성자: 김영훈
    작성일: 2024.04.28
    기능: Detail SkillSet page
    버전: V0.5
    버전 이력: V0.5
*/

import { skillsetData } from "../../constants/details/Skillset";
export default function Skillset() {
    return (
        <>
            <h2 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-8 md:mb-16">
                💻 기술 스택 💻
            </h2>
            <div>
                {skillsetData.map((value, index) => (
                    <div className="mb-8 md:mb-16" key={`skillset_${index}`}>
                        <h3 className="text-md sm:text-lg font-bold text-gray-800 mb-2 break-all">
                            {value.skillKind}
                        </h3>
                        <div>
                            {value.info.map((infovalue, index) => (
                                <p
                                    className="text-sm sm:text-base"
                                    key={`skillset_content_${index}`}
                                >
                                    <span className="font-semibold">
                                        {infovalue.skillName}:
                                    </span>
                                    {infovalue.content}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
