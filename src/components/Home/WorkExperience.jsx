/*
    ID: IM103
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 경력 컴포넌트
    버전: V0.61
    버전 이력: V0.61
*/

import { work_experience_data } from "../../constants/WorkExperience";

const WorkExperience = () => {
    return (
        <div className="w-full mb-[40px]">
            <div className="w-full border-b border-solid border-black text-[24px] text-center font-extrabold">
                Work Experience
            </div>
            {work_experience_data.map((value, index) => (
                <div
                    className="flex flex-row w-full p-[24px]"
                    key={`work_experience_${index}`}
                >
                    <div className="w-[210px] mr-[100px]">
                        <p className="text-[20px] font-bold">
                            {value.company_name}
                        </p>
                        <p className="text-[14px]">{value.position}</p>
                        <p className="text-[14px]">{value.duration}</p>
                    </div>
                    <div className="w-full">
                        <ul className="list-disc ">
                            {value.content.map((contentVal, index) => (
                                <span key={`work_experience_content_${index}`}>
                                    <li className="text-[16px]">
                                        {contentVal}
                                    </li>
                                    <br />
                                </span>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkExperience;
