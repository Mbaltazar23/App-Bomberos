import { ResponseApiBombero } from "../../Data/sources/remote/models/ResponseApiBombero";
import { Note } from "../entities/Note";

export interface NoteRepository {
    getAllNotes(id_user: string): Promise<Note[]>
    create(note: Note): Promise<ResponseApiBombero>
    update(note: Note): Promise<ResponseApiBombero>
    remove(note: Note): Promise<ResponseApiBombero>
}