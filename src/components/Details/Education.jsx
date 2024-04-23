export default function Education() {
    const tabData = [
        {
            schoolName: "한국폴리텍 I 대학 성남캠퍼스",
            duration: "2021.03 ~ 2023.02",
            department: "전자정보통신",
        },
        {
            schoolName: "삼일상업고등학교",
            duration: "2018.03~ 2021.02",
            department: "IT 경영과",
        },
    ];
    return (
        <>
            {tabData.map((value, index) => (
                <div key={`education_${index}`}>
                    <h2 className="text-lg sm:text-xl font-bold text-center text-gray-800  mb-4 md:mb-16">
                        {value.companyName}
                    </h2>
                    <div>
                        <div className="mb-4 md:mb-16">
                            <h3 className="text-md sm:text-lg font-bold text-gray-800 mb-2 break-all">
                                {value.schoolName}
                            </h3>
                            <p className="text-sm sm:text-base">
                                <span className="font-semibold">학과: </span>
                                {value.department} <br />
                                <span className="font-semibold">
                                    재학 기간:{" "}
                                </span>
                                {value.duration}
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
