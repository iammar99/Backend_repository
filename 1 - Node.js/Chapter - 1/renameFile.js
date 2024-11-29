import { promises as fs } from 'fs';

// ----------------------- Reading file -----------------------
export const renameFile = async () => {
  try {
    console.log('Appending to file...');
    await fs.rename("./file.txt", "newFile.txt");
    console.log("Text appended to file successfully.");
  } catch (error) {
    console.error("Error appending to file:", error);
  }
};