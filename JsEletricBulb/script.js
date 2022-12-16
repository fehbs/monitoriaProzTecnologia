
function changeColor1() {
    const body = document.querySelector('#body');
    body.style.backgroundColor = 'black';
    const title = document.querySelector('#h1');
    title.style.color = 'rgba(187, 25, 25, 0.915)';
}

function changeColor2() {
    const body = document.querySelector('#body');
    body.style.backgroundColor = '#fff';
    const title = document.querySelector('#h1');
    title.style.color = 'rgba(17, 17, 17, 0.87)';
}

function changeColor3() {
    const body = document.querySelector('#body');
    body.style.backgroundColor = "rgba(8, 8, 7, 0.861)";
    const title = document.querySelector('#h1');
    title.style.color = 'rgba(231, 184, 67, 0.898)';
}

function onBtn() {
    const img = document.getElementById('off_Bulb');
    img.image = img.src = "./IMG/onBulb.jpg";
}

function offBtn() {
    const img = document.getElementById('off_Bulb');
    img.image = img.src = "./IMG/offBulb.png";
    img.style = 'border-radius: 50%';
}







