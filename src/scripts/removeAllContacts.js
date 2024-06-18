import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const dbData = JSON.parse(data);
        if (dbData.length > 0) {
            await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
            console.log('All contacts have been removed.');
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`File via ${PATH_DB} doesn't exist.`);
        } else {
            console.error('Error generating contacts:', error);
        }
    }
};

removeAllContacts();
