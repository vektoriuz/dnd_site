document.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement("button");
  button.innerText = "↑ Top";

  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.padding = "10px 15px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";
  button.style.display = "none";
  button.style.zIndex = "1000";

  button.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  document.body.appendChild(button);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
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
