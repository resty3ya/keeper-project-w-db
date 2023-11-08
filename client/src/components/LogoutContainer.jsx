import { FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
// import { useDashboardContext } from "../../../../jobify-project/client/src/pages/DashboardLayout";

const LogoutContainer = () => {
  //   const { user, logoutUser } = useDashboardContext();
  const [showLogout, setShowLogout] = useState(false);

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
          <button type="button" className="dropdown-btn">
            logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
