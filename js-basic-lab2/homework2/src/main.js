const music1 = new Audio("./music/tom-1.mp3");
const music2 = new Audio("./music/tom-2.mp3");
const music3 = new Audio("./music/tom-3.mp3");
const music4 = new Audio("./music/tom-4.mp3");
const music5 = new Audio("./music/snare.mp3");
const music6 = new Audio("./music/crash.mp3");
const music7 = new Audio("./music/kick-bass.mp3");

const img1 = document.querySelectorAll(".img1");
const img2 = document.querySelectorAll(".img2");
const img3 = document.querySelectorAll(".img3");
const img4 = document.querySelectorAll(".img4");
const img5 = document.querySelectorAll(".img5");
const img6 = document.querySelectorAll(".img6");
const img7 = document.querySelectorAll(".img7");


img1.forEach(button => {
  button.addEventListener("click", () => {
    music1.play();
  });
});
img2.forEach(button => {
    button.addEventListener("click", () => {
      music2.play();
    });
});
img3.forEach(button => {
  button.addEventListener("click", () => {
    music3.play();
});
});
img4.forEach(button => {
    button.addEventListener("click", () => {
      music4.play();
    });
});
img5.forEach(button => {
    button.addEventListener("click", () => {
      music5.play();
    });
});
img6.forEach(button => {
    button.addEventListener("click", () => {
      music6.play();

    });
});
img7.forEach(button => {
    button.addEventListener("click", () => {
      music7.play();
    });
});


document.addEventListener('keydown', function(e) {
    switch(e.keyCode){
        case 87:
            music1.play();
            break;
        case 65:
            music2.play();
            break;
        case 83:
            music3.play();
            break;
        case 68:
            music4.play();
            break;
        case 74:
            music5.play();
            break;
        case 75:
            music6.play();
            break;
        case 76:
            music7.play();
            break;

        default:
    
    }

});



const WHITE_KEYS = ['1', '2', '3', '4', '5', '6', '7']
const BLACK_KEYS = ['z', 'x', 'c', 'v', 'b']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}