// server2.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db"); // <- din databaseforbindelse

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// Test-route
app.get("/", (req, res) => {
    res.json({message: "Backend kører på port 8080 ✔️"});
});

// Query route – JOIN skoler + uddannelser
app.get("/api/uddannelser", (req, res) => {
    const oversigt = `
        SELECT skole_id, skolenavn, id AS uddannelsesid,
               uddannelsesnavn, mand, kvinde, ialt
        FROM skoler
                 INNER JOIN uddannelser USING (skole_id);
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Fejl i SQL-forespørgsel:", err);
            return res.status(500).json({error: "Databasefejl"});
        }
        res.json(results);
    });
});

app.get("/api/skole/:navn", (req, res) => {
    const skoleNavn = req.params.navn;

    const sql = `
        SELECT uddannelsesnavn
        FROM skoler
        INNER JOIN uddannelser USING (skole_id)
        WHERE skolenavn LIKE ?;
    `;

    db.query(sql, [`%${skoleNavn}%`], (err, results) => {
        if (err) {
            console.error("Fejl i SQL-forespørgsel:", err);
            return res.status(500).json({ error: "Databasefejl" });
        }
        res.json(results);
    });
});
// Start serveren
app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
});



