


let currentVidId = JSON.parse(localStorage.getItem("vid"))
let vid_con = document.querySelector("#playframe")
vid_con.src = `https://www.youtube.com/embed/${currentVidId}`

// console.log(currentVidId)