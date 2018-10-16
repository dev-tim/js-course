

$(document).ready(function(){
    $.ajax({
        url: "/users",
    }).done(function(data) {
        $('#loading-element').hide();
        debugger;
    });

    $('#loading-element').show();
})
