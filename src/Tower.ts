export class Tower {
    public static readonly NUMBER_OF_DEFENSES: number = 5;
    private name: string = "";
    private defenseList: boolean[];

    public constructor() {
        this.defenseList = new Array(Tower.NUMBER_OF_DEFENSES).fill(true);
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public attackDefense(index: number, chanceToWin: number): void {
        if (index < 0 || index >= Tower.NUMBER_OF_DEFENSES) {
            throw new Error("Invalid defense index");
        }
        if (Math.random() < chanceToWin) {
            this.beatDefense(index);
        }
    }

    public listDefenseStates(): boolean[] {
        this.defenseList.map((state, index) => {
            console.log(`Defense ${index}: ${state ? "Intact" : "Beaten"}`);
        });
        return this.defenseList;
    }

    private beatDefense(index: number): void {
        if (index < 0 || index >= Tower.NUMBER_OF_DEFENSES) {
            throw new Error("Invalid defense index");
        }
        this.defenseList[index] = false;
    }

     
}