import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";

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
            element: <Home></Home>,
          },
        ],
      },
  ]);
export default router;