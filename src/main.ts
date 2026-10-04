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
    const tower1 = new Tower("1", "Guild1", { x: 0, y: 1 });
    const tower2 = new Tower("2", "Guild1", { x: 1, y: 1 });
    const tower3 = new Tower("3", "Guild1", { x: 1, y: 0 });
    const tower4 = new Tower("4", "Guild1", { x: 2, y: 3 });
    const tower5 = new Tower("5", "Guild1", { x: 3, y: 2 });
    const tower6 = new Tower("6", "Guild1", { x: 0, y: 4 });
    const tower7 = new Tower("7", "Guild1", { x: 1, y: 4 });
    const tower8 = new Tower("8", "Guild1", { x: 2, y: 4 });
    const tower9 = new Tower("9", "Guild1", { x: 4, y: 2 });
    const tower10 = new Tower("10", "Guild1", { x: 4, y: 4 });
    const tower11 = new Tower("11", "Guild1", { x: 4, y: 1 });
    const tower12 = new Tower("12", "Guild1", { x: 4, y: 0 });

    const tower13 = new Tower("13", "Guild2", { x: 7, y: 8 });
    const tower14 = new Tower("14", "Guild2", { x: 6, y: 8 });
    const tower15 = new Tower("15", "Guild2", { x: 5, y: 8 });
    const tower16 = new Tower("16", "Guild2", { x: 3, y: 7 });
    const tower17 = new Tower("17", "Guild2", { x: 4, y: 7 });
    const tower18 = new Tower("18", "Guild2", { x: 5, y: 6 });
    const tower19 = new Tower("19", "Guild2", { x: 6, y: 6 });
    const tower20 = new Tower("20", "Guild2", { x: 7, y: 6 });
    const tower21 = new Tower("21", "Guild2", { x: 0, y: 6 });
    const tower22 = new Tower("22", "Guild2", { x: 1, y: 6 });
    const tower23 = new Tower("23", "Guild2", { x: 2, y: 6 });
    const tower24 = new Tower("24", "Guild2", { x: 3, y: 6 });


    const tower25 = new Tower("25", "Guild3", { x: 4, y: 2 });
    const tower26 = new Tower("26", "Guild3", { x: 5, y: 2 });
    const tower27 = new Tower("27", "Guild3", { x: 6, y: 2 });
    const tower28 = new Tower("28", "Guild3", { x: 7, y: 2 });
    const tower29 = new Tower("29", "Guild3", { x: 4, y: 2 });
    const tower30 = new Tower("30", "Guild3", { x: 5, y: 2 });
    const tower31 = new Tower("31", "Guild3", { x: 6, y: 2 });
    const tower32 = new Tower("32", "Guild3", { x: 7, y: 2 });
    const tower33 = new Tower("33", "Guild3", { x: 4, y: 2 });
    const tower34 = new Tower("34", "Guild3", { x: 5, y: 2 });
    const tower35 = new Tower("35", "Guild3", { x: 6, y: 2 });
    const tower36 = new Tower("36", "Guild3", { x: 7, y: 2 });


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

    map.addTower(tower25);
    map.addTower(tower26);
    map.addTower(tower27);
    map.addTower(tower28);
    map.addTower(tower29);
    map.addTower(tower30);
    map.addTower(tower31);
    map.addTower(tower32);
    map.addTower(tower33);
    map.addTower(tower34);
    map.addTower(tower35);
    map.addTower(tower36);

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

    map.listTowers();
    return map;
}