import Login from "./Login";
import Register from "./Register";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
// import Register from "./";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Link to="/register" className="btn register-link">
        Register
      </Link>
      <Link to="/login" className="btn">
        Login
      </Link>
    </>
  );
};
export default Landing;
