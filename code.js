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

function onKeyPress(event){
    if(event.key === "ArrowRight"){}
    if(event.key === "ArrowLeft"){}

}
// attribute selectors
let usernameField = document.querySelector("[name='username']")
let form = document.querySelector("#login-form")
let emailInputElement = document.querySelector("[name='email']")


function onSumbit(event){
    event.preventDefault()
    
    let username = usernameField.value
    let birthday = form[2].value
    let email = emailInputElement.value

}

form.addEventListener("sumbit", onSumbit)