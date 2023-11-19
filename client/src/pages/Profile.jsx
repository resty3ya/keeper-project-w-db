import Wrapper from "../assets/wrappers/NotesContainer";
import { useRouteLoaderData, redirect, Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { FormRowSelect } from "../components";
import { ROLES } from "../../../utils/constant";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/users/updateUser`, data);
    toast.success("User Successfully updated!");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Profile = () => {
  const { users } = useRouteLoaderData("dashboard");

  // destructure
  const { data } = users;
  const { email, lastName, name, role } = data.user;

  console.log(email);

  return (
    <Wrapper>
      <Form method="post" className="form">
        <input type="text" name="email" defaultValue={email} />
        <input type="text" name="name" defaultValue={name} />
        <input type="text" name="lastName" defaultValue={lastName} />
        <FormRowSelect
          name="role"
          defaultValue={ROLES.role}
          list={Object.values(ROLES)}
        />
        <button type="submit">Submit</button>
      </Form>
    </Wrapper>
  );
};
export default Profile;
