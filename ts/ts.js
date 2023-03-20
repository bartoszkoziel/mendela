var main = document.getElementById("main");
var width = 8;
var height = 16;
for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
        var block = document.createElement("div");
        var id = x + "_" + y;
        block.append("X: " + x + "  Y: " + y);
        block.id = id;
        main.append(block);
    }
}
