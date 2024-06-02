/*
    ID: IM103
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 학력 컴포넌트
    버전: V0.61
    버전 이력: V0.61
*/
import { education_data } from "../../constants/Education";

const Education = () => {
    return (
        <div className="w-full mb-[40px]">
            <div className="w-full border-b border-solid border-black text-[24px] text-center font-extrabold">
                Education
            </div>
            <div className="p-[24px] ">
                {education_data.map((value, index) => (
                    <p>{value}</p>
                ))}
            </div>
        </div>
    );
};

export default Education;
