const foo = 42;
(function() {
    var button = document.getElementById('btn');
    button.addEventListener('click', function(e){
        debugger;
        alert('Clicked!')
    });

})();