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

    public initializeMap(): Map {

        for(let i = 0; i < 3; i++) {
            // Initialization logic here
            const tower1 = new Tower("1", `Guild${i + 1}`, { x: 0, y: 1 });
            const tower2 = new Tower("2", `Guild${i + 1}`, { x: 1, y: 1 });
            const tower3 = new Tower("3", `Guild${i + 1}`, { x: 1, y: 0 });
            const tower4 = new Tower("4", `Guild${i + 1}`, { x: 2, y: 3 });
            const tower5 = new Tower("5", `Guild${i + 1}`, { x: 3, y: 2 });
            const tower6 = new Tower("6", `Guild${i + 1}`, { x: 0, y: 4 });
            const tower7 = new Tower("7", `Guild${i + 1}`, { x: 1, y: 4 });
            const tower8 = new Tower("8", `Guild${i + 1}`, { x: 2, y: 4 });
            const tower9 = new Tower("9", `Guild${i + 1}`, { x: 4, y: 2 });
            const tower10 = new Tower("10", `Guild${i + 1}`, { x: 4, y: 4 });
            const tower11 = new Tower("11", `Guild${i + 1}`, { x: 4, y: 1 });
            const tower12 = new Tower("12", `Guild${i + 1}`, { x: 4, y: 0 });

            this.addTower(tower1);
            this.addTower(tower2);
            this.addTower(tower3);
            this.addTower(tower4);
            this.addTower(tower5);
            this.addTower(tower6);
            this.addTower(tower7);
            this.addTower(tower8);
            this.addTower(tower9);
            this.addTower(tower10);
            this.addTower(tower11);
            this.addTower(tower12);

            tower1.connectTower(tower2);
            tower1.connectTower(tower4);
            tower1.connectTower(tower6);
            tower2.connectTower(tower4);
            tower2.connectTower(tower5);
            tower2.connectTower(tower3);
            tower3.connectTower(tower5);
            tower3.connectTower(tower12);
            tower4.connectTower(tower7);
            tower4.connectTower(tower8);
            tower4.connectTower(tower9);
            tower4.connectTower(tower5);
            tower5.connectTower(tower9);
            tower5.connectTower(tower10);
            tower5.connectTower(tower11);
            tower6.connectTower(tower7);
            tower7.connectTower(tower8);
            tower8.connectTower(tower9);
            tower9.connectTower(tower10);
            tower10.connectTower(tower11);
            tower11.connectTower(tower12);
        }

        this.listTowers();
        return this;
    }
}