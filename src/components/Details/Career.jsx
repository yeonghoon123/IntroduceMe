import { useState } from "react";
import MultiTab from "../common/MultiTab";

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
                    duration: "2023.11 ~ 진행중",
                    skill: "React, ExpressJs, PostgreSQL",
                },
                {
                    name: "Soy Marketplace",
                    thing: "Marketplace 홈페이지 개발 및 운영",
                    duration: "2022.04 ~ 2023.10",
                    skill: "Vue, Node Lambda, API Gateway, S3, DynamoDB, Route53, CloudFront",
                },
                {
                    name: "SoyStudy Untact CBT",
                    thing: "홈페이지 개발 및 운영",
                    duration: "2021.10 ~ 2022.04",
                    skill: "NextJs, ExpressJs, S3, EC2",
                },
            ],
        },
    ];
    return (
        <>
            {tabData.length > 1 && (
                <div className="flex flex-row w-full space-x-1 overflow-x-auto scrollbar-hide">
                    <MultiTab props={{ tabData, tabNum, setTabNum }} />
                </div>
            )}
            <h2
                className={`${tabData.length > 1 && "mt-4 md:mt-10"}
                }text-lg sm:text-xl font-bold text-center text-gray-800  mb-4 md:mb-16`}
            >
                {tabData[tabNum].companyName}
            </h2>
            <div>
                {tabData[tabNum].project?.map((value, index) => (
                    <div className="mb-4 md:mb-16" key={`carrer_${index}`}>
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
                            {value.skill}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
