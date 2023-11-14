import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import NoteContainer from "../components/NoteContainer";
import AddNote from "./AddNote";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/notes");
    // console.log({ data });
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// TAKE NOTE: HINDI PEDENG PAGSAMAHIN ANG MAGKAHIWALAY NA MODEL AND RUN MO SA .MAP AT PAGDATING
// NG FUNCTIONALITY SA NOTES PAGE HINDI GAGANA EXAMPLE ANG DELETE BUTTON

const AllNotes = () => {
  const { data } = useLoaderData();
  // destructure
  const { notes } = data;

  return (
    <>
      <AddNote />
      <NoteContainer notes={notes} />
    </>
  );
};
export default AllNotes;
