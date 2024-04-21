/*
    ID: IM102
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 나의 소개말 컴포넌트
    버전: V0.5
    버전 이력: V0.5
*/
const IntroduceMe = ({ props }) => {
    const { introduceMeRef } = props;

    return (
        <>
            <div
                className="min-h-screen flex flex-col items-center justify-center bg-gray-50"
                ref={introduceMeRef}
            >
                <span className="text-3xl text-center break-keep">
                    안녕하세요. <br />
                    현재 Soynet에 재직중인 주니어 개발자 김영훈입니다.
                </span>
                <p className="mt-4 text-xl text-center break-keep">
                    저는 문제 해결을 위해 끊임없이 도전하는 성격을 가지고
                    있으며, <br />
                    새로운 기술을 배우는 것을 두려워하지 않습니다.
                </p>
            </div>
        </>
    );
};

export default IntroduceMe;
