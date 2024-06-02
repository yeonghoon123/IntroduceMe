/*
    ID: IM100
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 자기소개 페이지 부모 컴포넌트
    버전: V0.61
    버전 이력: V0.61
*/

import React from "react"; // React, React Hook 사용
import Profile from "../components/Home/Profile";
import WorkExperience from "../components/Home/WorkExperience";
import Introduce from "../components/Home/Introduce";
import Projects from "../components/Home/Projects";
import Skills from "../components/Home/Skills";
import Education from "../components/Home/Education";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 w-full min-h-screen p-[20px]">
            <div className="bg-white max-w-[767px] p-[50px] m-auto">
                <Profile />
                <Introduce />
                <WorkExperience />
                <Projects />
                <Skills />
                <Education />
            </div>
        </div>
    );
};

export default Home;
