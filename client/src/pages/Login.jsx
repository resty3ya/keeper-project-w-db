import { Link, Form, redirect, useNavigate } from "react-router-dom";
import { FormRow, SubmitBtn } from "../components";
// import customFetch from "../utils/customFetch";
// import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/RegisterAndLogin";

const Login = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>Login</h4>
        <FormRow type="email" name="email" id="email" />
        <FormRow type="password" name="password" id="password" />
        <SubmitBtn />
        <p>
          Not a member yet?{" "}
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
