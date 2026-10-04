export interface TowerLocation { 
    x: number;
    y: number;
}

export class Tower {
    public static readonly NUMBER_OF_DEFENSES: number = 5;
    private name: string = "";
    private defenseList: boolean[];
    private guild: string = "";
    private towerLocation: TowerLocation;
    private connectedTowers: Tower[] = [];

    public constructor(towerId: string, guild: string, location: TowerLocation) {
        this.guild = guild;
        this.name = towerId;
        this.towerLocation = location;
        this.defenseList = new Array(Tower.NUMBER_OF_DEFENSES).fill(true);
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getGuild(): string {
        return this.guild;
    }

    public attackDefense(index: number, chanceToWin: number): void {
        if (index < 0 || index >= Tower.NUMBER_OF_DEFENSES) {
            throw new Error("Invalid defense index");
        }
        if (Math.random() < chanceToWin) {
            this.beatDefense(index);
        }
    }

    public listDefenseStates(): string {
        let currentDefenses = "";
        this.defenseList.map((state, index) => {
            currentDefenses += state ? "O" : "X";
            // console.log(`Defense ${index}: ${state ? "Intact" : "Beaten"}`);
        });
        return currentDefenses;
    }

    public connectTower(tower: Tower): void {
        if (!this.connectedTowers.includes(tower)) {
            this.connectedTowers.push(tower);
            tower.connectTower(this); // Ensure bidirectional connection
        }
    }

    public getConnectedTowers(): Tower[] {
        return this.connectedTowers;
    }

    private beatDefense(index: number): void {
        if (index < 0 || index >= Tower.NUMBER_OF_DEFENSES) {
            throw new Error("Invalid defense index");
        }
        this.defenseList[index] = false;
    }

     
}