import Notes from "./Notes";
import Wrapper from "../assets/wrappers/NotesContainer";

const NoteContainer = () => {
  return (
    <Wrapper>
      <div className="notes">
        <h3>TEST</h3>
        <p>TEST 1</p>
        <p>pending</p>
        <button type="submit">DELETE</button>
      </div>
    </Wrapper>
  );
};
export default NoteContainer;
