import { Tower } from "./Tower";
async function main() {

    const tower1 = new Tower();
    tower1.setName("tower1");
    console.log(tower1.getName());
    tower1.listDefenseStates();
    tower1.attackDefense(0, .5);
    tower1.listDefenseStates();

}

main();