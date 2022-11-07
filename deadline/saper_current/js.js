let inputHeight = document.createElement("input")
let inputWidth = document.createElement("input")
let inputMines = document.createElement("input")
let btnStart = document.createElement("input")

inputHeight.setAttribute("type", "text")
inputWidth.setAttribute("type", "text")
inputMines.setAttribute("type", "text")
btnStart.setAttribute("type", "button")
btnStart.setAttribute("value", "GENERUJ")

document.body.append(inputHeight, inputWidth, inputMines, btnStart)

setInterval(isCorrect, 100)

var height = null
var width = null
var ileMin = null
var movesCount = 0

var tabFields = [] // Obiekty tablicy tabFields mają 4 parametry x, y, status1 (czy jest mina numerek generalnie co się kryje "pod") oraz status2 (co wybrał na nim user np. flaga, znak zapytania lub brak)
// {x: pozycjaX, y: pozycjaY, status1: [bombed, 0, 1, 2, ..., 8], status2: [open, hidden, flag, bomb, question]}

btnStart.onclick = function () {
   height = inputHeight.value
   width = inputWidth.value
   ileMin = inputMines.value

   if (ileMin * 3 < height * width) {
      let divContainer = document.createElement("div")
      divContainer.classList = "container"
      divContainer.style.height = 50 * height + "px"
      divContainer.style.width = 50 * width + "px"

      // >Generacja planszy
      for (let i = 0; i < height; i++) {
         for (let j = 0; j < width; j++) {
            let block = document.createElement("div")
            block.style.top = i * 50 + "px"
            block.style.left = j * 50 + "px"
            let id = j + "_" + i
            block.classList = "block"
            block.setAttribute("id", id)

            block.addEventListener("click", function () {
               leftclick(j, i) // Przy pierwszym kliku generuje miny, przy drugim
            })

            block.oncontextmenu = function (event) {
               event.preventDefault()
               rightclick(j, i)
            }

            divContainer.append(block)
         }
      }

      document.body.append(divContainer)
   } else {
      alert("za duzo min")
      location.reload()
   }
}

function leftclick(x, y) {
   // >ZNAJDOWANIE INDEXU
   let n = width * y + x

   console.log(x + " " + y)
   console.log("N: " + n)

   // >GENERACJA MIEJSCA MIN (PIERWSZY KLIK)
   if (movesCount == 0) {
      let tabMiny = []

      for (let i = 0; i < ileMin; i++) {
         let posY = Math.floor(Math.random() * height)
         let posX = Math.floor(Math.random() * width)

         let replay = 0

         let obj = { x: posX, y: posY }

         for (let j = 0; j < tabMiny.length; j++) {
            if (
               (tabMiny[j].x == obj.x && tabMiny[j].y == obj.y) ||
               (posX == x && posY == y)
            ) {
               replay = 1
               break
            } else {
               replay = 0
            }
         }

         if (replay == 0) {
            tabMiny.push(obj)
         } else {
            i--
         }
      }
      // <GENERACJA MIEJSCA MIN

      // >TWORZENIE TABLICY "TABFIELDS[]"
      let fieldsIndex = 0
      for (let y = 0; y < height; y++) {
         for (let x = 0; x < width; x++) {
            let tempObj = { x: x, y: y }

            // CASE: POLE JEST MINĄ
            if (containsObject(tempObj, tabMiny)) {
               tabFields[fieldsIndex] = {
                  x: x,
                  y: y,
                  state1: "bombed",
                  state2: "hidden",
               }
            } else {
               tabFields[fieldsIndex] = {
                  x: x,
                  y: y,
                  state1: "notbombed",
                  state2: "hidden",
               }
            }

            fieldsIndex++
         }
      }

      for (let i = 0; i < height * width; i++) {
         if (tabFields[i].state1 == "notbombed") {
            tabFields[i].state1 = findState(tabFields, i, parseInt(width))
         }
      }

      // ZMIANA PARAMETROW BLOKU
      let thisDiv = document.getElementById(x + "_" + y)
      thisDiv.style.backgroundColor = "green"
      thisDiv.innerHTML = tabFields[n].state1
      tabFields[n].state2 = "open"

      console.table(tabFields)
   }

   // >CLICK (POZOSTAŁE KLIKI)
   else if (movesCount > 0 && tabFields[n].state2 == "hidden") {
      // >JESLI KLIKNIESZ W BOMBE
      if (tabFields[n].state1 == "bombed") {
         let thisDiv = document.getElementById(x + "_" + y)
         tabFields[n].state2 = "open"

         let img = document.createElement("img")
         img.setAttribute("src", "img/bomb.PNG")
         img.setAttribute("width", "50px")
         img.setAttribute("height", "50px")
         thisDiv.append(img)

         console.table(tabFields)

         alert("przegrana :C")
      }
      // >JESLI NIE KLIKNIESZ W BOMBE
      else if (tabFields[n].state1 != "bombed") {
         let thisDiv = document.getElementById(x + "_" + y)
         thisDiv.style.backgroundColor = "green"
         thisDiv.innerHTML = tabFields[n].state1
         tabFields[n].state2 = "open"

         // >SPRAWDZANIE WYGRANEJ
         if (checkWin(tabFields, ileMin) == true) {
            alert("wygrales!")
         }
      }
   }
   movesCount++
}

function rightclick(x, y) {
   if (movesCount > 0) {
      // >ZNAJDOWANIE INDEXU
      let n = width * y + x

      console.log(x + " " + y)
      console.log("N: " + n)

      let thisDiv = document.getElementById(x + "_" + y)

      if (tabFields[n].state2 != "flag") {
         thisDiv.style.backgroundColor = "pink"
         tabFields[n].state2 = "flag"
         console.table(tabFields)
         console.table(checkWin(tabFields, ileMin))

         // >DODANIE OBRAZKU FLAGI
         let img = document.createElement("img")
         img.setAttribute("src", "img/flaga.PNG")
         img.setAttribute("width", "50px")
         img.setAttribute("height", "50px")
         thisDiv.append(img)

         if (checkWin(tabFields, ileMin) == true) {
            alert("wygrales!")
         }
      } else {
         thisDiv.style.backgroundColor = "aqua"
         tabFields[n].state2 = "hidden"

         // >USUWANIE OBRAZKU FLAGI
         thisDiv.firstChild.remove()

         console.table(tabFields)
      }
   }
}

function containsObject(obj, list) {
   var i
   for (i = 0; i < list.length; i++) {
      if (list[i].x == obj.x && list[i].y == obj.y) {
         return true
      }
   }

   return false
}

function findState(list, i, width) {
   let surMines = 0

   if (i == 0) {
      if (list[i + 1].state1 == "bombed") {
         surMines++
      }
      if (list[i + width].state1 == "bombed") {
         surMines++
      }
      if (list[i + width + 1].state1 == "bombed") {
         surMines++
      }
   } else if (i == list.length - 1) {
      if (list[i - 1].state1 == "bombed") {
         surMines++
      }
      if (list[i - width].state1 == "bombed") {
         surMines++
      }
      if (list[i - width - 1].state1 == "bombed") {
         surMines++
      }
   } else if (i == width - 1) {
      if (list[i - 1].state1 == "bombed") {
         surMines++
      }
      if (list[i + width].state1 == "bombed") {
         surMines++
      }
      if (list[i + width - 1].state1 == "bombed") {
         surMines++
      }
   } else if (i == list.length - width) {
      if (list[i + 1].state1 == "bombed") {
         surMines++
      }
      if (list[i - width].state1 == "bombed") {
         surMines++
      }
      if (list[i - width + 1].state1 == "bombed") {
         surMines++
      }
   } else if (i > 0 && i < width - 1) {
      if (list[i + 1].state1 == "bombed") {
         surMines++
      }
      if (list[i - 1].state1 == "bombed") {
         surMines++
      }
      if (list[i + width].state1 == "bombed") {
         surMines++
      }
      if (list[i + width + 1].state1 == "bombed") {
         surMines++
      }
      if (list[i + width - 1].state1 == "bombed") {
         surMines++
      }
   } else if (i > list.length - width && i < list.length - 1) {
      if (list[i + 1].state1 == "bombed") {
         surMines++
      }
      if (list[i - 1].state1 == "bombed") {
         surMines++
      }
      if (list[i - width].state1 == "bombed") {
         surMines++
      }
      if (list[i - width + 1].state1 == "bombed") {
         surMines++
      }
      if (list[i - width - 1].state1 == "bombed") {
         surMines++
      }
   } else if (i % width == 0) {
      if (list[i + 1].state1 == "bombed") {
         surMines++
      }
      if (list[i + width].state1 == "bombed") {
         surMines++
      }
      if (list[i + width + 1].state1 == "bombed") {
         surMines++
      }
      if (list[i - width].state1 == "bombed") {
         surMines++
      }
      if (list[i - width + 1].state1 == "bombed") {
         surMines++
      }
   } else if (i % width == width - 1) {
      if (list[i - 1].state1 == "bombed") {
         surMines++
      }
      if (list[i + width].state1 == "bombed") {
         surMines++
      }
      if (list[i + width - 1].state1 == "bombed") {
         surMines++
      }
      if (list[i - width].state1 == "bombed") {
         surMines++
      }
      if (list[i - width - 1].state1 == "bombed") {
         surMines++
      }
   } else {
      if (list[i + 1].state1 == "bombed") {
         surMines++
      }
      if (list[i - 1].state1 == "bombed") {
         surMines++
      }
      if (list[i + width].state1 == "bombed") {
         surMines++
      }
      if (list[i + width + 1].state1 == "bombed") {
         surMines++
      }
      if (list[i + width - 1].state1 == "bombed") {
         surMines++
      }
      if (list[i - width].state1 == "bombed") {
         surMines++
      }
      if (list[i - width + 1].state1 == "bombed") {
         surMines++
      }
      if (list[i - width - 1].state1 == "bombed") {
         surMines++
      }
   }

   return surMines
}

function checkWin(tabFields, ileMin) {
   let hiddenFields = 0
   for (let i = 0; i < tabFields.length; i++) {
      if (tabFields[i].state1 == "bombed" && tabFields[i].state2 != "flag") {
         return false
      }
   }
   return true
}

function isCorrect() {
   if (isNaN(inputHeight.value)) {
      inputHeight.value = ""
   }
   if (isNaN(inputWidth.value)) {
      inputWidth.value = ""
   }
   if (isNaN(inputMines.value)) {
      inputMines.value = ""
   }
}
