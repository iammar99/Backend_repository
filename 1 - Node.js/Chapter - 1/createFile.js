import { promises as fs } from 'fs';

// ----------------------- Reading file -----------------------

export const createFile = async () => {
    try {
        const content = 'This is some content to write in the file'; // Ensure this is a valid string
        await fs.writeFile('newfile.txt', content);
        console.log('File created and content written successfully!');
    } catch (err) {
        console.error(`Error creating file: ${err.message}`);
    }
};