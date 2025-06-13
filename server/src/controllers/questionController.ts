import { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getQuestions = async (_req: Request, res: Response) => {
  try {
    const filePath = path.join(__dirname, '../seeds/pythonQuestions.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const questions = JSON.parse(data);
    res.json(questions);
  } catch (error) {
    console.error('❌ Error loading questions:', error);
    res.status(500).json({ message: 'Failed to load questions' });
  }
};
