import { useState } from "react";
import Strengths from "../../components/Details/Strengths";
import Skillset from "../../components/Details/Skillset";
import Carrer from "../../components/Details/Career";
import DetailBar from "../../components/Details/DetailBar";
import Education from "../../components/Details/Education";

export default function Details() {
    const [page, setPage] = useState("Strengths");

    const pageLabel = [
        { label: "프로필", value: "Profile" },
        { label: "나의 장점", value: "Strengths" },
        { label: "기술 스택", value: "SkillSet" },
        { label: "경력", value: "Career" },
        { label: "학력", value: "Education" },
    ];

    return (
        <>
            <div className="flex justify-center bg-slate-300 min-h-screen p-4 sm:p-8 lg:p-32">
                <div className="flex flex-col justify-center w-full sm:w-4/5 md:w-4/5 lg:w-3/5">
                    <div className="flex flex-row  space-x-1 overflow-x-auto">
                        <DetailBar props={{ pageLabel, page, setPage }} />
                    </div>
                    <div className="bg-white rounded-b-xl shadow-md p-4 sm:p-6 md:p-6 w-full">
                        {page === "Strengths" && <Strengths />}
                        {page === "SkillSet" && <Skillset />}
                        {page === "Career" && <Carrer />}
                        {page === "Education" && <Education />}
                        {/* 다른 페이지 ('Profile', 'SkillSet', 'Career', 'Education') 내용도 유사하게 추가할 수 있습니다. */}
                    </div>
                </div>
            </div>
        </>
    );
}
