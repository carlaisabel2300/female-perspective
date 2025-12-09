// charts.js

// Data for uddannelserne
const uddannelser = {
    itArkitektur: {
        name: "IT-Arkitektur - EK",
        gender: { Mænd: 72, Kvinder: 28 },
        adgang: [
            { year: 2025, kvotient: 4.8 },
        ],
        applicants: { ansøgere: 100, optagne: 93 },
    },
    datamatiker: {
        name: "Datamatiker - Zealand",
        gender: { Mænd: 82, Kvinder: 18 },
        adgang: [
            { year: 2025, kvotient: 0 },
        ],
        applicants: { ansøgere: 100, optagne: 100 },
    },
    cybersikkerhed: {
        name: "Cybersikkerhed - Erhvervsakademi Aarhus",
        gender: { Mænd: 87.5, Kvinder: 12.5 },
        adgang: [
            { year: 2025, kvotient: 6.5 },
        ],
        applicants: { ansøgere: 100, optagne: 57 },
    },
    softwareudvikling: {
        name: "Softwareudvikling - Aalborg Universitet",
        gender: { Mænd: 73, Kvinder: 27 },
        adgang: [
            { year: 2025, kvotient: 0 },
        ],
        applicants: { ansøgere: 100, optagne: 100 },
    },
    mechatronics: {
        name: "Bachelor of Engineering in Mechatronics - SDU",
        gender: { Mænd: 79, Kvinder: 21 },
        adgang: [
            { year: 2025, kvotient: 7.9 },
        ],
        applicants: { ansøgere: 100, optagne: 72 },
    },
};

// Variabler til Chart.js
let genderChart, applicantsChart;

// Funktion til at vise charts
function showCharts(key) {
    const data = uddannelser[key];

    // vis chart-sektionen
    document.getElementById("charts").style.display = "block";
    document.getElementById("chart-title").textContent = data.name;

    // Kønsfordeling
    if (genderChart) genderChart.destroy();
    genderChart = new Chart(document.getElementById("genderChart"), {
        type: "pie",
        data: {
            labels: Object.keys(data.gender),
            datasets: [{
                data: Object.values(data.gender),
                backgroundColor: ["lightgrey", "#EC4899"],
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });

    // Adgangskvotient som tal
    const kvotientEl = document.getElementById("admissionValue");
    kvotientEl.textContent = data.adgang[0].kvotient > 0 ? data.adgang[0].kvotient : "Alle optaget";

    // Ansøgere vs optagne som pie-chart
    if (applicantsChart) applicantsChart.destroy();
    const optagne = data.applicants.optagne;
    const resten = 100 - optagne;
    applicantsChart = new Chart(document.getElementById("applicantsChart"), {
        type: "pie",
        data: {
            labels: ["Optagne", "Resten"],
            datasets: [{
                data: [optagne, resten],
                backgroundColor: ["#EC4899", "lightgrey"],
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
}

// Bind klik til bobler, når DOM er loaded
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".circle-container div").forEach((el, i) => {
        const keys = Object.keys(uddannelser);
        el.addEventListener("click", () => showCharts(keys[i]));
    });
});
