/*
    ID: IM103
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 나의 성격 및 기술 컴포넌트
    버전: V0.5
    버전 이력: V0.5
*/

const Personality = ({ props }) => {
    const { personalityRef } = props;

    return (
        <>
            <div
                className="min-h-screen flex items-center justify-center p-8 bg-gray-100"
                ref={personalityRef}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl min-h-128">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-8">
                            🔥 나의 장점 🔥
                        </h2>
                        <ul className="list-disc space-y-2 pl-5 text-gray-600">
                            <li>Soynet - 2021.02.15 ~ 현재</li>
                            <li>
                                SoyNature 프로젝트의 DevOps 시스템 개발 및 운영
                                총괄
                            </li>
                            <li>
                                SoyMarket Marketplace 프로젝트 운영 및 기능 개선
                            </li>
                            <li>SoyStudy Untact CBT 프로젝트 홈페이지 담당</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-8">
                            Skill Set
                        </h2>
                        <ul className="list-disc space-y-2 pl-5 text-gray-600">
                            <li>
                                한국폴리텍 I 대학 성남캠퍼스(전자정보통신과) -
                                2021.03. ~ 2023.02
                            </li>
                            <li>
                                삼일상업고등학교(IT경영과) - 2018.03. ~ 2021.02
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Personality;
