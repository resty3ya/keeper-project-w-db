import { FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useNavigate, useRouteLoaderData, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";

import { toast } from "react-toastify";

const LogoutContainer = () => {
  const { users } = useRouteLoaderData("dashboard");
  const [showLogout, setShowLogout] = useState(false);

  // destructure users
  const { data: usersData } = users;
  const { user } = usersData;

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
          {user.name}
          <FaCaretDown />
        </button>
        <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
          <div className="h-8 pt-2">
            <Link
              to={`../dashboard/profile`}
              className="dropdown-btn text-center"
            >
              Profile
            </Link>
          </div>

          <button type="button" className="dropdown-btn" onClick={logoutUser}>
            logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
