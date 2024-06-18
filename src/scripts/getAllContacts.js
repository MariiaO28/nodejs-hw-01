import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {};

console.log(await getAllContacts());

// [fs.readFile(path [, options])](<https://nodejs.org/api/fs.html#fspromisesreadfilepath-options>) - читання файлу

// import fs from 'fs/promises';

// (async () => {
//   try {
//     const data = await fs.readFile('file.txt', 'utf8');
//     console.log('Вміст файлу:', data);
//   } catch (err) {
//     console.error('Помилка читання файлу:', err);
//   }
// })();
