import Wrapper from "../assets/wrappers/NotesContainer";
import { Notes } from "../components/";

const NoteContainer = ({ notes }) => {
  const notesDetails = (
    <Wrapper>
      {notes.map((note) => {
        return <Notes key={note._id} {...note} />;
      })}
    </Wrapper>
  );

  return notesDetails;
};
export default NoteContainer;
