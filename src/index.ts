import express from 'express';
import { Map } from "./Map";

const app = express();
const PORT: number = 3000;
const gameMap = new Map();
gameMap.initializeMap();

app.use(express.json());

app.use(express.static("public"));

app.get("/api/towers", (_request, response) => {
  response.json(gameMap.listTowers());
});

app.post("/api/towers/first/attack", (_request, response) => {
  gameMap.getTower(0).attackDefense(0, 1);
  response.json(gameMap.listTowers());
});

app.listen(PORT, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});