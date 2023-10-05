import { createContext, useState } from "react";
import { ResponseApiBombero } from "../../Data/sources/remote/models/ResponseApiBombero";
import { GetAllNotesUseCase } from "../../Domain/useCases/note/GetAllNotes";
import { CreateNoteUseCase } from "../../Domain/useCases/note/CreateNote";
import { UpdateNoteUseCase } from "../../Domain/useCases/note/UpdateNote";
import { DeleteNoteUseCase } from "../../Domain/useCases/note/DeleteNote";
import { Note } from "../../Domain/entities/Note";

export interface NoteContextProps {
    notes: Note[]
    getAllNotesByUser(id_user: string): Promise<void>
    create(note: Note): Promise<ResponseApiBombero>
    update(note: Note): Promise<ResponseApiBombero>
    remove(note: Note): Promise<ResponseApiBombero>
}

export const NoteContext = createContext({} as NoteContextProps);

export const NoteProvider = ({ children }: any) => {
    const [notes, setNotes] = useState<Note[]>([])

    const getAllNotesByUser = async (id_user: string): Promise<void> => {
        const result = await GetAllNotesUseCase(id_user);
        setNotes(result)
    }

    const create = async (note: Note): Promise<ResponseApiBombero> => {
        const result = await CreateNoteUseCase(note)
        getAllNotesByUser(note.user_id)
        return result
    }

    const update = async (note: Note): Promise<ResponseApiBombero> => {
        const result = await UpdateNoteUseCase(note)
        getAllNotesByUser(note.user_id)
        return result
    }

    const remove = async (note: Note): Promise<ResponseApiBombero> => {
        const result = await DeleteNoteUseCase(note)
        getAllNotesByUser(note.user_id)
        return result
    }

    return (
        <NoteContext.Provider
            value={{
                notes,
                getAllNotesByUser,
                create,
                update,
                remove
            }}>
            {children}
        </NoteContext.Provider>
    )
}
