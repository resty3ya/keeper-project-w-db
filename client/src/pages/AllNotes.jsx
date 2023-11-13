// import Note from "../components/Notes";

import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/NotesContainer";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { Notes } from "../components/";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/notes");
    console.log({ data });
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// TAKE NOTE: HINDI PEDENG PAGSAMAHIN ANG MAGKAHIWALAY NA MODEL AND RUN MO SA .MAP AT PAGDATING
// NG FUNCTIONALITY SA NOTES PAGE HINDI GAGANA EXAMPLE ANG DELETE BUTTON

const AllNotes = () => {
  const { notes } = useLoaderData();
  // destructure
  const { data } = notes;
  const { notes: notesData } = data;

  const notesDetails =
    notesData === null ? (
      <Wrapper>
        <p>No Notes yet</p>
      </Wrapper>
    ) : (
      <Wrapper>
        <div className="">
          {notesData.map((note) => {
            return <Notes key={note._id} {...note} />;
          })}
        </div>
      </Wrapper>
    );

  return notesDetails;
};
export default AllNotes;
