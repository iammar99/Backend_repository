import http from 'http';
import { name, page } from './module.js'
import { promises as fs, rename } from 'fs';
import { parse } from 'url';
// --------------- Playing with Files ---------------
import { readfile } from './read.js';
import { updatefile } from './update.js';
import { createFile } from './createFile.js';
import { deleteFile } from './deleteFile.js'
import { renameFile } from './renameFile.js';
// --------------- Playing with URL ---------------
import { getURL } from './getURL.js';
// --------------- File Server ---------------
import { startServer } from './startServer.js';



// Create a server object:
http.createServer(async (req, res) => {
  const q = parse(req.url, true);
  const filename = "." + q.pathname;
  if (q.pathname !== "/" && q.pathname !== "/favicon.ico") {
    try {

      const data = await fs.readFile(filename, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
      return
    } catch (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write("404 Not Found");
      console.error(err);
      res.end();
      return
    }

  }
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // =============== Fixed Text =============== 

  res.write('Hello World  ');
  res.write("\n")
  res.write('How are You! ');
  res.write("\n")
  res.write("Name:")
  res.write(name)
  res.write("\n")
  res.write("Page:")
  res.write(page)
  res.write("\n")
  res.write("File :")
  res.write("\n")

  // =============== Create a file =============== 

  try {
    // await createFile();
  } catch (err) {
    res.write('Error Creating file: ' + err.message);
  }

  // ===============  Reading a file =============== 

  try {
    const response = await readfile();
    res.write(response);
  } catch (err) {
    res.write('\nError reading file: ' + err.message);
  }

  // =============== updating in a file =============== 

  try {
    // await updatefile()
  } catch (err) {
    res.write('\nError updating file: ' + err.message);
  }

  // =============== deleting a file =============== 

  try {
    // await deleteFile()
  } catch (err) {
    res.write('\nError updating file: ' + err.message);
  }

  // =============== Renaming a file =============== 

  try {
    // await renameFile()
  } catch (err) {
    res.write('\nError updating file: ' + err.message);
  }

  // =============== Playing With URL =============== 

  try {
    const url = await getURL()
    res.write("\nURL from getURL file : ")
    res.write(url)
  } catch (err) {
    res.write('\nError Playing with URL: ' + err.message);
  }

  // startServer(3001);

  res.end()


  // =============== Node.js File Server =============== 



}).listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});


// res is use to show result result to user
// req is use to get something from user