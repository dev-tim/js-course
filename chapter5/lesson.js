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
        
    });

    
    function initLabelsWithDomElement(){
        var coordinates = document.querySelector('#coordinates');
        var xCoordinateLabel = document.createElement('span');
        xCoordinateLabel.innerText = 'X coordinate';
        xCoordinateLabel.className = 'btn btn-primary'

        var yCoordinateLabel = document.createElement('span');
        yCoordinateLabel.innerText = 'Y coordinate';
        yCoordinateLabel.className = 'btn btn-primary'

        coordinates.appendChild(xCoordinateLabel);
        coordinates.appendChild(yCoordinateLabel);
    }

})();