import { Tower } from "./Tower";
import { Map } from "./Map";
async function main() {

    const map = new Map();
    map.initializeMap();
    map.listTowers();
    map.getTower(5).attackDefense(3, 1);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    map.listTowers();
}

main();
