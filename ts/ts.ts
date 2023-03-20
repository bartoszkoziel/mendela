let main = document.getElementById("main") as HTMLDivElement

let width = 8 as number
let height = 16 as number

for(let y  = 0; y < height; y++){
    for(let x = 0; x < width; x++){
        let block = document.createElement("div")
        let id = x + "_" + y
        block.append("X: " + x + "  Y: " + y)
        block.id = id
        main.append(block)
    }
}