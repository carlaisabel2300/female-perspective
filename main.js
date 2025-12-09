document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".square-wrapper");

    cards.forEach(function (card) {
        const skoleNavn = card.getAttribute("data-skole");
        const liste = card.querySelector(".uddannelser-liste");

        // Hvis boksen ikke har data-skole ELLER ingen <ul>, så spring den over
        if (!skoleNavn || !liste) {
            return;
        }

        const url = "http://localhost:8080/api/skole/" + encodeURIComponent(skoleNavn);

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                data.forEach(function (item) {
                    const li = document.createElement("li");
                    li.textContent = item.uddannelsesnavn;
                    liste.appendChild(li);
                });
            })
            .catch(function (error) {
                console.error("Fejl ved hentning af:", skoleNavn, error);
            });
    });
});
