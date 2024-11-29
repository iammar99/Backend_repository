import { promises as fs } from 'fs';

// ----------------------- Reading file -----------------------

export const deleteFile = async () => {
    try {
        await fs.unlink('newfile.txt',);
    } catch (err) {
        console.error(`Error creating file: ${err.message}`);
    }
};