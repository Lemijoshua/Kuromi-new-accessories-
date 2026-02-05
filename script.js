// script.js

// Create audio object for YES button (LOOPING)
var yesMusic = new Audio('music.mp3');
yesMusic.loop = true;      // 🔁 loop enabled
yesMusic.volume = 0.6;

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Play music
        yesMusic.play();

        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart();
        });

    } else if (option === 'no') {
        // Change text on the "No" button
        document.getElementById('no-button').innerText = 'You sure?';

        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';

    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;

    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) callback();
    }, 2000);
}

// Display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';

    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';

    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';

    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

// Start with cat.gif
displayCat();
