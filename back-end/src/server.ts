import express, { Request, Response } from "express";

const app = express();
const port = 4000;

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello from Express.js with TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
