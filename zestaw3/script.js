let div1 = document.getElementById("div1")
div1.style.height = '100px'
div1.style.width = '300px'

// div1.style.backgroundColor = "green"

let faza = 1
setInterval(z1, 25)

function z1(){
    if(faza == 1){
        let height = parseInt(div1.style.height.replace('px', ''))
        let width = parseInt(div1.style.width.replace('px', ''))

        if(height > 100 || width > 300){
            div1.style.height = height - 3 + 'px'
            div1.style.width = width - 3 + 'px'
        }
        else{
            faza = 2
            console.log("FAZA 2")
        }
    }

    if(faza == 2){
        let height = parseInt(div1.style.height.replace('px', ''))
        let width = parseInt(div1.style.width.replace('px', ''))

        if(height < 300 ||  width > 900){
            div1.style.height = height + 3 + 'px'
            div1.style.width = width + 3 + 'px'
        }
        else{
            faza = 1
            console.log("FAZA 1")
        }
    }
}