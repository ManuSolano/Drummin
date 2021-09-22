function makeSound(key) {
    var audio;
    if (key == 'w') {
        audio = new Audio('./sounds/tom-1.mp3');
        
    }
    if (key == 'a') {
        audio = new Audio('./sounds/tom-2.mp3');
    }
    if (key == 's') {
        audio = new Audio('./sounds/tom-3.mp3');
    }
    if (key == 'd') {
        audio = new Audio('./sounds/tom-4.mp3');
    }
    if (key == 'j') {
        audio = new Audio('./sounds/snare.mp3');
    }
    if (key == 'k') {
        audio = new Audio('./sounds/crash.mp3');
    }
    if (key == 'l') {
        audio = new Audio('./sounds/kick-bass.mp3');
    }

    audio.play();
    console.log("you pressed " + key);
}
function buttonAninmation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100    );
}
var drums = document.querySelectorAll(".drum");
var drumsTotal = drums.length;
for (var i = 0; i < drumsTotal; i++) {
    drums[i].addEventListener("click", function () {
        var keyPressed = this.innerHTML;
        makeSound(keyPressed);
        buttonAninmation(keyPressed)
        
    });
}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAninmation(event.key);
})
