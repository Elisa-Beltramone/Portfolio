document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.getElementById("starsContainer");

    for (let i = 0; i < 100; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement("div");
        star.className = "star";

        const size = Math.random() * 2;
        const duration = Math.random() * 1.5 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDuration = duration + "s";

        starsContainer.appendChild(star);
    }
});

document.addEventListener("DOMContentLoaded", function() {

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
            let x = e.pageX;
            let y = e.pageY;

            cursor.style.top = y + "px";
            cursor.style.left = x + "px";
            cursor.style.display = "block";
} ); 

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
} );
} )

