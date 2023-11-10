import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { NOTE_STATUS } from "../../../utils/constant";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/notes", data);
    toast.success("Added Note Successfully!");
    return redirect("/dashboard");
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
        <input
          type="text"
          name="noteStatus"
          defaultValue={NOTE_STATUS.PENDING}
          hidden
        />

        <button type="submit" className="form-btn">
          Add
        </button>
      </Form>
    </Wrapper>
  );
};
export default AddNote;
