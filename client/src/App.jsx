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
import { loader as dashboardLayoutLoader } from "./pages/DashboardLayout";
import { loader as allNotesLoader } from "./pages/AllNotes";
import { action as addNoteAction } from "./pages/AddNote";

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
        // ITO ANG SAGOT PAG OUTSIDE SA LOADERDATA AT CONTEXT ANG COMPONENT AT NEED MO MA ACCESS ANG DATA "useRouteLoaderData"
        id: "dashboard",
        loader: dashboardLayoutLoader,
        children: [
          {
            index: true,
            element: <AddNote />,
            action: addNoteAction,
          },
          {
            // path: "all-notes", REMOVED IF HINDI NAMAN SYA PAGSESENDAN NG VALUE AND SINCE NAKA IMPORT SYA SA DASHBOARD
            // PARA PAG NAG ADD NG NOTE PAPASOK SYA SA DASHBOARD AND HINDI SA PATH NG ALL NOTES
            element: <AllNotes />,
            loader: allNotesLoader,
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
