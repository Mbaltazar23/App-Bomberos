import { useContext, useState } from 'react'
import { UserConext } from '../../../../../context/UserContext';
import { NoteContext } from '../../../../../context/NoteContext';
import { Note } from '../../../../../../Domain/entities/Note';

const FireFighterNoteListViewModel = () => {
    const [responseMessage, setResponseMessage] = useState("");
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [selectedNoteId, setSelectedNoteId] =
        useState<Note | null>();

    const { notes, getAllNotesByUser, remove } = useContext(NoteContext)

    const { user } = useContext(UserConext)

    const handleDeleteNote = (note: Note) => {
        setSelectedNoteId(note);
        setShowDeleteConfirmation(true);
      };
    
      const handleConfirmDeleteNote = () => {
        if (selectedNoteId) {
          deleteNote(selectedNoteId);
        }
        setSelectedNoteId(null);
        setShowDeleteConfirmation(false);
      };
    
      const handleCancelDeleteNote = () => {
        setSelectedNoteId(null);
        setShowDeleteConfirmation(false);
      };
    
      const deleteNote = async (note: Note) => {
        const result = await remove(note);
        setResponseMessage(result.message);
      };

    return {
        user,
        notes,
        responseMessage,
        getAllNotesByUser,
        showDeleteConfirmation,
        handleDeleteNote,
        handleConfirmDeleteNote,
        handleCancelDeleteNote,
    }
}

export default FireFighterNoteListViewModel

