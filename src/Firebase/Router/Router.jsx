import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }
]);

export default router;