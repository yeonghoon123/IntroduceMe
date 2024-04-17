import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Strengths from "./pages/Home/details/Strengths";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/details",
        element: <Strengths />,
    },
]);

export default router;
