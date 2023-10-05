import { NoteRepositoryImpl } from "../../../Data/repositories/NoteRepository"

const { getAllNotes } = new NoteRepositoryImpl()

export const GetAllNotesUseCase = async (id_user: string) => {
    return await getAllNotes(id_user)
}
