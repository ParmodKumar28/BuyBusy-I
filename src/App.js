// Imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Pages/App/Products";
import SignIn from "./Pages/App/SignIn";
import SignUp from "./Pages/App/SignUp";
import { CustomProductContext } from "./Context/productsContext";
import Page404 from "./Pages/Misc/Page 404/Page404";

function App() {
  // Creating router
  const router = createBrowserRouter([
    {path: "/",
      element: <Navbar/>,
      errorElement: <Page404/>,
      children: [
        {index: true,
          element: 
            <CustomProductContext>
            <Products/>
            </CustomProductContext>
           },
        {path: "/signIn", element: <SignIn/>},
        {path: "/signUp", element: <SignUp/>},

      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
