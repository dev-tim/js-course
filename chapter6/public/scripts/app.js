/* Nano Templates - https://github.com/trix/nano */

function nano(template, data) {
    return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
      var keys = key.split("."), v = data[keys.shift()];
      for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
      return (typeof v !== "undefined" && v !== null) ? v : "";});
}

const TEMPLATE = "<div class=\"row list-item\">\n" +
"                <div class=\"col-4\">\n" +
"                    {name}\n" +
"                </div>\n" +
"                 <div class=\"col-4\">\n" +
"                    {email}\n" +
"                </div>\n" +
"                <div class=\"col-2\">\n" +
"                    {type}\n" +
"                </div>\n" +
"\n" +
"                <div class=\"col-2\">\n" +
"                    <button class=\"btn btn-success\">Edit</button>\n" +
"                </div>\n" +
"            </div>";

$(document).ready(function(){
    $.ajax({
        url: "/users",
    }).done(function(data) {
        $('#loading-element').hide();
        debugger;
        
        let result = "";
        data.map(function(user){
            const renderedString = nano(TEMPLATE, user);
            result = result + renderedString;
        })

        const dynamicUserElement = $(result);
        $('#item-list').append(dynamicUserElement);        
    });

    $('#loading-element').show();
})
