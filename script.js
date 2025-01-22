let container = document.querySelector('.container');
let btn = document.querySelector('.start_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time');

btn.onclick = function(){
    let score = 0;
    let time = 10;
    container.innerHTML = "";
    
    let interval = setInterval(function showTarget(){
// target creation
let target = document.createElement('img');
target.id="target";
target.src="lapoule1.png";
container.appendChild(target);
target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';



setTimeout(function(){
    target.remove();
}, 2000)

target.onclick = function(){
    score += 1 ;
    target.style.display = 'none';

}

time-= 1;

scoreContainer.innerHTML = `score : ${score}`
timeContainer.innerHTML = `time : ${time}`

if(time == 0){
    clearInterval(interval);
    container.innerHTML = "END OF THE GAME"
}

}, 1000);
}