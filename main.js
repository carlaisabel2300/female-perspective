async function hentUddannelser() {
    const skoleNavn = "Copenhagen Business School";
    const response = await fetch(
        "http://localhost:8080/api/skole/" + encodeURIComponent(skoleNavn)
    );
    const data = await response.json();

    const liste = document.querySelector(".uddannelser-liste");

    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.uddannelsesnavn;
        liste.appendChild(li);
    });
}

hentUddannelser();
