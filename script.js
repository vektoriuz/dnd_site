const tooltip = document.getElementById("tooltip");
const regions = document.querySelectorAll(".region");

regions.forEach(region => {

    region.addEventListener("mousemove", function(e) {

        const name = region.dataset.name;
        const difficulty = region.dataset.difficulty;

        tooltip.style.display = "block";

        if (difficulty) {
            tooltip.innerHTML = name + "<br><small>" + difficulty + "</small>";
        } else {
            tooltip.innerHTML = name;
        }

        tooltip.style.left = (e.pageX + 10) + "px";
        tooltip.style.top = (e.pageY + 10) + "px";

    });

    region.addEventListener("mouseleave", function() {
        tooltip.style.display = "none";
    });

});


document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {

        const target = button.dataset.tab;

        // Remove active from all buttons
        document.querySelectorAll('.tab-button')
            .forEach(btn => btn.classList.remove('active'));

        // Hide all content
        document.querySelectorAll('.tab-content')
            .forEach(content => content.classList.remove('active'));

        // Activate clicked button
        button.classList.add('active');

        // Show correct content
        document.getElementById(target).classList.add('active');
    });
});
