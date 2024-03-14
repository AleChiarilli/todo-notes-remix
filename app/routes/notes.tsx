import NewNote, { links as newNoteLinks } from "app/components/NewNote";
export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export function links() {
  return [...newNoteLinks()];
}
