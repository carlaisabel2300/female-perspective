document.addEventListener("DOMContentLoaded", function () {
    const roleVideoWrappers = document.querySelectorAll(".role-video-wrapper");

    roleVideoWrappers.forEach(function (wrapper) {
        const video = wrapper.querySelector(".role-video");
        const button = wrapper.querySelector(".play-button");

        if (!video || !button) {
            return;
        }

        // Sørg for, at video ikke har kontroller før vi klikker
        video.controls = false;

        function startVideo(event) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }

            // Tænd kontroller og start videoen
            video.controls = true;
            video.play();

            // Fjern vores store play-knap
            button.style.display = "none";

            // Vi behøver ikke flere klik-handlere efter start
            wrapper.removeEventListener("click", startVideo);
            button.removeEventListener("click", startVideo);
        }

        // Klik både på wrapper og på knappen starter video
        wrapper.addEventListener("click", startVideo);
        button.addEventListener("click", startVideo);
    });
});
