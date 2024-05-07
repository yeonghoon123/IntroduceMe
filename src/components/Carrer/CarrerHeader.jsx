/*
    ID: IMD101
    작성자: 김영훈
    작성일: 2024.04.28
    기능: Detail Carrer page
    버전: V0.5
    버전 이력: V0.5
*/

import { useState } from "react";
import profileImg from "../../assets/detail/profile.jpg";

export default function CarrerHeader() {
    const [tabNum, setTabNum] = useState(0);
    const profileData = {
        ko_name: "김영훈",
        en_name: "Kim YeongHoon",
        age: "23",
        email: "dudgns020904@gmail.com",
    };
    return (
        <div className="flex flex-col md:flex-row justify-center w-full max-w-[320px] md:max-w-[600px] min-h-[30%] bg-white rounded-lg mb-14 shadow-md p-6">
            <div className="w-[128px] mx-auto md:w-[200px] ml:w-48 ml:h-48 overflow-hidden mb-8 md:mb-0 sm:mr-8">
                <img
                    src={profileImg}
                    alt="Profile"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="w-full sm:text-left grow">
                <div className="max-w-[600px] mb-2 border-b-2 border-gray-500">
                    Profile
                </div>
                <h1 className="text-md sm:text-2xl font-bold mb-2">
                    {profileData.ko_name}({profileData.en_name})
                </h1>
                <p className="text-sm sm:text-md font-semi-bold mb-2">
                    Age: {profileData.age}
                </p>
                <p className="text-sm sm:text-md font-semi-bold mb-10">
                    Email: {profileData.email}
                </p>
            </div>
        </div>
    );
}
