(function() {
    var clickedButton = document.getElementById('btn');
    clickedButton.addEventListener('click', function(e){
        console.log('clicked', e)
    });

    var mouseOverImage = document.querySelector('.unique-class');
    mouseOverImage.addEventListener('mouseover', function(e){
        // console.log(e);
    });

    window.addEventListener('mousemove', function(e){
        console.log([e.clientX, e.clientY]);
    })
})();