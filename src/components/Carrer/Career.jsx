/*
    ID: IMD101
    작성자: 김영훈
    작성일: 2024.04.28
    기능: Detail Carrer page
    버전: V0.5
    버전 이력: V0.5
*/

import { useState } from "react";
import MultiTab from "../common/MultiTab";
import { carrerData } from "../../constants/Details/Carrer";

export default function Career() {
    const [tabNum, setTabNum] = useState(0);
    return (
        <div className="mb-10">
            <h2
                className={
                    "text-lg sm:text-xl font-bold text-center text-gray-800  mb-8 md:mb-16"
                }
            >
                경력
            </h2>
            {carrerData.length > 1 && (
                <div className="flex flex-row w-full space-x-1 overflow-x-auto scrollbar-hide">
                    <MultiTab
                        props={{ tabData: [...carrerData], tabNum, setTabNum }}
                    />
                </div>
            )}
            <h2
                className={`${carrerData.length > 1 && "mt-4 md:mt-10"}
                }text-lg sm:text-xl font-bold text-gray-800  mb-8 md:mb-16`}
            >
                회사 이름: {carrerData[tabNum].companyName}
            </h2>
            <div>
                {carrerData[tabNum].project?.map((value, index) => (
                    <div className="mb-8 md:mb-16" key={`carrer_${index}`}>
                        <h3 className="text-md sm:text-lg font-bold text-gray-800 mb-2 break-all">
                            {value.name}
                        </h3>
                        <p className="text-sm sm:text-base">
                            <span className="font-semibold">진행 기간: </span>
                            {value.duration} <br />
                            <span className="font-semibold">맡은 일: </span>
                            {value.thing}
                            <br />
                            <span className="font-semibold">사용 기술: </span>
                            {value.skills}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
