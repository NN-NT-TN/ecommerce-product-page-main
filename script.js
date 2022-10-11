function ControlForm() {
    let element =document.getElementById("cart-popup");
    if(element.style.display === "none")
    {
        document.getElementById("cart-popup").style.display = "block";
    }
    else
    {
       element.style.display = "none";
    }
}
function OpenNavMenu() {

    document.getElementById("menu-mobile").style.display = "block";
}
function CloseNavMenu() {  
        document.getElementById("menu-mobile").style.display = "none";
}
function CloseCarouselMenu() {  
    document.getElementById("carousel-mobile").style.display = "none";
}
function OpenCarouselMenu() {
    var x = window.matchMedia("(max-width: 480px)")
    if (!x.matches) {
        document.getElementById("carousel-mobile").style.display = "flex";
    }
   
}
