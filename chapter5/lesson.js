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
    });

    debugger;
    var coordinates = document.querySelector('#coordinates');
    var xCoordinateLabel = document.createElement('span');
    xCoordinateLabel.innerText = ' X coordinate';

    debugger;
    var yCoordinateLabel = document.createElement('span');
    yCoordinateLabel.innerText = ' Y coordinate';

    debugger;
    coordinates.appendChild(xCoordinateLabel);
    coordinates.appendChild(yCoordinateLabel);
})();