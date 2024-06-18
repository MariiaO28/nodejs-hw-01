import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const dbData = JSON.parse(data);
        if (dbData.length > 0) {
            dbData.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(dbData, null, 2), 'UTF-8');
        // console.log(dbData.length);
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`File via ${PATH_DB} doesn't exist.`);
        } else {
            console.error('Error generating contacts:', error);
        }
    }
};

removeLastContact();
