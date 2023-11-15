import Wrapper from "../assets/wrappers/DashboardFormPage";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData, redirect, Form } from "react-router-dom";
import { NOTE_STATUS } from "../../../utils/constant";
import { FormRowSelect } from "../components";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/notes/${params.id}`);
    console.log({ data });
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data, params);
  try {
    await customFetch.patch(`/notes/${params.id}`, data);
    toast.success("Note successfully updated");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditNote = () => {
  const { data } = useLoaderData();

  // destructure
  const { note } = data;

  console.log("THIS IS FROM EDIT", { note });

  return (
    <Wrapper>
      <Form method="post" className="form">
        <input
          type="text"
          name="title"
          defaultValue={note.title}
          className="form-center-input"
        />
        <input
          type="textarea"
          name="details"
          defaultValue={note.details}
          className="form-center-input"
        />
        <FormRowSelect list={Object.values(NOTE_STATUS)} />
      </Form>
    </Wrapper>
  );
};
export default EditNote;
