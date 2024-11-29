import { promises as fs } from "fs"
// ----------------------- Reading file -----------------------
export const readfile = async () => {
    try {
        const data = await fs.readFile('file.txt', 'utf-8'); // Read file asynchronously
        return data
    } catch (err) {
        return err
    }
}