document.addEventListener('DOMContentLoaded',function(){
    let range = document.getElementById('range');
    let container = document.getElementById('container');
    range.addEventListener("input",changeBrightness);
    function changeBrightness(e){
        container.style.filter = "brightness(" + e.target.value + "%)";
    }
});