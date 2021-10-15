let incrementButton = document.querySelector(".increment")
let decrementButton = document.querySelector(".decrement")
let countView = document.querySelector(".count")

function incrementNumber(){
    let count = parseInt(countView.textContent) 
    let newCount = count + 1
    
    countView.textContent = newCount

}

incrementButton.addEventListener("click",incrementNumber)

decrementButton.addEventListener("click", decrementNumber)

