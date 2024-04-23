export default function Skillset() {
    return (
        <>
            <h2 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-4 md:mb-16">
                💻 기술 스택 💻
            </h2>
            <div>
                <div className="mb-4 md:mb-16">
                    <h3 className="text-md sm:text-lg font-bold text-gray-800 mb-2 break-all">
                        프론트엔드
                    </h3>
                    <p className="text-sm sm:text-base">
                        <span className="font-semibold">React</span>: MLOps
                        프로젝트에서 개발에 사용하였습니다. <br />
                        <span className="font-semibold">NextJs</span>: Soy
                        Untact CBT 프로젝트에서 개발에 사용하였습니다. <br />
                        <span className="font-semibold">VueJs</span>: Soy
                        Marketplace 프로젝트에서 개발에 사용하였습니다.
                    </p>
                </div>

                <div className="mb-4 md:mb-16">
                    <h3 className="text-md sm:text-lg font-bold text-gray-800 mb-2 break-all">
                        백엔드
                    </h3>
                    <p className="text-sm sm:text-base">
                        <span className="font-semibold">ExpressJS</span>: MLOps
                        프로젝트에서 세션 로그인, OAuth 인증, 클러스터를 통한
                        Node.js의 멀티스레드 처리, 그리고 모델 학습/추론 등을
                        위해 파이썬을 실행하는 데 사용하였습니다.
                    </p>
                </div>

                <div className="mb-4 md:mb-16">
                    <h3 className="text-md sm:text-lg font-bold text-gray-800 mb-2 break-all">
                        데이터베이스 관리 시스템(DBMS)
                    </h3>
                    <p className="text-sm sm:text-base">
                        <span className="font-semibold">PostgreSQL</span>: MLOps
                        프로젝트에서 대용량 데이터 처리를 위해 MariaDB 대신
                        선택하였습니다.
                        <br />
                        <span className="font-semibold">MariaDB</span>: 개인
                        프로젝트에 CRUD 용도로 사용하였다.
                    </p>
                </div>

                <div className="mb-4 md:mb-16">
                    <h3 className="text-md sm:text-lg font-bold text-gray-800 mb-2 break-all">
                        클라우드
                    </h3>
                    <p className="text-sm sm:text-base">
                        <span className="font-semibold">AWS</span>: Soy
                        Marketplace 프로젝트에서는{" "}
                        <span className="font-semibold">Route53</span>과{" "}
                        <span className="font-semibold">CloudFront</span>를 통해
                        도메인을 구성하고, 프론트엔드를{" "}
                        <span className="font-semibold">S3</span>에
                        배포했습니다. 또한
                        <span className="font-semibold">API Gateway</span>를
                        활용하여 <span className="font-semibold">Lambda</span>{" "}
                        함수를 호출하여{" "}
                        <span className="font-semibold">DynamoDB</span>의 CRUD
                        작업을 수행하는 등 서버리스 아키텍처를 적극적으로
                        활용했습니다. Untact CBT에서는 소스를{" "}
                        <span className="font-semibold">EC2</span> 인스턴스에
                        배포했습니다.
                        <br />
                        <br />
                        <span className="font-semibold">Google</span>: 개인
                        프로젝트에서는{" "}
                        <span className="font-semibold">Firebase</span>를
                        이용하여 서버 없이 데이터베이스 및 인증 기능을
                        활용했습니다.
                    </p>
                </div>
            </div>
        </>
    );
}
