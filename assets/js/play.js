


let currentVidId = JSON.parse(localStorage.getItem("vid"))
let  title = JSON.parse(localStorage.getItem("tittle"))
console.log(title)
let vid_con = document.querySelector("#playframe")
let head_title = document.querySelector("#tittle")
vid_con.src = `https://www.youtube.com/embed/${currentVidId}`
head_title.innerHTML = title


// console.log(currentVidId)