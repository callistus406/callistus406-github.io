let burgerContainer = document.querySelector(".handbugerContainer");
let change = document.querySelector("#change");
let menu = document.querySelector(".menu");
let activate = document.querySelector(".activate");
let wrapper = document.querySelector(".wrapper");
let open = false;
change.addEventListener("click", function () {
    if (!open) {
        burgerContainer.classList.add("activate");

        (function () {
            setTimeout(() => {
                burgerContainer.style.animationName = "rotate"
                menu.classList.add("show");
                wrapper.classList.add("opacity");

            }, 300);
          
        })();

        burgerContainer.style.animationDuration = ".5s";

        open = true;
    } else {
        burgerContainer.style.animationName = "rotateReverse";
        burgerContainer.style.animationDuration = ".5s";
        (function () {
            setTimeout(function () {
                burgerContainer.classList.remove("activate");
                wrapper.classList.remove("opacity");

            }, 400)
        })();
        menu.classList.remove("show");
        open = false;
        // console.log("not open");
    }
})

