var loader = document.getElementById("preloader");

function disableScroll() {
    scrollTop = 
      window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = 
      window.pageXOffset || document.documentElement.scrollLeft,

        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}

window.addEventListener("load", function(){
    disableScroll();
    loader.style.display = "none";
    enableScroll();
})
