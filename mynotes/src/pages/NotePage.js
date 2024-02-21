import notes from "../assets/data";
import { useMatches } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

function NotePage() {
  const matches = useMatches();
  let noteId = matches[0].params.id;

  let note = notes.find((note) => note.id == noteId);
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <Arrow />
          </Link>
        </h3>
      </div>
      <textarea value={note?.body}></textarea>
    </div>
  );
}

export default NotePage;
