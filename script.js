let audio = document.getElementById("audio"); // Take the audio element
let time = document.querySelector(".time"); // Take the audio track
let btnPlay = document.querySelector(".play"); // Take the play button
let btnPause = document.querySelector(".pause"); // Take the pause button
let btnPrev = document.querySelector(". prev"); // Take the switch button of the previous track
let btnNext = document.querySelector(".next"); // Take the button to switch the next track


let playlist = [
    'Baptist Catechism 1-5.mp3',
    'Baptist Catechism 6-10.mp3'
]

let treck; // Variable with track index
 
// Event before page loading
window. onload = function() {
    treck = 0; // Assign zero to the variable
}