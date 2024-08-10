const online_element = document.getElementById("online");
const fontList = ["Antonio, sans-serif", "Creepster, system-ui", "Barrio, system-ui", "Gruppo, sans-serif", "Libre Barcode 39 Extended Text, system-ui", "Ewert, serif", "Marhey, sans-serif", "Rubik Glitch, system-ui", "Dr Sugiyama, cursive", "Moirai One, system-ui", "Mountains of Christmas, serif", "Rubik Lines, system-ui", "Satisfy, cursive", "Silkscreen, sans-serif", "Sigmar One, sans-serif", "Special Elite, system-ui", "Foldit, sans-serif", "Zeyada, cursive", "Moo Lah Lah, sans-serif", "UnifrakturMaguntia, cursive", "Fontdiner Swanky, serif", "Mynerve, cursive", "Codystar, sans-serif", "Rubik Burned, system-ui", "Mrs Saint Delafield, cursive", "Bungee Spice, sans-serif", "Yeomonstrum, sans-serif", "Abstract, sans-serif", "Badabum, sans-serif", "Becross, sans-serif", "BigPopcorn, sans-serif", "BurnedLetters, sans-serif", "ClownNormal, sans-serif", "CrazyDaisy, sans-serif", "Dominatrix, sans-serif", "Gosford, sans-serif", "Gridlockd, sans-serif", "HappyFestive, sans-serif", "HeadlinerNo45, sans-serif", "HeosDemo, sans-serif", "Hotsnow, sans-serif", "KidnappedAtOldTimes, sans-serif", "LightNo1Regular, sans-serif", "Milkyway, sans-serif", "Plexifont, sans-serif", "Retaliation, sans-serif", "Scrapitup, sans-serif"];
const subTitleElement = document.getElementById('sub-title');
const subTitleText = "⭒ welcome to alison's personal website ⭒"
let counter = 0;
let prevFontIndex;
let fontIndex;


function rotateFonts(){
    while (prevFontIndex === fontIndex) {
        fontIndex= Math.floor(Math.random() * (fontList.length));
    }
    const nextFont = fontList[fontIndex];
    online_element.style.fontFamily = `${nextFont}`;
    prevFontIndex = fontIndex;
}

function rotatingHeader(){
    rotationInterval = setInterval(rotateFonts, 1500);
    online_element.addEventListener('mouseover', () => {
        clearInterval(rotationInterval);
    });
    
    online_element.addEventListener('mouseout', () => {
        rotationInterval = setInterval(rotateFonts, 1500);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    rotatingHeader();
    subTitleAninmation();
});


function subTitleAninmation(){
    const textAnimate = setInterval(() => {addText();},300);
}

function addText(){
    if (counter <= subTitleText.length) {
        subTitleElement.innerHTML = "( " + subTitleText.substring(0,counter) + " )";
        counter++;
        return
    } else {
        counter = 0;
        subTitleElement.innerHTML = "( )";
    }
}