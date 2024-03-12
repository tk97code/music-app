jQuery( ($) => {
    const lines = document.querySelectorAll('.line1, .line2, .line3');
    const linesContainer = document.getElementsByClassName("lines");
    const faXmark = $('.fa-xmark');
    const faBars = $('.lines');
    const menu = $('.menu');
    var isClose = true;

    function changeClass() {
        for (let i = 0; i < 3; i++) {
            if (lines[i].classList.contains("noAnimation")) {
                lines[i].classList.add("close");
                lines[i].classList.remove("noAnimation");
            }
            else if (lines[i].classList.contains("close")) {
                lines[i].classList.add("rev");
                lines[i].classList.remove("close");
            }
            else if (lines[i].classList.contains("rev")) {
                lines[i].classList.add("close");
                lines[i].classList.remove("rev");
            };
        }
        if (isClose) {
            menu[0].classList.remove("close");
            isClose = false;
        } else {
            menu[0].classList.add("close");
            isClose = true;
        }
    }

    linesContainer[0].addEventListener("click", changeClass);
});