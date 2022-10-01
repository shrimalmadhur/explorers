// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from 'path';
import { promises as fs } from 'fs';

interface Props {
  data: Blockchain[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const jsonDirectory = path.join(process.cwd(), 'json');

  //Read the json data file blockchains.json
  const fileContents = await fs.readFile(jsonDirectory + '/blockchains.json', 'utf8');

  //Return the content of the data file in json format

  res.status(200).json(JSON.parse(fileContents));
}