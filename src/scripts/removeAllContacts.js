import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {};

await removeAllContacts();

// [fs.unlink(path)](<https://nodejs.org/api/fs.html#fspromisesunlinkpath>) - видалення файлу.

// import fs from 'fs/promises';

// // Видаляємо файл за шляхом 'file.txt'
// (async () => {
//   try {
//     await fs.unlink('file.txt');
//     console.log('Файл успішно видалено.');
//   } catch (err) {
//     console.error('Помилка видалення файлу:', err);
//   }
// })();
