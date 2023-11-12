// import Note from "../components/Notes";

import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/NotesContainer";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { Notes } from "../components/";

export const loader = async () => {
  try {
    const [users, notes] = await Promise.all([
      customFetch.get("/notes"),
      customFetch.get("/users/currentUser"),
    ]);
    return { users, notes };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllNotes = () => {
  const { users, notes } = useLoaderData();

  const { data: notesData } = notes;
  const { data: usersData } = users;

  const notesDataForMapping = notesData.notes;
  const usersDataForMapping = usersData.user;

  const notesDetails =
    notesData === null ? (
      <Wrapper>
        <p>No Notes yet</p>
      </Wrapper>
    ) : (
      <Wrapper>
        <div className="">
          {notesDataForMapping.map((note) => {
            return <Notes key={note._id} {...note} {...usersDataForMapping} />;
          })}
        </div>
      </Wrapper>
    );

  return notesDetails;
};
export default AllNotes;
