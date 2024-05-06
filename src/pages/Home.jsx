/*
    ID: IM100
    작성자: 김영훈
    작성일: 2024.03.20
    기능: 자기소개 페이지 부모 컴포넌트
    버전: V0.5
    버전 이력: V0.5
*/

import React, { useState, useRef, useEffect } from "react"; // React, React Hook 사용
import gsap from "gsap"; // gsap 애니메이션 라이브러리 사용
import Intro from "../components/Home/Intro";
import Personality from "../components/Home/Personality";
import Advantage from "../components/Home/Advantage";
import ContactUs from "../components/Home/ContactUs";

const Home = () => {
    const introRef = useRef(null); // 인트로 Ref
    const personalityRef = useRef(null); // 간단소개 Ref
    const advantageRef = useRef(null); // 경력, 학력 Ref
    const thankYouRef = useRef(null); // 감사 인사말 Ref

    // 각 섹션의 애니메이션 실행 여부를 관리하는 상태
    const [animationState, setAnimationState] = useState({
        intro: false,
        personality: false,
        advantage: false,
        thankYou: false,
    });

    useEffect(() => {
        /**
         * @param {useRef} : Ref 데이터
         * @param {String} : 현재 section 데이터
         */
        const checkAndAnimate = (ref, section) => {
            // 현재 섹션에서 애니메이션 실행 여부 판단
            if (ref.current && !animationState[section]) {
                const top = ref.current.getBoundingClientRect().top; // 화면의 최상단 위치

                // 섹션의 최상단위치가 현재 스크롤 위치 * 높이 * 0.8 보다 작으면 로직 실행
                if (
                    top + window.scrollY <
                    window.scrollY + window.innerHeight * 0.8
                ) {
                    // gsap 애니메이션 실행
                    gsap.fromTo(
                        ref.current,
                        { opacity: 0, y: -50 },
                        { opacity: 1, y: 0, duration: 2 }
                    );
                    setAnimationState((prev) => ({ ...prev, [section]: true })); // 섹션의 애니메이션 여부 변경
                }
            }
        };

        // 스크롤시 발생하는 이벤트
        const handleScroll = () => {
            checkAndAnimate(introRef, "intro");
            checkAndAnimate(personalityRef, "personality");
            checkAndAnimate(advantageRef, "advantage");
            checkAndAnimate(thankYouRef, "thankYou");
        };

        window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 확인
        handleScroll(); // 컴포넌트 마운트 시에도 위치 확인(리로드시 해당 섹션의 애니메이션 실행)

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [animationState]); // 의존성 배열에 animationState 추가

    return (
        <div className="bg-gray-100">
            <Intro props={{ introRef }} />
            <Personality props={{ personalityRef }} />
            <Advantage props={{ advantageRef }} />
            <ContactUs props={{ thankYouRef }} />
        </div>
    );
};

export default Home;
