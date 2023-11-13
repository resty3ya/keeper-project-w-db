import Wrapper from "../assets/wrappers/NotesContainer";
import { Link, Form } from "react-router-dom";

const Notes = ({ _id, title, details, noteStatus, createdBy }) => {
  return (
    <Wrapper>
      <div className="notes">
        <h3>{title}</h3>
        <p>{details}</p>
        <p>{noteStatus}</p>
        <p>{createdBy.name}</p>
        <footer className="actions">
          <Link to={`/dashboard/edit-job/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form
            method="post"
            action={`/dashboard/delete-note/${_id}`}
            className="btn delete-btn"
          >
            <button type="submit">DELETE</button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Notes;
