import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  DashboardLayout,
  Register,
  // Landing,
  HomeLayout,
  Login,
  Profile,
  Error,
  AddNote,
  EditNote,
  DeleteNote,
  AllNotes,
  Admin,
} from "./pages";

import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { loader as dashboardLoader } from "./pages/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddNote />,
          },
          {
            path: "all-notes",
            element: <AllNotes />,
          },
          {
            path: "edit-note/:id",
            element: <EditNote />,
          },
          {
            path: "delete-note/:id",
            element: <DeleteNote />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
  {
    path: "/error",
    element: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
