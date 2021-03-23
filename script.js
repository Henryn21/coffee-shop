// let dropDown=document.querySelector("#dropDown");
$(document).ready(function(){
    $("#dropDownButton").click(function(){
        openMenu()
    });
    $(".fa-times").click(function(){
        closeMenu()
    });
});
function openMenu(){
    $("#dropDown").css("display", "block");
}
function closeMenu(){
    $("#dropDown").css("display", "none");
}

//function:if menu open{set display to none} else set to block