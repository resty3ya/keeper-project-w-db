// import Note from "../components/Notes";

import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/NotesContainer";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

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
  // const { users, notes } = useLoaderData();

  // console.log({ users, notes });

  // const { data: notesData } = notes;
  // const { data: usersData } = users;

  // const notesDataForMapping = notesData.notes;
  // const usersDataForMapping = usersData.user;

  // console.log("ITO AY SA ALL NOTES", notesDataForMapping);

  // console.log("ITO AY SA ALL USERS", usersDataForMapping);

  //   const notesDetails =
  //     notesData === null ? (
  //       <Wrapper>
  //         <p>No Notes yet</p>
  //       </Wrapper>
  //     ) : (
  //       <Wrapper>
  //         <div className="">
  //           {notesDataForMapping.map((note) => {
  //             return <Note key={note._id} {...note} {...usersDataForMapping} />;
  //           })}
  //         </div>
  //       </Wrapper>
  //     );

  //   return notesDetails;
  return <Wrapper>THIS IS NOTES</Wrapper>;
};
export default AllNotes;
