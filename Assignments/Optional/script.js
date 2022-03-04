$(document).ready(function(){
    $(".col").click(function() {
        alert("Button clicked");
    });
    $(".col").hover(function(){

        $(".col").css({"background-color": "yellow"})
    })
})
