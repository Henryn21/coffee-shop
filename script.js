//function:if menu open{set display to none} else set to block
$(document).ready(function(){
    $("#dropDownButton").click(function(){
        openMenu()
    });
    $(".fa-times").click(function(){
        closeMenu()
    });
});
function openMenu(){
    $("#dropDown").css("right", "0");
}
function closeMenu(){
    $("#dropDown").css("right", "-240px");
}
//when scrolled past black bar, resize logo
window.onscroll= function(){scroll()};
function scroll(){
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        document.querySelector("#home").style.width="170px";
        document.querySelector("#home").style.paddingTop= "8px";
    }
    else{
        document.querySelector("#home").style.width="200px";
        document.querySelector("#home").style.paddingTop= "4px";
    }
}
