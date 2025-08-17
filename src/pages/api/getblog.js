import * as fs from 'fs/promises';

export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    const data = await fs.readFile(`blogdata/${slug}.json`, 'utf-8');
    const parsedData = JSON.parse(data);
    res.status(200).json(parsedData); // Success: File read and sent as JSON
  } catch (error) {
    // Error: The file does not exist or another issue occurred
    console.error(`Error fetching blog for slug: ${slug}`, error);
    res.status(404).json({ error: 'Blog post not found' }); // Error: A response is sent
  }
}