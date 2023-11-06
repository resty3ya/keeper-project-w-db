import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  DashboardLayout,
  Register,
  Landing,
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
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
