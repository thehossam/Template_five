let btnSign = document.querySelector("header button");
let loginForm = document.querySelector(".login");
let closeLoginForm = document.querySelector(".login b")

btnSign.addEventListener("click", ()=>{
    loginForm.style.cssText = "display: block; ";
})
closeLoginForm.addEventListener("click", ()=>{
    loginForm.style.cssText = "display:none";

})


// ========================================================================

let hour = document.getElementById("hour");
let mint = document.getElementById("mint");
let sec = document.getElementById("sec");

setInterval(()=>{
    let newDate = new Date()
    hour.innerHTML = newDate.getHours()
    mint.innerHTML = newDate.getMinutes()
    sec.innerHTML = newDate.getSeconds()
},1000)

// ========================================================================

let btnlinks = document.querySelector("header i");
let links = document.querySelector(".links")


btnlinks.addEventListener("click", ()=>{
    btnlinks.classList.toggle("active")
    if (btnlinks.classList.contains("active")) {
        links.style.cssText = "display: block";
    }else {
        links.style.cssText = "display: none";

    }
})

