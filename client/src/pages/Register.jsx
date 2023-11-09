import Wrapper from "../assets/wrappers/RegisterAndLogin";
import { Form, redirect, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { FormRow, SubmitBtn } from "../components";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration Successful!");
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>Register</h4>
        <FormRow type="text" name="name" id="name" />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          id="lastname"
        />
        <FormRow type="email" name="email" id="email" />
        <FormRow type="password" name="password" id="password" />
        <SubmitBtn formBtn />
        <p>
          Already a member ? {""}
          <Link to="/" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
