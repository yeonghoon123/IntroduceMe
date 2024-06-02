/*
    ID: IM103
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 사용 가능 기술 컴포넌트
    버전: V0.61
    버전 이력: V0.61
*/

import { skills_data } from "../../constants/Skills";

const Skills = () => {
    return (
        <div className="w-full mb-[40px]">
            <div className="w-full border-b border-solid border-black text-[24px] text-center font-extrabold">
                Skill
            </div>
            <div className="p-[24px] text-center">
                {skills_data.map((value, index) => (
                    <div
                        className="flex flex-row text-[16px]"
                        key={`skills_${index}`}
                    >
                        <span className="font-bold mr-[10px]">
                            {value.skill_type}:
                        </span>
                        {value.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
