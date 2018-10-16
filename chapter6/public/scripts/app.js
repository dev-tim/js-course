(function(){
    $(document).ready(function () {
        $.ajax({
           url: "test.html",
           context: document.body
        }).done(function (data) {
           debugger;
        });
    })
})()