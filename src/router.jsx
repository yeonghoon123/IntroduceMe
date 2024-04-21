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
