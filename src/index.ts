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

app.post("/api/towers/:towerNumber/attack", (request, response) => {
  const towerNumber = Number(request.params.towerNumber);
  if (!Number.isInteger(towerNumber) || towerNumber < 1) {
    response.status(400).json({ error: "Tower number must be a positive integer" });
    return;
  }

  try {
    gameMap.getTower(towerNumber - 1).attackDefense(0, 1);
  } catch {
    response.status(404).json({ error: "Tower not found" });
    return;
  }

  response.json(gameMap.listTowers());
});

app.listen(PORT, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});