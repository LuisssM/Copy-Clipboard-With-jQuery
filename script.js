$(document).ready(function() {
    //adding span
    function add(){
        $(".copied").addClass("bounce-effect")
    }
//removing span
    function remove(){
        $(".copied").removeClass("bounce-effect")
    }
    //call func and copy the text

    $(".copy-btn").click(function(){
        $("#textField").select(); //selects all text
        document.execCommand("copy") //command that copies the text
        add(); //span appears
        setTimeout(remove, 800); // span goes away after 800ms
    })
});
