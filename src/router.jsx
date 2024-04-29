/*
    ID: RR100
    작성자: 김영훈
    작성일: 2024.04.28
    기능: React router setting
    버전: V0.5
    버전 이력: V0.5
*/

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/details/Details";

// 스크롤을 맨 위로 이동시키는 미들웨어 함수
function scrollToTop() {
    return () => {
        window.scrollTo(0, 0);
        return true;
    };
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        loader: scrollToTop(),
    },
    {
        path: "/details",
        element: <Details />,
        loader: scrollToTop(),
    },
]);

export default router;
