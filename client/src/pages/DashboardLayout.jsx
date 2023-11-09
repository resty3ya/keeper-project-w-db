// import { redirect, useLoaderData } from "react-router-dom";
// import { createContext, useContext } from "react";
// import customFetch from "../utils/customFetch";
// import { toast } from "react-toastify";
import AddNote from "./AddNote";
import AllNotes from "./AllNotes";

// export const loader = async () => {
//   try {
//     const [users, notes] = await Promise.all([
//       customFetch.get("/users/currentUser"),
//       customFetch.get("/notes"),
//     ]);
//     return { users, notes };
//   } catch (error) {
//     return redirect("/");
//   }
// };

// const DashboardLayoutContext = createContext();

const DashboardLayout = () => {
  // const { users, notes } = useLoaderData();

  // console.log("ITO AY SA DASHBOARD", { users, notes });
  return (
    // <DashboardLayoutContext.Provider value={{ users, notes }}>
    <>
      <AddNote />
      <AllNotes />
    </>

    // </DashboardLayoutContext.Provider>
  );
};

// export const useDashboardLayoutContext = () =>
//   useContext(DashboardLayoutContext);
export default DashboardLayout;
