import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js'

import fs from 'fs/promises';

const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const dbData = JSON.parse(data);

        let newContacts = [];
        for (let i = 0; i < number; i += 1) {
            newContacts.push(createFakeContact());
        }
        dbData.push(...newContacts)
        await fs.writeFile(PATH_DB, JSON.stringify(dbData, null, 2), 'utf-8');

        console.log(`Successfully added ${number} new contacts.`);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`File via ${PATH_DB} doesn't exist.`);
        } else {
            console.error('Error generating contacts:', error);
        }
    }
}

await generateContacts(5);
