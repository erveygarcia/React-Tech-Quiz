import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Question } from '../models/Question.js'

import fs from 'fs/promises';

dotenv.config();

const seedQuestions = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);

    const data = await fs.readFile(
      new URL('./pythonQuestions.json', import.meta.url),
      'utf-8'
    );
    const questions = JSON.parse(data);

    await Question.deleteMany();
    await Question.insertMany(questions);

    console.log('✅ Python questions seeded!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding questions:', err);
    process.exit(1);
  }
};

seedQuestions();
