/*
    ID: IM104
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 간단한 소개말 컴포넌트
    버전: V0.61
    버전 이력: V0.61
*/

import { introduce_data } from "../../constants/Introduce";

const Introduce = () => {
    return (
        <div className="w-full mb-[40px]">
            <div className="w-full border-b border-solid border-black text-[24px] text-center font-extrabold">
                Introduce Me
            </div>
            <div className="w-full p-[24px]">
                {introduce_data.map((value, index) => (
                    <>
                        <p key={`introduce_${index}`}>{value}</p>
                        <br />
                    </>
                ))}
            </div>
        </div>
    );
};

export default Introduce;
