$(document).ready(function(){
    $(".col").click(function() {
        alert("Button clicked");
    });
    $(".col").hover(
        function(){
            $(".col").css({
                "background-color": "red",
                "box-shadow": "20px 20px 5px purple"
            });
        },
        function(){
            $(".col").css({
                "background-color": "blue",
                "box-shadow": "none"
            });
        }
    );
})
