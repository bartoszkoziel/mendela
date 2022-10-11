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

    let temp = [
        {x: 0, y: 0, isBomb: true},
        {x: 1, y: 0, isBomb: false},
        {x: 2, y: 0, isBomb: false},
        {x: 0, y: 1, isBomb: false},
        {x: 1, y: 1, isBomb: false},
        {x: 2, y: 1, isBomb: false},
        {x: 0, y: 2, isBomb: false},
        {x: 1, y: 2, isBomb: true},
        {x: 2, y: 2, isBomb: true}
    ]

    divContainer.style.height = 50 * inputHeight.value + "px"
    divContainer.style.width = 50 * inputWidth.value + "px"

    for(let i = 0; i < width; i++){
        for(let j = 0; j < height; j++){
            let block = document.createElement("div")
            block.classList = "block"

            block.style.top = i * 50 + "px"
            block.style.left = j * 50 + "px"

            block.addEventListener('click', function(){
                
                let posX = this.style.left.replace("px", "") / 50
                let posY = this.style.top.replace("px", "") / 50

                // >GETTIN INDEX
                let n = 0
                for(n = 0; n < temp.length; n++){
                    if(temp[n].x == posX && temp[n].y == posY){
                        break
                    }
                }
                // <GETTIN INDEX

                if(temp[n].isBomb == true){
                    this.style.backgroundColor = 'red'
                }
                else{
                    this.style.backgroundColor = 'green'
                }
            })
            divContainer.append(block)
            
        }
    }
    document.body.append(divContainer)
}
document.body.append(inputHeight, inputWidth, inputMines, btnStart)
