let saveH = document.getElementById("save-h-el")
let saveY = document.getElementById("save-y-el")
let saveD = document.getElementById("save-d-el")
let saveR = document.getElementById("save-r-el")
let saveA = document.getElementById("save-a-el")
let saveT = document.getElementById("save-t-el")
let saveE = document.getElementById("save-e-el")
let saveD2 = document.getElementById("save-d2-el")

let resetWeek = document.getElementsByClassName("save-el", [1])
let countEl = document.getElementById("count-el")
let count = 0

// function minus(){
//    if (count > 0){
//     count -= 1
//     countEl.textContent = count
// }
// }

function plus(){
    count += 1
    countEl.textContent = count

    let waterCount = count 
    // countEl.textContent = 0
    // count = 0
    // saveH.textContent += waterCount;
    // if(count === 1){
    //     saveH.style.backgroundColor = "#219ebc";
    // }
    // else if(count <= 2){
    //     saveH.style.backgroundColor = "#219ebc";
    //     saveY.style.backgroundColor = "#219ebc";
    // }else if(count <= 3){
    //     saveH.style.backgroundColor = "#219ebc";
    //     saveY.style.backgroundColor = "#219ebc";
    //     saveD.style.backgroundColor = "#219ebc";
    // }else if(count <=4){
    //     saveH.style.backgroundColor = "#219ebc";
    //     saveY.style.backgroundColor = "#219ebc";
    //     saveD.style.backgroundColor = "#219ebc";
    //     saveR.style.backgroundColor = "#219ebc";
    // }else if(count <=5){
    //     saveH.style.backgroundColor = "#219ebc";
    //     saveY.style.backgroundColor = "#219ebc";
    //     saveD.style.backgroundColor = "#219ebc";
    //     saveR.style.backgroundColor = "#219ebc";
    //     saveA.style.backgroundColor = "#219ebc";
    // }else if(count <= 6){
    //     saveH.style.backgroundColor = "#219ebc";
    //     saveY.style.backgroundColor = "#219ebc";
    //     saveD.style.backgroundColor = "#219ebc";
    //     saveR.style.backgroundColor = "#219ebc";
    //     saveA.style.backgroundColor = "#219ebc";
    //     saveT.style.backgroundColor = "#219ebc";
    // }else if(count <= 7){
    //     saveH.style.backgroundColor = "#219ebc";
    //     saveY.style.backgroundColor = "#219ebc";
    //     saveD.style.backgroundColor = "#219ebc";
    //     saveR.style.backgroundColor = "#219ebc";
    //     saveA.style.backgroundColor = "#219ebc";
    //     saveT.style.backgroundColor = "#219ebc";
    //     saveE.style.backgroundColor = "#219ebc";
    // }else if(count >= 8){
    //     saveH.style.backgroundColor = "#219ebc";
    //     saveY.style.backgroundColor = "#219ebc";
    //     saveD.style.backgroundColor = "#219ebc";
    //     saveR.style.backgroundColor = "#219ebc";
    //     saveA.style.backgroundColor = "#219ebc";
    //     saveT.style.backgroundColor = "#219ebc";
    //     saveE.style.backgroundColor = "#219ebc";
    //     saveD2.style.backgroundColor = "#219ebc";
    // }

}

function save(){
    let waterCount = count 
    // countEl.textContent = 0
    // count = 0
    // saveH.textContent += waterCount;
    if(count === 1){
        saveH.style.backgroundColor = "#219ebc";
    }
    else if(count <= 2){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
    }else if(count <= 3){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
        saveD.style.backgroundColor = "#219ebc";
    }else if(count <=4){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
        saveD.style.backgroundColor = "#219ebc";
        saveR.style.backgroundColor = "#219ebc";
    }else if(count <=5){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
        saveD.style.backgroundColor = "#219ebc";
        saveR.style.backgroundColor = "#219ebc";
        saveA.style.backgroundColor = "#219ebc";
    }else if(count <= 6){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
        saveD.style.backgroundColor = "#219ebc";
        saveR.style.backgroundColor = "#219ebc";
        saveA.style.backgroundColor = "#219ebc";
        saveT.style.backgroundColor = "#219ebc";
    }else if(count <= 7){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
        saveD.style.backgroundColor = "#219ebc";
        saveR.style.backgroundColor = "#219ebc";
        saveA.style.backgroundColor = "#219ebc";
        saveT.style.backgroundColor = "#219ebc";
        saveE.style.backgroundColor = "#219ebc";
    }else if(count >= 8){
        saveH.style.backgroundColor = "#219ebc";
        saveY.style.backgroundColor = "#219ebc";
        saveD.style.backgroundColor = "#219ebc";
        saveR.style.backgroundColor = "#219ebc";
        saveA.style.backgroundColor = "#219ebc";
        saveT.style.backgroundColor = "#219ebc";
        saveE.style.backgroundColor = "#219ebc";
        saveD2.style.backgroundColor = "#219ebc";
    }
}


function reset(){
    saveH.style.backgroundColor = "#fff";
    saveY.style.backgroundColor = "#fff";
    saveD.style.backgroundColor = "#fff";
    saveR.style.backgroundColor = "#fff";
    saveA.style.backgroundColor = "#fff";
    saveT.style.backgroundColor = "#fff";
    saveE.style.backgroundColor = "#fff";
    saveD2.style.backgroundColor = "#fff";
    countEl.textContent = 0
    count = 0
}



