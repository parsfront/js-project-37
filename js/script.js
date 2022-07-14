const slide = document.querySelector(".slider").children;
const indicator = document.querySelector(".slider-indicator").children;

for (i = 0; i < indicator.length; i++) {
    indicator[i].addEventListener("click", function () {
        for (j = 0; j < indicator.length; j++) {
            indicator[j].classList.remove("active");
        }
        this.classList.add("active");

        const id = this.getAttribute("data-id");
        for (z = 0; z < slide.length; z++) {
            slide[z].classList.remove("active");
        }

        slide[id].classList.add("active");
    });
}
