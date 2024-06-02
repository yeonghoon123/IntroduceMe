/*
    ID: IM103
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 경력 상수 데이터
    버전: V0.61
    버전 이력: V0.61
*/

export const work_experience_data = [
    {
        company_name: "Soynet",
        position: "연구원",
        duration: "2021.02.15 - 재직중",
        content: [
            "React와 ExpressJS, PM2를 사용해 무중단 서비스를 개발하고, 시계열 데이터를 위해 PostgreSQL을 사용. 실시간 배포 및 학습/추론을 위해 SocketIO를 활용하며, Node의 싱글 쓰레드 단점을 보완하기 위해 Cluster로 멀티쓰레드 기능을 개발. GS인증 과정에서 Shell Script로 소스 업데이트 및 배포를 진행.",
            "Vue와 AWS Lambda를 사용해 서버리스 서비스를 개발하고, Toss 및 PayPal 결제 기능을 Serverless로 구현. AWS S3에 업로드된 Vue 빌드 파일을 Route53과 CloudFront로 배포. AWS API Gateway HTTP API를 통해 Lambda와 통신하며, 데이터베이스로 AWS DynamoDB를 사용. Google Analytics를 통해 데이터 분석 및 모니터링.",
            "NextJS와 ExpressJS를 사용해 홈페이지 및 문의 기능을 개발하고, 문의 시 메일 발송 기능을 구현. 또한, WEB RTC를 활용하여 실시간 화면 공유 및 캠 화면 공유를 지원하며, 1:1, 1, N 등의 다양한 통신 방식을 구현. AWS EC2를 통해 소스를 배포하고 안정적인 운영 환경을 구축.",
        ],
    },
    {
        company_name: "Jober",
        position: "학습 근로자(도제학교)",
        duration: "2020.03 ~ 2021.01",
        content: [
            "React를 사용해 다양한 이메일 템플릿을 개발하여, 사용자 맞춤형 이메일 마케팅 캠페인을 효과적으로 수행. 템플릿은 반응형 디자인으로 모든 디바이스에서 최적의 사용자 경험을 제공",
        ],
    },
    {
        company_name: "Narasoft",
        position: "학습 근로자(도제학교)",
        duration: "2019.03 ~ 2020.03",
        content: [
            "PHP를 활용하여 효율적인 게시판 및 댓글 기능을 구현, 사용자 친화적인 인터페이스와 안정적인 데이터 관리를 통해 웹 애플리케이션의 사용자 경험을 향상시켰습니다.",
        ],
    },
];
