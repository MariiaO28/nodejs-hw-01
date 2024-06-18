import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    try {
        return await fs.readFile(PATH_DB, 'utf-8');
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`File via ${PATH_DB} doesn't exist.`);
        } else {
            console.error('Error generating contacts:', error);
        }
    }
};

console.log(await getAllContacts());
