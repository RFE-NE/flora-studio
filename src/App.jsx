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
import AdminHeader from "./components/AdminHeader/index.jsx";
import AdminHome from "./pages/Admin/Home/index.jsx";
import Edit from "./pages/Admin/Edit/index.jsx"

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
  {
    path: "/admin",
    element: (
      <>
        <AdminHeader />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/admin",
        element: <AdminHome />,
      },
      {
        path: "/admin/products/:id",
        element: <Edit />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
