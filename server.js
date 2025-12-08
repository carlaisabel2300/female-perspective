const express = require("express");
const xlsx = require("xlsx");
const path = require("path");

const app = express();
const PORT = ;

// ---- LÆS EXCEL-FILEN ----
const workbook = xlsx.readFile(
    path.join(__dirname, "data_excel", "data.xlsx")
);

// Brug fanen "Data" i bunden af Excel
const sheet = workbook.Sheets["Data"];

// Lav arket om til JS-objekter
const rows = xlsx.utils.sheet_to_json(sheet, { defval: null });

// Find navnet på første kolonne dynamisk
const firstRow = rows[0] || {};
const kolonneNavn = Object.keys(firstRow)[0]; // første kolonne

// ---- LAV STRUKTUR: SKOLE -> UDDANNELSER ----
const skoler = [];
let currentSkole = null;

for (const row of rows) {
    const navn = row[kolonneNavn]; // brug første kolonne uanset navn
    if (!navn) continue;

    // Skole = ingen komma i navnet, uddannelse = har komma
    const erSkole = !String(navn).includes(",");

    if (erSkole) {
        // Ny skole
        currentSkole = {
            skole: navn,
            uddannelser: [],
        };
        skoler.push(currentSkole);
    } else if (currentSkole) {
        // Uddannelse under nuværende skole
        // Vi pusher HELE rækken, så alle kolonner (Mand, Kvinde, I alt, % mand, % kvinde)
        // kommer automatisk med.
        currentSkole.uddannelser.push(row);
    }
}

// ---- ENDPOINTS ----

// Rå data – alle rækker som i Excel
app.get("/api/ra", (req, res) => {
    res.json(rows);
});

// Grupperet: skoler med deres uddannelser
app.get("/api/uddannelser", (req, res) => {
    res.json(skoler);
});


// ---- START SERVER ----
app.listen(PORT, () => {
    console.log(`Server kører på http://localhost:${PORT}`);
});
