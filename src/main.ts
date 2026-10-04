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
    const tower1 = new Tower("1", "Guild1");
    const tower2 = new Tower("2", "Guild1");
    const tower3 = new Tower("3", "Guild1");
    const tower4 = new Tower("4", "Guild1");
    const tower5 = new Tower("5", "Guild1");
    const tower6 = new Tower("6", "Guild1");
    const tower7 = new Tower("7", "Guild1");
    const tower8 = new Tower("8", "Guild1");
    
    const tower9 = new Tower("9", "Guild2");
    const tower10 = new Tower("10", "Guild2");
    const tower11 = new Tower("11", "Guild2");
    const tower12 = new Tower("12", "Guild2");
    const tower13 = new Tower("13", "Guild2");
    const tower14 = new Tower("14", "Guild2");
    const tower15 = new Tower("15", "Guild2");
    const tower16 = new Tower("16", "Guild2");

    const tower17 = new Tower("17", "Guild3");
    const tower18 = new Tower("18", "Guild3");
    const tower19 = new Tower("19", "Guild3");
    const tower20 = new Tower("20", "Guild3");
    const tower21 = new Tower("21", "Guild3");
    const tower22 = new Tower("22", "Guild3");
    const tower23 = new Tower("23", "Guild3");
    const tower24 = new Tower("24", "Guild3");


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
    map.addTower(tower13);
    map.addTower(tower14);
    map.addTower(tower15);
    map.addTower(tower16);

    map.addTower(tower17);
    map.addTower(tower18);
    map.addTower(tower19);
    map.addTower(tower20);
    map.addTower(tower21);
    map.addTower(tower22);
    map.addTower(tower23);
    map.addTower(tower24);

    map.listTowers();
    return map;
}