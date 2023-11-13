import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { NOTE_STATUS } from "../../../utils/constant";
import { useState } from "react";

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
  // const [inputText, setInputText] = useState({ title: "", details: "" });

  // const handleChange = (event) => {
  //   // const { name, value } = event.target;
  //   // setInputText((prevValue) => {
  //   //   return { ...prevValue, [name]: value };
  //   // });

  //   setInputText(event.target.value);
  // };

  // const submitNote = (event) => {
  //   // inputText;
  //   // this.onAdd(inputText);

  //   setInputText({ title: "", details: "" });
  //   event.preventDefault();
  // };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <input
          type="text"
          name="title"
          // value={inputText.title}
          placeholder="Title"
          className="form-center-input"
          // onChange={handleChange}
        />
        <input
          type="textarea"
          name="details"
          // value={inputText.details}
          placeholder="Take a note..."
          className="form-center-textarea"
          // onChange={handleChange}
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
