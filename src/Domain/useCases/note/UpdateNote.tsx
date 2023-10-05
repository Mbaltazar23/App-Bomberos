import { NoteRepositoryImpl } from '../../../Data/repositories/NoteRepository'
import { Note } from '../../entities/Note'

const { update } = new NoteRepositoryImpl()

export const UpdateNoteUseCase = async (note: Note) => {
    return await update(note)
}
