import { redirect, useLoaderData } from "react-router-dom";
import { createContext, useContext } from "react";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import AddNote from "./AddNote";
import AllNotes from "./AllNotes";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/currentUser");
    return { data };
  } catch (error) {
    return redirect("/dashboard/");
  }
};

const DashboardContext = createContext();

const DashboardLayout = () => {
  const { data } = useLoaderData();

  console.log({ data });
  return (
    <DashboardContext.Provider>
      <AddNote />
      <AllNotes />
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
