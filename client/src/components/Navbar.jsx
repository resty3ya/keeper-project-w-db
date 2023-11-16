import Wrapper from "../assets/wrappers/Navbar";
import { useLocation } from "react-router-dom";
import LogoutContainer from "./LogoutContainer";

const Navbar = () => {
  const location = useLocation();

  const profileButton = location.pathname.includes("dashboard");

  return (
    <Wrapper>
      <h1 className="logo">Keeper</h1>

      {/* WILL CREATE A COMPONENT HERE FOR PROFILE AND LOGOUT */}
      {profileButton && <LogoutContainer />}
    </Wrapper>
  );
};
export default Navbar;
