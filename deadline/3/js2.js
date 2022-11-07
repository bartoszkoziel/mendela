let text = "tak potrafię to zrobić"
let g = document.getElementById("input")
let c = 0

let t = setInterval(() => {
   g.value = text
   c++
   let result = text.slice(c, text.length)

   g.value = result
   if (c == text.result) {
      g.value = text
   }
   console.log(c)
}, 200)
