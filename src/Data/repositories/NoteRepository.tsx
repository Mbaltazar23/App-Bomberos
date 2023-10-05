import { ResponseApiBombero } from "../sources/remote/models/ResponseApiBombero";
import { NoteRepository } from "../../Domain/repositories/NoteRepository";
import { ApiBombero } from "../sources/remote/api/ApiBombero";
import { AxiosError } from "axios";
import { Note } from "../../Domain/entities/Note";

export class NoteRepositoryImpl implements NoteRepository {

    async getAllNotes(id_user: string): Promise<Note[]> {
        try {
            const response = await ApiBombero.get<Note[]>(`/notes/getAll/${id_user
                }`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    };

    async create(note: Note): Promise<ResponseApiBombero> {
        try {
            const response = await ApiBombero.post<ResponseApiBombero>("/notes/create", note);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError: ResponseApiBombero = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async update(note: Note): Promise<ResponseApiBombero> {
        try {
            const response = await ApiBombero.put<ResponseApiBombero>("/notes/update", note);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError: ResponseApiBombero = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async remove(note: Note): Promise<ResponseApiBombero> {
        try {
            const response = await ApiBombero.delete<ResponseApiBombero>(`/notes/delete/${note.id
                }`);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError: ResponseApiBombero = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }
}