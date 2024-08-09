import "./App.css";
import "./assets/css/main.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/index.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/index.jsx";
import Detail from "./pages/Detail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Detail />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
