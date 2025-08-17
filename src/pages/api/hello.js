import * as fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  let allblog = [];
  try {
    const dataDir = path.join(process.cwd(), 'blogdata');
    const files = await fs.readdir(dataDir);

    for (const file of files) {
      const filePath = path.join(dataDir, file);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      allblog.push(JSON.parse(fileContent));
    }

    res.status(200).json({ allblog });
  } catch (error) {
    console.error("Error fetching blog data:", error);
    res.status(500).json({ error: 'Failed to retrieve blog data' });
  }
}