import { promises as fs } from 'fs';

// ----------------------- Reading file -----------------------
export const updatefile = async () => {
  try {
    console.log('Appending to file...');
    await fs.appendFile("./file.txt", "\nThis text is appended using Node.js");
    console.log("Text appended to file successfully.");
  } catch (error) {
    console.error("Error appending to file:", error);
  }
};