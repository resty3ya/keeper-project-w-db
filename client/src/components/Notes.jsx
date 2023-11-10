import Wrapper from "../assets/wrappers/NotesContainer";
import { Link, Form } from "react-router-dom";

const Notes = ({ _id, createdBy, title, details, noteStatus, name }) => {
  return (
    <Wrapper>
      <div className="notes">
        <h3>{title}</h3>
        <label htmlFor="">Details:</label>
        <p>{details}</p>
        <label>Status:</label>
        <p>{noteStatus}</p>
        <label>Created by:</label>
        <p>{name}</p>
        <button type="submit">DELETE</button>
      </div>
    </Wrapper>
  );
};

export default Notes;
