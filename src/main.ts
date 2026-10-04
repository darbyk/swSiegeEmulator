import { Tower } from "./Tower";
import { Map } from "./Map";
async function main() {

    const map = initializeMap();
    map.listTowers();
    map.getTower(5).attackDefense(3, 1);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    map.listTowers();
}

main();


function initializeMap(): Map {
    const map = new Map();

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

        map.addTower(tower1);
        map.addTower(tower2);
        map.addTower(tower3);
        map.addTower(tower4);
        map.addTower(tower5);
        map.addTower(tower6);
        map.addTower(tower7);
        map.addTower(tower8);
        map.addTower(tower9);
        map.addTower(tower10);
        map.addTower(tower11);
        map.addTower(tower12);

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

    map.listTowers();
    return map;
}