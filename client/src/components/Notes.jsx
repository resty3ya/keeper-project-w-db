import Wrapper from "../assets/wrappers/NotesContainer";
import { Link, Form } from "react-router-dom";

const Notes = ({ _id, title, details, noteStatus }) => {
  return (
    <Wrapper>
      <div className="notes">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="details">
          <h5>{details}</h5>
        </div>
        <footer className="actions">
          <p className={`status ${noteStatus}`}>{noteStatus}</p>
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
