// Imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Pages/App/Products";
import SignIn from "./Pages/App/SignIn";
import SignUp from "./Pages/App/SignUp";
import { CustomProductContext } from "./Context/productsContext";

function App() {
  // Creating router
  const router = createBrowserRouter([
    {path: "/",
      element: <Navbar/>,
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
