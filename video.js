document.addEventListener("DOMContentLoaded", function () {
    const roleVideoWrappers = document.querySelectorAll(".role-video-wrapper");

    roleVideoWrappers.forEach(function (wrapper) {
        const video = wrapper.querySelector(".role-video");
        const button = wrapper.querySelector(".play-button");

        // Hvis der mangler noget, springer vi bare over
        if (!video || !button) {
            return;
        }

        // Skjul kontroller i starten
        video.controls = false;

        function startVideo() {
            video.controls = true;  // vis kontroller
            video.play();           // start video
            button.style.display = "none"; // gem den store play-knap
        }

        // Klik på både wrapper og knap gør det samme
        wrapper.addEventListener("click", startVideo);
        button.addEventListener("click", startVideo);
    });
});
