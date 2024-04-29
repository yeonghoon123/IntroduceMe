/*
    ID: RA100
    작성자: 김영훈
    작성일: 2024.04.28
    기능: react App Main dom
    버전: V0.5
    버전 이력: V0.5
*/
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
