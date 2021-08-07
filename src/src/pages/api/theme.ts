import { connectToDatabase } from '../../database/connect';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getTheme = async () => {
  const { db } = await connectToDatabase();
  return await db.collection('themes').findOne({ name: 'Light' });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const theme = await getTheme();
  res.status(200).json(theme);
};

export default handler;
