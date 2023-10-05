import { NoteRepositoryImpl } from "../../../Data/repositories/NoteRepository"
import { Note } from "../../entities/Note"

const { remove } = new NoteRepositoryImpl()

export const DeleteNoteUseCase = async (note: Note) => {
    return await remove(note)
}
