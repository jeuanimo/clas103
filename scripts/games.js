let positionLeft = 350;
let character = document.getElementById("character");

function moveLeft() {
    position = positionLeft - 10;
    character.style.left = positionLeft + "px";
    console.log(position);
}


//