import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {};

await addOneContact();


// [fs.appendFile(path, data [, options])](<https://nodejs.org/api/fs.html#fspromisesappendfilepath-data-options>)додавання у файл

// import fs from 'fs/promises';

// // Додаємо дані до файлу 'output.txt'
// (async () => {
//   const data = 'Це дані, які ми додаємо до файлу.';
//   try {
//     await fs.appendFile('output.txt', data, 'utf8');
//     console.log('Дані успішно додані до файлу.');
//   } catch (err) {
//     console.error('Помилка додавання даних до файлу:', err);
//   }
// })();
