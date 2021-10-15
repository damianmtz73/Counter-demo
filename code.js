let incrementButton = document.querySelector(".increment")
let decrementButton = document.querySelector(".decrement")
let countView = document.querySelector(".count")

function incrementNumber(event){
    let currentCount = parseInt(countView.textContent) 
    let newCount = currentCount
    
    countView.textContent = newCount + 1 
}

function decrementNumber(event){
    let currentCount = parseInt(countView.textContent) 
    let newCount = currentCount
    
    countView.textContent = newCount - 1 
}
incrementButton.addEventListener("click",incrementNumber)

decrementButton.addEventListener("click", decrementNumber)

document.addEventListener("keydown", onKeyPress)

// function onKeyPress{

// }