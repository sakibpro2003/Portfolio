import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";

// const Routes = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "/contact",
            element: <Contact/>,
          },
        ],
      },
  ]);
export default router;