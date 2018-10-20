
$(document).ready(function(){
    
    $('form').submit(function(e){
        e.preventDefault();

        const email = $('#add-user-email-input').val()
        const name = $('#exampleInputPassword1').val()
        const userType = $('#user-type').val();

        $.ajax({
            method: "POST",
            url: "/users",
            contentType: "application/json; charset=utf-8",
        	dataType: "json",
            data: JSON.stringify({
                id: Date.now(),
                name: name,
                email: email,
                type: userType
            })
          }).done(function( msg ) {
              debugger;
            });
        return false;
    })
})