import { createBrowserRouter } from "react-router-dom";
import Roots from "../../Layout/Roots";


const routes = createBrowserRouter([
    {
        path:'/',
        element: <Roots></Roots>,
        children: [
            {
                path:'/'
            }
        ]
    }
])