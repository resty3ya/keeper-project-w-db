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
          className="form-input"
        />
        <input
          type="textarea"
          name="details"
          placeholder="Take a note..."
          className="form-input"
        />
      </Form>
    </Wrapper>
  );
};
export default AddNote;
