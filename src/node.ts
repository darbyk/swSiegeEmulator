export class Node {
    private name: string = "";
    public constructor() {

    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}