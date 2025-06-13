export const getQuestions = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/questions');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    throw error;
  }
};
