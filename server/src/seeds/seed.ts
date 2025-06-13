import mongoose from 'mongoose';
import { Question } from '../models/Question.js';
import questionData from '../seeds/pythonQuestions.json' assert { type: 'json' };

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/questionsDB';

const seedQuestions = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    await Question.deleteMany({});
    await Question.insertMany(questionData);
    console.log('✅ Questions seeded successfully');
  } catch (error) {
    console.error('❌ Error seeding questions:', error);
  } finally {
    await mongoose.disconnect();
  }
};

seedQuestions();
