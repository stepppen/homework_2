// ordered.html
const cardDiv = document.querySelector(".card-div");
const thankYou = document.querySelector(".Ty");
const subheader = document.querySelector(".subheader");
const paragraph = document.querySelector(".description-2");

// subheader.style.transition = "all 0.5s ease";
// subheader.style.transform = "translateY(7px)";

cardDiv.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
});

cardDiv.addEventListener("mouseenter", (e) => {
    subheader.style.transition = "all 0.5s ease";
    subheader.style.transform = "translateY(7px)";
    paragraph.style.transition = "all 0.5s ease";
    paragraph.style.transform = "translateY(10px)";
    thankYou.style.transition = "all 0.5s ease";
    thankYou.style.transform = "translateY(-7px)";
});

cardDiv.addEventListener("mouseleave", (e) => {
    subheader.style.transform = "translateZ(0px)";
    paragraph.style.transform = "translateZ(0px)";
    thankYou.style.transform = "translateZ(0px)";
});
