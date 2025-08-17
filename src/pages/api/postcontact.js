import * as fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        let data = await fs.promises.readdir('contactdata');
        console.log(req.body);
        await fs.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body), (err) => {
            console.log(err);
        })
        res.status(200).json({ message: 'Contact form submitted successfully', data: req.body });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
}