/*
    ID: IMD102
    작성자: 김영훈
    작성일: 2024.04.28
    기능: Detail Strengths page
    버전: V0.5
    버전 이력: V0.5
*/

import { strengthsData } from "../../constants/details/Strengths";
export default function Strengths() {
    return (
        <>
            <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-800 mb-8 md:mb-16">
                🔥 나의 장점 🔥
            </h2>
            <div>
                {strengthsData.map((value, index) => (
                    <div className="mb-8 md:mb-16" key={`strength_${index}`}>
                        <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 break-all">
                            {value.title}
                        </h3>
                        <p className="text-sm sm:text-base">{value.content}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
