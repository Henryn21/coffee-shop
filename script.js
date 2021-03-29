//function:if menu open{set display to none} else set to block
$(document).ready(function(){
    $("#dropDownButton").click(function(){
        openMenu()
    });
    $(".fa-times").click(function(){
        closeMenu()
    });
    $("#body").resize(function(){
        if(this.style.width){

        }
    });
});
function openMenu(){
    $("#dropDown").css("right", "0");
}
function closeMenu(){
    $("#dropDown").css("right", "-240px");
}
//when scrolled past black bar, resize logo
window.onscroll= function(){
    if(window.innerWidth<1000){
        scrollSmall();
    }
    else{
        scrollBig();
    }
};
//resize logo to 200/170
function scrollSmall(){
        console.log(window.innerWidth);
        if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
            document.querySelector("#home").style.width="170px";
            document.querySelector("#home").style.paddingTop= "8px";
        }
        else{
            document.querySelector("#home").style.width="200px";
            document.querySelector("#home").style.paddingTop= "4px";
        }
}
//boolean to keep track of scroll position
let isBelow;
//resize logo to 300/200
function scrollBig(){
    console.log(window.innerWidth);
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        document.querySelector("#home").style.width="200px";
        document.querySelector("#home").style.paddingTop= "4px";
        isBelow=true;
    }
    else{
        document.querySelector("#home").style.width="300px";
        document.querySelector("#home").style.paddingTop= "2px";
        isBelow=false;
    }

}
//media query
const mediaQuery= window.matchMedia('(min-width: 1000px)');
//logo element
const logo=document.querySelector("#home");
mediaQuery.addListener(resizeLogo);//attach listner to call function
//if query is true resize large, else shrink
function resizeLogo(mq){//BUG, grows logo even without being at top!! still broken, re write with actual scroll check, maybe bool for isBelow
    //if window bigger than 1000{if at top{resize to 300} else resize to 200}
    if(mq.matches){//if wider than 1000
        if(isBelow){
            logo.style.width="200px";
        }
        else{
            logo.style.width="300px";
        }
    }
    else{//if window less than 1000{if at top{resize to 200} else resize to 170}
        if(isBelow){
            logo.style.width="170px";
        }
        else{
            logo.style.width="200px";
        }
    }
}
//initial call
resizeLogo(mediaQuery);