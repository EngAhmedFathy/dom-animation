// document.addEventListener("DOMContentLoaded" , function(){
//     document.querySelector("#red").onclick = function(){
//         document.querySelector("#hello").style.color = "red";
//     }
//     document.querySelector("#green").onclick = function(){
//         document.querySelector("#hello").style.color = "green";
//     }
//     document.querySelector("#blau").onclick = function(){
//         document.querySelector("#hello").style.color = "blau";
//     }
   
// })

document.addEventListener("DOMContentLoaded" , function(){
    document.querySelectorAll("button").forEach(function(button){
        button.onclick = function(){
            document.querySelector("#hello").style.color = button.dataset.color;
        }
    })
})



// ---------------------------------------------------------



// const button = document.querySelector("button")
// const body = document.querySelector ("body")
// const colors = ["brown" , "red" , "blau" , "green"]

// body.style.backgroundColor ="yellow"

// button.addEventListener("click" , changeBackgraund )
// function changeBackgraund(){
//     const colorindex = parseInt(math.random()*colors.length)
//     body.style.backgroundColor = colors[colorindex]

// }
// ----------------------------------------------------------
