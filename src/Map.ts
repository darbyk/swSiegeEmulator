import { Tower } from "./Tower";

export class Map {
    private TowerList: Tower[];

    public constructor() {
        this.TowerList = [];
    }
    
    public addTower(tower: Tower): void {
        this.TowerList.push(tower);
    }

    public getTower(index: number): Tower {
        const tower = this.TowerList[index];
        if (tower === undefined) {
            throw new Error(`Invalid tower index: ${index}`);
        }
        return tower;  
    }

    public listTowers(): void {
        this.TowerList.forEach((tower, index) => {
            console.log(`Tower ${index}: ${tower.getName()} -- Guild: ${tower.getGuild()} - Tower defenses: ${tower.listDefenseStates()}`);
        });
    }
}