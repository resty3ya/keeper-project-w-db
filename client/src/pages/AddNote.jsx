import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form } from "react-router-dom";
import { FormRow } from "../components";

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
          rows="3"
        />
        <button type="submit" className="form-btn">
          Add
        </button>
      </Form>
    </Wrapper>
  );
};
export default AddNote;
