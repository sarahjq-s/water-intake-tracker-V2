let goal = document.getElementById('goal-message')
let isEight = false

let countEl = document.getElementById("count-el")
let count = 0

function minus(){
    if (count > 0){
     count -= 1;
     countEl.textContent = count;
 }
}
 
function plus(){
    let waterCount = count;
    count += 1;
    countEl.textContent = count;
}

/**HYDRATED**/
let hydrate = document.querySelectorAll("h3.letter")

let clearColor = "rgba(255,255,255,0.5)"
let blueColor = "#219ebc"

function applyBlue(element, blueColor){
    element.style.backgroundColor = blueColor;   
}

function applyClear(element, clearColor){
    element.style.backgroundColor = clearColor;
}  

/**COLOR FILLED AS YOU LOG INTAKE */
function save(){
    for(let i = 0; i < hydrate.length; i++)
    if(count === 0){
        applyClear(hydrate[i], clearColor); 
        goal.textContent = "Goal: 8 glasses a day";
    }else if(count === 1){
        applyClear(hydrate[i], clearColor); applyBlue(hydrate[0], blueColor); 
        goal.textContent = "Goal: 8 glasses a day";
    }else if(count === 2){
        applyClear(hydrate[i], clearColor); applyBlue(hydrate[0], blueColor); 
        applyBlue(hydrate[1], blueColor); 
        goal.textContent = "Goal: 8 glasses a day";
    }else if(count === 3){
        applyClear(hydrate[i], clearColor); applyBlue(hydrate[0], blueColor); 
        applyBlue(hydrate[1], blueColor); applyBlue(hydrate[2], blueColor); 
        goal.textContent = "Goal: 8 glasses a day";
    }else if(count === 4){
        applyClear(hydrate[i], clearColor); applyBlue(hydrate[0], blueColor);
        applyBlue(hydrate[1], blueColor); applyBlue(hydrate[2], blueColor);
        applyBlue(hydrate[3], blueColor); 
        goal.textContent = "You got this!";
    }else if(count === 5){
        applyClear(hydrate[i], clearColor); applyBlue(hydrate[0], blueColor);
        applyBlue(hydrate[1], blueColor); applyBlue(hydrate[2], blueColor);
        applyBlue(hydrate[3], blueColor); applyBlue(hydrate[4], blueColor); 
        goal.textContent = "You got this!";
    }else if(count === 6){
        applyClear(hydrate[i], clearColor); applyBlue(hydrate[0], blueColor); 
        applyBlue(hydrate[1], blueColor); applyBlue(hydrate[2], blueColor);
        applyBlue(hydrate[3], blueColor); applyBlue(hydrate[4], blueColor);
        applyBlue(hydrate[5], blueColor); 
        goal.textContent = "Keep going, almost there!";
    }else if(count === 7){
        applyClear(hydrate[i], clearColor); applyBlue(hydrate[0], blueColor);
        applyBlue(hydrate[1], blueColor); applyBlue(hydrate[2], blueColor); 
        applyBlue(hydrate[3], blueColor); applyBlue(hydrate[4], blueColor); 
        applyBlue(hydrate[5], blueColor); applyBlue(hydrate[6], blueColor);
        goal.textContent = "Keep going, almost there!";
    }else if(count >= 8){
        applyBlue(hydrate [i], blueColor);
        isEight = true;
        goal.textContent = "Great job! You achieved your goal!"
        }      
    }

function reset(){
    for(let i = 0; i < hydrate.length; i++)
    applyClear(hydrate[i], clearColor);
    countEl.textContent = 0; count = 0;
    goal.textContent = "Goal: 8 glasses a day";
} 