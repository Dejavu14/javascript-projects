// handler.js

// 1. Ubah 'require' menjadi 'import'
import { nanoid } from "nanoid";
import notes from "./notes.js"; // Penting: ini juga perlu diubah!

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    // Masukan Nilai Ke Dalam Array
    const newNote = {
        title,
        tags,
        body,
        id,
        createdAt,
        updatedAt,
    };

    notes.push(newNote);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: "success",
            message: "Catatan berhasil ditambahkan",
            data: {
                noteId: id,
            },
        });
        response.code(201);
        return response;
    }

    const response = h.response({
        status: "fail",
        message: "Catatan gagal ditambahkan",
    });

    response.code(500); // Tambahkan code 500 untuk kegagalan server
    return response;
};

// 2. Ubah 'module.exports' menjadi 'export'
export { addNoteHandler };