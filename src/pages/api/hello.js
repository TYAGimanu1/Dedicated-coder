// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import *  as fs from 'fs';
import { json } from 'stream/consumers';
export default async function handler(req, res) {
  let allblog = [];
  let item = await fs.promises.readdir('blogdata');
  let myfile;
  for (let index = 0; index < item.length; index++) {
    const element = item[index];
    myfile = await fs.promises.readFile(('blogdata/' + element), 'utf-8');
    
    console.log(myfile);
    allblog.push(JSON.parse(myfile));
  }

 res.status(200).json({allblog});
}
