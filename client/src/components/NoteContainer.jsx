import Wrapper from "../assets/wrappers/NotesContainer";
import { Notes } from "../components/";

const NoteContainer = ({ notes }) => {
  const notesDetails =
    notes === null ? (
      <Wrapper>
        <p>No Notes yet</p>
      </Wrapper>
    ) : (
      <Wrapper>
        <div className="">
          {notes.map((note) => {
            return <Notes key={note._id} {...note} />;
          })}
        </div>
      </Wrapper>
    );

  return notesDetails;
};
export default NoteContainer;
