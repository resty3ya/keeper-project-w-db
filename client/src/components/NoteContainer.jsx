import { Link, Form } from "react-router-dom";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";

const NoteContainer = ({ notes }) => {
  const notesDetails = (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <li
          key={note._id}
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">
                  {note.title}
                </h3>
                <span
                  className={`flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full  ${note.noteStatus}`}
                >
                  {note.noteStatus}
                </span>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">
                {note.details}
              </p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                  <PencilIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Link
                    to={`/dashboard/edit-note/${note._id}`}
                    className="note-edit-button"
                  >
                    <span className="ml-3">Edit</span>
                  </Link>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                  <TrashIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Form
                    method="post"
                    action={`/dashboard/delete-note/${note._id}`}
                  >
                    <button type="submit" className="ml-3">
                      Delete
                    </button>
                  </Form>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  return notesDetails;
};
export default NoteContainer;
