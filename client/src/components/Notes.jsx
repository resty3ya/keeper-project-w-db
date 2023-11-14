import Wrapper from "../assets/wrappers/NotesContainer";
import { Link, Form } from "react-router-dom";

const Notes = ({ _id, title, details, noteStatus, createdBy }) => {
  return (
    <Wrapper>
      <div className="notes">
        <h3>{title}</h3>
        <br />
        <p>{details}</p>
        <p className={`status ${noteStatus}`}>{noteStatus}</p>
        <p className="author">{createdBy.name}</p>
        <footer className="actions">
          <Link to={`/dashboard/edit-note/${_id}`} className="note-edit-button">
            EDIT
          </Link>
          <Form method="post" action={`/dashboard/delete-note/${_id}`}>
            <button type="submit" className="note-button">
              DELETE
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Notes;
