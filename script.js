const container = document.querySelector('.container'); //for class
const text = document.querySelector('#text'); //for element

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;


breatheAnimation();
function breatheAnimation() {
    text.innerHTML = 'Breathe In...';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold...';
        //time out for holding breath
        setTimeout(() => {
            text.innerText = 'Breathe Out...';
            //change container name here
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime); //wait breatheTime, then run specified func
};

setInterval(breatheAnimation, totalTime);