/*
    ID: IM105
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 감사말 컴포넌트
    버전: V0.5
    버전 이력: V0.5
*/

const ThankYou = ({ props }) => {
    const { thankYouRef } = props;

    return (
        <>
            <div
                className="min-h-screen flex flex-col items-center justify-center bg-gray-50"
                ref={thankYouRef}
            >
                <span className="text-center text-xl">
                    여러분의 관심에 감사드립니다.
                </span>
            </div>
        </>
    );
};

export default ThankYou;
