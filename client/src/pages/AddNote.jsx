import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("SA ADD NOTE ITOOO", { data });
  try {
    await customFetch.post("/notes", data);
    toast.success("Added Note Successfully!");
    console.log(data);
    return redirect("/all-notes");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddNote = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-center-input"
        />
        <input
          type="textarea"
          name="details"
          placeholder="Take a note..."
          className="form-center-textarea"
        />
        <button type="submit" className="form-btn">
          Add
        </button>
      </Form>
    </Wrapper>
  );
};
export default AddNote;
