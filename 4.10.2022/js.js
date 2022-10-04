let inputHeight = document.createElement("input")
let inputWidth = document.createElement("input")
let inputMines = document.createElement("input")
let btnStart = document.createElement("input")

let divContainer = document.createElement("div")
divContainer.classList = "container"

inputHeight.setAttribute("type", "text")
inputWidth.setAttribute("type", "text")
inputMines.setAttribute("type", "text")
btnStart.setAttribute("type", "button")
btnStart.setAttribute("value", "GENERUJ")

btnStart.onclick = function(){

    // ROZMIAR POLA Z MINA 50x50px
    var height = inputHeight.value
    var width = inputWidth.value

    divContainer.style.height = 50 * inputHeight.value + "px"
    divContainer.style.width = 50 * inputWidth.value + "px"

    console.log("Hgo");

    for(let i = 0; i < width; i++){
        for(let j = 0; j < height; j++){
            let block = document.createElement("div")
            block.classList = "block"

            block.style.top = i * 50 + "px"
            block.style.left = j * 50 + "px"

            divContainer.append(block)
        }
    }

    document.body.append(divContainer)

}

document.body.append(inputHeight, inputWidth, inputMines, btnStart)
