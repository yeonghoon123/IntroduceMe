import { useState } from "react";

export default function Strengths() {
    const [page, setPage] = useState("Strengths");
    return (
        <>
            <div className="flex justify-center bg-slate-300 p-32">
                <div className="flex flex-col justify-center md:w-3/5 w-3.5/5">
                    <div className="flex flex-row">
                        <div
                            onClick={() => {
                                page !== "Profile" && setPage("Profile");
                            }}
                            className={`${
                                page === "Profile"
                                    ? "bg-white"
                                    : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                            }  text-center w-24 rounded-t-xl shadow-md p-3`}
                        >
                            프로필
                        </div>
                        <div
                            onClick={() => {
                                page !== "Strengths" && setPage("Strengths");
                            }}
                            className={`${
                                page === "Strengths"
                                    ? "bg-white"
                                    : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                            }  text-center w-24 rounded-t-xl shadow-md p-3`}
                        >
                            나의 장점
                        </div>
                        <div
                            onClick={() => {
                                page !== "SkillSet" && setPage("SkillSet");
                            }}
                            className={`${
                                page === "SkillSet"
                                    ? "bg-white"
                                    : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                            }  text-center w-24 rounded-t-xl shadow-md p-3`}
                        >
                            기술 스택
                        </div>
                        <div
                            onClick={() => {
                                page !== "Career" && setPage("Career");
                            }}
                            className={`${
                                page === "Career"
                                    ? "bg-white"
                                    : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                            }  text-center w-24 rounded-t-xl shadow-md p-3`}
                        >
                            경력
                        </div>
                        <div
                            onClick={() => {
                                page !== "Education" && setPage("Education");
                            }}
                            className={`${
                                page === "Education"
                                    ? "bg-white"
                                    : "bg-gray-200 hover:bg-gray-300 cursor-pointer"
                            }  text-center w-24 rounded-t-xl shadow-md p-3`}
                        >
                            학력
                        </div>
                    </div>
                    <div class="bg-white rounded-b-xl shadow-md p-6 w-full ">
                        <h2 class="text-xl font-semibold text-center text-gray-800 mb-16">
                            🔥 나의 장점 🔥
                        </h2>
                        <div>
                            <div className="mb-16">
                                <h3 class="text-lg font-semibold text-gray-800 mb-2 break-all">
                                    책임감이 강하다
                                </h3>
                                <p className="font-semi">
                                    프로젝트의 성공적인 완수를 위해 끝까지
                                    책임지는 태도로 임하며, 동료들과의 약속을
                                    중시합니다. 예를 들어, 최근에는 중대한
                                    마케팅 캠페인을 맡아, 프로젝트 기간 동안
                                    세밀한 관리와 주기적인 검토를 통해 예산
                                    내에서 목표를 초과 달성했습니다.
                                </p>
                            </div>
                            <div className="mb-16">
                                <h3 class="text-lg font-semibold text-gray-800 mb-2 break-all">
                                    정직하고 솔직한 피드백을 제공한다
                                </h3>
                                <p className="font-semi">
                                    올바르지 않거나 개선이 필요한 부분에
                                    대해서는 명확하고 건설적인 피드백을
                                    제공합니다. 이러한 접근은 팀 내 신뢰를
                                    구축하고, 지속적인 개선을 도모하는 데 중요한
                                    역할을 합니다.
                                </p>
                            </div>
                            <div className="mb-16">
                                <h3 class="text-lg font-semibold text-gray-800 mb-2 break-all">
                                    긍정적인 태도를 유지한다
                                </h3>
                                <p className="font-semi">
                                    어려움과 도전이 있을 때도 변함없이 긍정적인
                                    태도로 문제를 해결해 나가며, 팀원들에게도
                                    동기를 부여합니다. 이러한 태도는 특히 압박이
                                    심한 프로젝트에서 팀의 사기를 유지하는 데 큰
                                    도움이 됩니다.
                                </p>
                            </div>
                            <div className="mb-16">
                                <h3 class="text-lg font-semibold text-gray-800 mb-2 break-all">
                                    도전을 즐긴다
                                </h3>
                                <p className="font-semi">
                                    새로운 기술을 배우거나, 복잡한 문제를
                                    해결하는 것을 두려워하지 않습니다. 최근에는
                                    인공지능을 활용한 데이터 분석 기술을
                                    독학하여, 고객 데이터를 보다 효과적으로
                                    분석하고 활용하는 방법을 개발했습니다.
                                </p>
                            </div>
                            <div className="mb-16">
                                <h3 class="text-lg font-semibold text-gray-800 mb-2 break-all">
                                    꼼꼼하게 일한다
                                </h3>
                                <p className="font-semi">
                                    세부 사항에 주의를 기울이고 모든 작업을
                                    철저히 검토합니다. 이러한 꼼꼼함은 오류를
                                    최소화하고, 품질을 극대화하는 데 기여합니다.
                                    예를 들어, 최근 문서 작업에서 작은 오류도
                                    놓치지 않고 수정하여 고객으로부터 높은
                                    평가를 받았습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
