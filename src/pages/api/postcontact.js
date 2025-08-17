import * as fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const dataDir = path.join(process.cwd(), 'contactdata');
            // Ensure the directory exists
            try {
                await fs.mkdir(dataDir, { recursive: true });
            } catch (mkdirErr) {
                if (mkdirErr.code !== 'EEXIST') {
                    throw mkdirErr;
                }
            }

            const files = await fs.readdir(dataDir);
            const newFileName = `${files.length + 1}.json`;
            const filePath = path.join(dataDir, newFileName);

            await fs.writeFile(filePath, JSON.stringify(req.body, null, 2));

            res.status(200).json({ message: 'Contact form submitted successfully', data: req.body });
        } catch (error) {
            console.error("Error writing contact data:", error);
            res.status(500).json({ message: 'Error submitting contact form', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
}