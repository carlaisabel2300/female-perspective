document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".square-wrapper");

    cards.forEach(function (card) {
        const skoleNavn = card.getAttribute("data-skole");
        const liste = card.querySelector(".uddannelser-liste");

        if (!skoleNavn || !liste) {
            return;
        }

        const url = "http://localhost:8080/api/skole/" + encodeURIComponent(skoleNavn);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {

                    let navn = item.uddannelsesnavn;

                    // FINDER DET SIDSTE KOMMA
                    const sidsteKomma = navn.lastIndexOf(",");

                    // Hvis der findes et komma, fjern alt efter det
                    if (sidsteKomma !== -1) {
                        navn = navn.substring(0, sidsteKomma);
                    }

                    const li = document.createElement("li");
                    li.textContent = navn.trim();
                    liste.appendChild(li);
                });
            })
            .catch(error => {
                console.error("Fejl ved hentning af:", skoleNavn, error);
            });
    });
});
