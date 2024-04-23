import { useState } from "react";
import MultiTab from "../common/MultiTab";
import { info } from "autoprefixer";
export default function Career() {
    const [tabNum, setTabNum] = useState(0);
    const tabData = [
        {
            companyName: "SoyNet",
            duration: "2021.02.15 ~ 현재",
            info: "AI 추론 가속기 회사",
            project: [
                {
                    name: "SoyNature",
                    thing: "MLOps 시스템 개발 및 운영 총괄",
                    duration: "",
                    skill: "",
                },
                {
                    name: "Soy Marketplace",
                    thing: "Marketplace 홈페이지 개발 및 운영",
                    duration: "",
                    skill: "",
                },
                {
                    name: "SoyStudy Untact CBT",
                    thing: "홈페이지 개발 및 운영",
                    duration: "",
                    skill: "",
                },
            ],
        },
        {
            companyName: "SoyNet",
            duration: "2021.02.15 ~ 현재",
            info: "AI 추론 가속기 회사",
            project: [
                {
                    name: "SoyNature",
                    thing: "MLOps 시스템 개발 및 운영 총괄",
                    duration: "",
                    skill: "",
                },
                {
                    name: "Soy Marketplace",
                    thing: "Marketplace 홈페이지 개발 및 운영",
                    duration: "",
                    skill: "",
                },
                {
                    name: "SoyStudy Untact CBT",
                    thing: "홈페이지 개발 및 운영",
                    duration: "",
                    skill: "",
                },
            ],
        },
    ];
    return (
        <>
            <div className="flex flex-row  space-x-1 overflow-x-auto">
                <MultiTab props={{ tabData, tabNum, setTabNum }} />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-4 md:mb-16">
                {tabData[tabNum].companyName}
            </h2>
            <div>
                {tabData[tabNum].project.map((value, index) => (
                    <div class="mb-4 md:mb-16">
                        <h3 class="text-md sm:text-lg font-bold text-gray-800 mb-2 break-all">
                            {value.name}
                        </h3>
                        <p class="text-sm sm:text-base">
                            <span className="font-semibold">진행 기간</span>:
                            {value.duration} <br />
                            <span className="font-semibold">맡은 일</span>:{" "}
                            {value.thing}
                            <br />
                            <span className="font-semibold">사용 기술</span>:
                            {value.skill}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
