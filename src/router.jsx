import { createBrowserRouter } from "react-router-dom";
import AddInsultPage from "./pages/AddInsultPage"
import InsultPage from "./pages/InsultPage"
import RandomInsultPage from "./pages/RandomInsultPage"

const router = createBrowserRouter([
    {
      path: "/",
      element: <RandomInsultPage />,
    },
    {
      path: "/addinsultpage",
      element: <AddInsultPage />
    },
    {
      path: "/insultpage",
      element: <InsultPage />
    }
    
  ]);

  export default router;