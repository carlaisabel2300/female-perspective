// TIMELINE - læs mere / p afsnit//

    document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".close").forEach(function(btn) {
        btn.addEventListener("click", function() {
            const li = btn.closest("li");
            const p = li.querySelector(".bio");
            p.classList.toggle("hidden");
        });
    });
});

