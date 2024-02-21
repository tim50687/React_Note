import notes from "../assets/data";
import { useMatches } from "react-router-dom";

function NotePage() {
  const matches = useMatches();
  let noteId = matches[0].params.id;

  let note = notes.find((note) => note.id == noteId);
  return (
    <div>
      <p>{note?.body}</p>
    </div>
  );
}

export default NotePage;
