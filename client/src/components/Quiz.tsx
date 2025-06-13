import { useEffect, useState } from 'react';
import type { Question } from '../models/Question';
import type { Answer } from '../models/Answer';

const Quiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/api/questions');
        const data = await response.json();
        setQuestions(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch questions:', error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerClick = (answer: Answer) => {
    if (answer.isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex !== null) {
      const nextIndex = currentIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentIndex(nextIndex);
      } else {
        setIsFinished(true);
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (isFinished) {
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>
          Your score is {score} out of {questions.length}
        </p>
      </div>
    );
  }

  if (currentIndex === null) {
    return (
      <div>
        <h2>Welcome to the Quiz</h2>
        <button onClick={() => setCurrentIndex(0)}>Start Quiz</button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      <h2>
        Question {currentIndex + 1} of {questions.length}
      </h2>
      <p>{currentQuestion.question}</p>
      <ul>
        {currentQuestion.answers.map((answer: Answer, index: number) => (
          <li key={index}>
            <button onClick={() => handleAnswerClick(answer)}>{answer.text}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
