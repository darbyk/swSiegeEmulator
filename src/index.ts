import express, { Request, Response } from 'express';

const app = express();
const PORT: number = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample GET Route with explicit types
app.get('/', (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Hello from Node.js + Express + TypeScript server!' });
});

app.listen(PORT, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
