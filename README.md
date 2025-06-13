🧠 React Tech Quiz
A single-page quiz application built with React and TypeScript. Users can take a 20-question multiple choice quiz and view their final score at the end.

🚀 Features
Fetches questions from a mock API (/api/questions)

Dynamically renders questions and answer options

Tracks and displays score after the last question

Fully tested with Cypress Component Testing

🛠️ Tech Stack
React + TypeScript

Vite for development and build

Cypress for component testing

Node.js/Express for the mock API (optional)

📸 Screenshot

📂 Folder Structure
bash
Copy
Edit
/client
  ├── src/
  │   ├── components/Quiz.tsx
  │   ├── models/Question.ts
  │   └── main.tsx
  ├── cypress/
  │   ├── component/Quiz.cy.tsx
  │   └── fixtures/example.json
  └── vite.config.ts

/server
  ├── src/
  │   ├── controllers/questionController.ts
  │   ├── routes/api/questionRoutes.ts
  │   └── server.ts
🧪 Cypress Component Testing
Component testing is set up using the Cypress + Vite integration.

✅ Passing Tests
Renders initial screen with Start Quiz button

Loads questions and displays first question

Completes the quiz and displays the final score

You can run the tests with:

bash
Copy
Edit
npm run test
Or open the Cypress GUI:

bash
Copy
Edit
npx cypress open
📦 Installation
bash
Copy
Edit
# In the root directory:
npm install

# Start the backend (if you have a server folder)
cd server
npm install
npm run dev

# Start the frontend
cd ../client
npm install
npm run dev
📝 Notes
The app uses a mock JSON file as fixture data for Cypress tests: cypress/fixtures/example.json.

The actual data is served via /api/questions route and intercepted during testing.

https://drive.google.com/file/d/1CprpkV2S1dNSvxgbkMta37sxDlZOQx00/view?usp=sharing👉 [Watch the video here]