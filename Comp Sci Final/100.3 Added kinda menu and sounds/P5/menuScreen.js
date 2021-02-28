let isMuted = false;
let isMutedButton;
let button1;
let button2;
let button3;
let muteButton;

function menuScreen() {
    startSound.loop();
    background(menuBackground);
    image(level1icon, 500, screenHeight/2, 150, 150);
    image(level2icon, screenWidth/2, screenHeight/2, 150, 150);
    image(level3icon, 900, screenHeight/2, 150, 150);

    muteButton = new button1(1270, 40, isMutedButton);
    muteButton.display();
    mueButton.mouseClicked(muter);
}

function muter() {
    if (isMuted){
        isMutedButton = image(unmuteImage, 1270, 40, 80, 80);
        masterVolume(1.0, [0.5], [0.1]);
    }
    else if (!isMuted) {
        isMutedButton = image(muteImage, 1270, 40, 80, 80);
        masterVolume(0.0, [0.5], [0.1]);
    }
}