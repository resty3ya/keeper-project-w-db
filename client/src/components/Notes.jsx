// import Wrapper from "../assets/wrappers/NotesContainer";
// import { Link, Form } from "react-router-dom";
// import { MailIcon, PhoneIcon } from "@heroicons/react/solid";

// // const people = [
// //   {
// //     name: "Jane Cooper",
// //     title: "Regional Paradigm Technician",
// //     role: "Admin",
// //     email: "janecooper@example.com",
// //     telephone: "+1-202-555-0170",
// //     imageUrl:
// //       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
// //   },
// //   // More people...
// // ];

// const Notes = ({ _id, title, details, noteStatus }) => {
//   return (
//     // <Wrapper>
//     //   <div className="notes">
//     //     <div className="title">
//     //       <h3>{title}</h3>
//     //     </div>
//     //     <div className="details">
//     //       <h5>{details}</h5>
//     //     </div>
//     //     <div className="footer">
//     //       <p className={`status ${noteStatus}`}>{noteStatus}</p>
//     //       <Link to={`/dashboard/edit-note/${_id}`} className="note-edit-button">
//     //         EDIT
//     //       </Link>
//     //       <Form method="post" action={`/dashboard/delete-note/${_id}`}>
//     //         <button type="submit" className="note-button">
//     //           DELETE
//     //         </button>
//     //       </Form>
//     //     </div>
//     //   </div>
//     // </Wrapper>

//       <li
//         key={_id}
//         className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
//       >
//         <div className="w-full flex items-center justify-between p-6 space-x-6">
//           <div className="flex-1 truncate">
//             <div className="flex items-center space-x-3">
//               <h3 className="text-gray-900 text-sm font-medium truncate">
//                 {title}
//               </h3>
//               <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
//                 {noteStatus}
//               </span>
//             </div>
//             <p className="mt-1 text-gray-500 text-sm truncate">{details}</p>
//           </div>
//         </div>
//         <div>
//           <div className="-mt-px flex divide-x divide-gray-200">
//             <div className="w-0 flex-1 flex">
//               <a
//                 // href={}
//                 className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
//               >
//                 <MailIcon
//                   className="w-5 h-5 text-gray-400"
//                   aria-hidden="true"
//                 />
//                 <span className="ml-3">Email</span>
//               </a>
//             </div>
//             <div className="-ml-px w-0 flex-1 flex">
//               <a
//                 // href={}
//                 className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
//               >
//                 <PhoneIcon
//                   className="w-5 h-5 text-gray-400"
//                   aria-hidden="true"
//                 />
//                 <span className="ml-3">Call</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </li>
//     </ul>
//   );
// };

// export default Notes;
