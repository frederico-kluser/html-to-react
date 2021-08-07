import { connectToDatabase } from '../../database/connect';
import type { NextApiRequest, NextApiResponse } from 'next';

export const getCustomizations = async (pageName: string) => {
  const { db } = await connectToDatabase();
  return await db.collection('customizations').findOne({ page: pageName });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const customizations = await getCustomizations('Home');
  res.status(200).json(customizations);
};

export default handler;
