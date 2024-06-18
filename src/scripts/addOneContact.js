import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const dbData = JSON.parse(data);

        const newContact = createFakeContact();
        dbData.push(newContact);
        await fs.writeFile(PATH_DB, JSON.stringify(dbData, null, 2), 'utf-8');

        console.log('Contact was added successfully');
    } catch(error) {
        if (error.code === 'ENOENT') {
            console.error(`File via ${PATH_DB} doesn't exist.`);
        } else {
            console.error('Error generating contacts:', error);
        }
    }
};

addOneContact();
