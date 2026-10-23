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

    public listTowers(): { number: number; name: string; guild: string; defenses: string; location: { x: number; y: number } }[] {
        this.TowerList.forEach((tower, index) => {
            console.log(`Tower ${index}: ${tower.getName()} -- Guild: ${tower.getGuild()} - Tower defenses: ${tower.listDefenseStates()}`);
        });
        return this.TowerList.map((tower, index) => ({
            number: index + 1,
            name: tower.getName(),
            guild: tower.getGuild(),
            defenses: tower.listDefenseStates(),
            location: tower.getLocation(),
        }));
    }

    public initializeMap(): Map {
        const initialPixelLocation = [
            [
                { x: 67, y: 642 },
                { x: 325, y: 763 },
                { x: 497, y: 946 },
                { x: 446, y: 620 },
                { x: 605, y: 750 },
                { x: 184, y: 475 },
                { x: 415, y: 445 },
                { x: 620, y: 495 },
                { x: 825, y: 537 },
                { x: 845, y: 695 },
                { x: 925, y: 855 },
                { x: 765, y: 950 }
            ],
            [
                { x: 1280, y: 145 },
                { x: 990, y: 165 },
                { x: 640, y: 150 },
                { x: 1140, y: 255 },
                { x: 825, y: 235 },
                { x: 1590, y: 295 },
                { x: 1405, y: 330 },
                { x: 1210, y: 390 },
                { x: 980, y: 415 },
                { x: 755, y: 370 },
                { x: 570, y: 325 },
                { x: 370, y: 295 }
            ],
            [
                { x: 1890, y: 650 },
                { x: 1625, y: 770 },
                { x: 1415, y: 920 },
                { x: 1330, y: 705 },
                { x: 1540, y: 650 },
                { x: 1070, y: 950 },
                { x: 1150, y: 825 },
                { x: 1070, y: 700 },
                { x: 1105, y: 550 },
                { x: 1335, y: 500 },
                { x: 1550, y: 470 },
                { x: 1790, y: 465 }
            ]
        ];

        for(let i = 0; i < 3; i++) {
            // Initialization logic here
            const tower1 = new Tower("1", `Guild${i + 1}`, initialPixelLocation[i]![0]!);
            const tower2 = new Tower("2", `Guild${i + 1}`, initialPixelLocation[i]![1]!);
            const tower3 = new Tower("3", `Guild${i + 1}`, initialPixelLocation[i]![2]!);
            const tower4 = new Tower("4", `Guild${i + 1}`, initialPixelLocation[i]![3]!);
            const tower5 = new Tower("5", `Guild${i + 1}`, initialPixelLocation[i]![4]!);
            const tower6 = new Tower("6", `Guild${i + 1}`, initialPixelLocation[i]![5]!);
            const tower7 = new Tower("7", `Guild${i + 1}`, initialPixelLocation[i]![6]!);
            const tower8 = new Tower("8", `Guild${i + 1}`, initialPixelLocation[i]![7]!);
            const tower9 = new Tower("9", `Guild${i + 1}`, initialPixelLocation[i]![8]!);
            const tower10 = new Tower("10", `Guild${i + 1}`, initialPixelLocation[i]![9]!);
            const tower11 = new Tower("11", `Guild${i + 1}`, initialPixelLocation[i]![10]!);
            const tower12 = new Tower("12", `Guild${i + 1}`, initialPixelLocation[i]![11]!);

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