const reset = document.querySelector("#reset");
const sound = document.querySelector("#volume");

let counter = 0;
let volume = true;

let minusButton = document.createElement("button");
minusButton.setAttribute("id", "minus");
minusButton.textContent = "-";
document.querySelector(".counterSection").appendChild(minusButton);

let counterNumber = document.createElement("div");
counterNumber.setAttribute("id", "counterNumber");
counterNumber.textContent = counter;
document.querySelector(".counterSection").appendChild(counterNumber);

let plusButton = document.createElement("button");
plusButton.setAttribute("id", "plus");
plusButton.textContent = "+";
document.querySelector(".counterSection").appendChild(plusButton);


function minusPlay() {
    let audio = document.querySelector("#minusAudio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
}

function plusPlay() {
    let audio = document.querySelector("#plusAudio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
}

function resetPlay() {
    let audio = document.querySelector("#resetAudio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0;
    }
}

function changeSound(){
    if(volume){
        sound.src = "assets/images/volume.png"
    } else {
        sound.src = "assets/images/mute.png"
    }
}

sound.addEventListener("click", () => {
    if (volume) {
        volume = false;
    } else {
        volume = true;
    }
    changeSound();
});

minus.addEventListener("click", () => {
    counter--;
    counterNumber.innerHTML = counter;
    if (volume) {
        minusPlay();
    }
});

plus.addEventListener("click", () => {
    counter++;
    counterNumber.innerHTML = counter;
    if (volume) {
        plusPlay();
    }
});

reset.addEventListener("click", () => {
    counter = 0;
    counterNumber.innerHTML = counter;
    if (volume) {
        resetPlay();
    }
});

