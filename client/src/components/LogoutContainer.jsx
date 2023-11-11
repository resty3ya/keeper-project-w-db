import { FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";

import { toast } from "react-toastify";

const LogoutContainer = () => {
  // const { users } = useLoaderData();
  const [showLogout, setShowLogout] = useState(false);

  const navigate = useNavigate();

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logged out");
  };

  return (
    <Wrapper>
      <div className="">
        <button
          type="button"
          className="btn logout-btn"
          onClick={() => setShowLogout(!showLogout)}
        >
          {/* {user && user?.name} */}
          Resty
          <FaCaretDown />
        </button>
        <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
          <button type="button" className="dropdown-btn">
            Profile
          </button>
          <button type="button" className="dropdown-btn" onClick={logoutUser}>
            logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
