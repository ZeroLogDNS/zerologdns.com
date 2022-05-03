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

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

window.addEventListener("load", function(){
    disableScroll()
    delay(2500).then(() => loader.style.display = "none");
    delay(2300).then(() => enableScroll());
})