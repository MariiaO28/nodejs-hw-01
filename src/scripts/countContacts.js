import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {};

console.log(await countContacts());

// [fs.readdir(path)](<https://nodejs.org/api/fs.html#fspromisesreaddirpath-options>) - виведення вмісту папки

// import fs from 'fs/promises';

// // Отримуємо список файлів і каталогів у поточному каталозі
// (async () => {
//   try {
//     const files = await fs.readdir('.');
//     console.log('Список файлів і каталогів:', files);
//   } catch (err) {
//     console.error('Помилка отримання списку файлів і каталогів:', err);
//   }
// })();
