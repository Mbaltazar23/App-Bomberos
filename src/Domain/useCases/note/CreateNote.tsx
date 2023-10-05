import { NoteRepositoryImpl } from "../../../Data/repositories/NoteRepository"
import { Note } from "../../entities/Note"

const { create } = new NoteRepositoryImpl()

export const CreateNoteUseCase = async (note: Note) => {
  return await create(note)
}
