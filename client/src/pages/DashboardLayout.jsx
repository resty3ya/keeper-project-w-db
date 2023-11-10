import { Outlet, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { createContext, useContext } from "react";
import customFetch from "../utils/customFetch";
import AllNotes from "./AllNotes";

export const loader = async () => {
  try {
    const [users, notes] = await Promise.all([
      customFetch.get("/users/currentUser"),
      customFetch.get("/notes"),
    ]);
    return { users, notes };
  } catch (error) {
    return error;
  }
};

const DashboardLayoutContext = createContext();

const DashboardLayout = () => {
  const { users, notes } = useLoaderData();

  console.log("ITO AY SA DASHBOARD", { users });
  console.log("ITO AY SA DASHBOARD", { notes });

  return (
    <DashboardLayoutContext.Provider value={{ users, notes }}>
      <Wrapper>
        <Outlet context={{ users, notes }} />
        <AllNotes />
      </Wrapper>
    </DashboardLayoutContext.Provider>
  );
};

export const useDashboardLayoutContext = () =>
  useContext(DashboardLayoutContext);
export default DashboardLayout;
