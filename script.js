
let random1 = Math.floor((Math.random() * 6) + 1)
console.log(random1)

let random2 = Math.floor((Math.random() * 6) + 1)
console.log(random2)

let imgContainer = document.getElementsByTagName('img')
// console.log(imgContainer[0])

imgContainer[0].src = `images/dice${random1}.png`
imgContainer[1].src = `images/dice${random2}.png`

