// import { Pill } from "./pill.js";
var Game = /** @class */ (function () {
    function Game() {
        this.width = 8;
        this.height = 16;
        this.main = document.getElementById("main");
        this.createBoard();
        this.pill = new Pill(3, 16);
    }
    Game.prototype.createBoard = function () {
        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                var block = document.createElement("div");
                var id = x + "_" + y;
                block.className = "block";
                block.id = id;
                this.main.append(block);
                console.log("eququq");
            }
        }
    };
    return Game;
}());
var Pill = /** @class */ (function () {
    function Pill(x, y) {
        this.positions[0] = { x: x, y: y };
        this.positions[1] = { x: x + 1, y: y };
        this.interval = setInterval(function () {
            console.log("lecI!");
        }, 1000);
    }
    return Pill;
}());
var game = new Game();
