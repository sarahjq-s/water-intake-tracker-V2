let saveH = document.getElementById("save-h-el")
let saveY = document.getElementById("save-y-el")
let saveD = document.getElementById("save-d-el")
let saveR = document.getElementById("save-r-el")
let saveA = document.getElementById("save-a-el")
let saveT = document.getElementById("save-t-el")
let saveE = document.getElementById("save-e-el")
let saveD2 = document.getElementById("save-d2-el")

let goal = document.getElementById('goal-message')
let isEight = false

let countEl = document.getElementById("count-el")
let count = 0

function minus(){
    if (count > 0){
     count -= 1
     countEl.textContent = count
 }
}
 
function plus(){
    let waterCount = count 
    count += 1
    countEl.textContent = count
}

function save(){
    if(count === 0){
        saveH.style.backgroundColor = "rgba(255,255,255,0.5)";
        goal.textContent = "Goal: 8 glasses a day"
    }else if(count === 1){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveD.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveR.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveA.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveT.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveE.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveD2.style.backgroundColor = "rgba(255,255,255,0.5)";
        goal.textContent = "Goal: 8 glasses a day"
    }
    else if(count === 2){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
        saveD.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveR.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveA.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveT.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveE.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveD2.style.backgroundColor = "rgba(255,255,255,0.5)";
        goal.textContent = "Goal: 8 glasses a day"
    }else if(count === 3){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
        saveD.style.backgroundColor = "#219ebc";
        saveR.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveA.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveT.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveE.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveD2.style.backgroundColor = "rgba(255,255,255,0.5)";
        goal.textContent = "Goal: 8 glasses a day"
    }else if(count ===4){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
        saveD.style.backgroundColor = "#219ebc";
        saveR.style.backgroundColor = "#219ebc";
        saveA.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveT.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveE.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveD2.style.backgroundColor = "rgba(255,255,255,0.5)";
        goal.textContent = "You got this!"
    }else if(count ===5){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
        saveD.style.backgroundColor = "#219ebc";
        saveR.style.backgroundColor = "#219ebc";
        saveA.style.backgroundColor = "#219ebc";
        saveT.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveE.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveD2.style.backgroundColor = "rgba(255,255,255,0.5)";
        goal.textContent = "You got this!"
    }else if(count === 6){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
        saveD.style.backgroundColor = "#219ebc";
        saveR.style.backgroundColor = "#219ebc";
        saveA.style.backgroundColor = "#219ebc";
        saveT.style.backgroundColor = "#219ebc";
        saveE.style.backgroundColor = "rgba(255,255,255,0.5)";
        saveD2.style.backgroundColor = "rgba(255,255,255,0.5)";
        goal.textContent = "Keep going, almost there!"
    }else if(count === 7){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
        saveD.style.backgroundColor = "#219ebc";
        saveR.style.backgroundColor = "#219ebc";
        saveA.style.backgroundColor = "#219ebc";
        saveT.style.backgroundColor = "#219ebc";
        saveE.style.backgroundColor = "#219ebc";
        saveD2.style.backgroundColor = "rgba(255,255,255,0.5)";
        goal.textContent = "Keep going, almost there!"
    }else if(count >= 8){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
        saveD.style.backgroundColor = "#219ebc";
        saveR.style.backgroundColor = "#219ebc";
        saveA.style.backgroundColor = "#219ebc";
        saveT.style.backgroundColor = "#219ebc";
        saveE.style.backgroundColor = "#219ebc";
        saveD2.style.backgroundColor = "#219ebc";
        goal.textContent = "Great job! You achieved your goal!"
    }
}


function reset(){
    saveH.style.backgroundColor = "rgba(255,255,255,0.5)";
    saveY.style.backgroundColor = "rgba(255,255,255,0.5)";
    saveD.style.backgroundColor = "rgba(255,255,255,0.5)";
    saveR.style.backgroundColor = "rgba(255,255,255,0.5)";
    saveA.style.backgroundColor = "rgba(255,255,255,0.5)";
    saveT.style.backgroundColor = "rgba(255,255,255,0.5)";
    saveE.style.backgroundColor = "rgba(255,255,255,0.5)";
    saveD2.style.backgroundColor = "rgba(255,255,255,0.5)";
    countEl.textContent = 0
    count = 0
    goal.textContent = "Goal: 8 glasses a day"

}

