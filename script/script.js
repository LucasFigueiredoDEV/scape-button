function fuja(){
    var noButton = document.getElementById('run')

    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;


    //var maxX = widthWindow - noButton.offsetWidth;
    //var maxY = heightWindow - noButton.offsetHeight;

    var randomX = Math.floor(Math.random() * 60);
    var randomY = Math.floor(Math.random() * 80);

    noButton.style.left = randomX + '%';
    noButton.style.top = randomY + '%';
}