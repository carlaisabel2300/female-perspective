const educationLocations = [
    // --- CBS ---
    {
        school: "CBS - Copenhagen Business School - Handelshøjskolen",
        city: "Frederiksberg",
        lat: 55.681696923047205,
        lng: 12.529639497135072
    },

    // --- DTU ---
    {
        school: "DTU - Danmarks Tekniske Universitet",
        city: "Lyngby",
        lat: 55.78616579347597,
        lng: 12.523348339841318
    },

    // --- Erhvervsakademi Dania ---
    {
        school: "Erhvervsakademi Dania",
        city: "Randers",
        lat: 56.42932476743309,
        lng: 10.072086184060657
    },
    {
        school: "Erhvervsakademi Dania",
        city: "Grenaa",
        lat: 56.41054658696389,
        lng: 10.886084826387872
    },
    {
        school: "Erhvervsakademi Dania",
        city: "Silkeborg",
        lat: 56.18974664330213,
        lng: 9.552560712881403
    },
    {
        school: "Erhvervsakademi Dania",
        city: "Skive",
        lat: 56.5539727716594,
        lng: 9.022148353381962
    },
    {
        school: "Erhvervsakademi Dania",
        city: "Viborg",
        lat: 56.458984409951974,
        lng: 9.403034511047634
    },
    {
        school: "Erhvervsakademi Dania",
        city: "Aalborg",
        lat: 57.0180358039113,
        lng: 9.97395834754189
    },

    // --- Erhvervsakademi MidtVest ---
    {
        school: "Erhvervsakademi MidtVest",
        city: "Herning",
        lat: 56.14295550495878,
        lng: 8.979896284741027
    },

    // --- Aarhus Erhvervsakademi ---
    {
        school: "Erhvervsakademi Aarhus",
        city: "Aarhus C",
        lat: 56.120581967478934,
        lng: 10.157225753387333
    },
    {
        school: "Erhvervsakademi Aarhus",
        city: "Viby J",
        lat: 56.11905086336603,
        lng: 10.149157668853563
    },

    // --- Copenhagen Business Hub (Cbh) ---
    {
        school: "EK - Erhvervsakademi København",
        city: "Lyngby",
        lat: 55.77032657309078,
        lng: 12.514899195661192
    },
    {
        school: "EK - Erhvervsakademi København",
        city: "Bornholm",
        lat: 55.106924408038765,
        lng: 14.712584980276702
    },

    // --- IBA ---
    {
        school: "IBA - Erhvervsakademi Kolding",
        city: "Kolding",
        lat: 55.488222741320016,
        lng: 9.482304681472929
    },

    // --- ITU ---
    {
        school: "ITU - IT-Universitetet i København",
        city: "København S",
        lat: 55.659689443001255,
        lng: 12.590957997505056
    },

    // --- EK (Erhvervsakademi Copenhagen) ---
    {
        school: "EK - Erhvervsakademi København",
        city: "Nørrebro",
        lat: 55.691586565613036,
        lng: 12.554924610394476
    },
    {
        school: "EK - Erhvervsakademi København",
        city: "Nordvest",
        lat: 55.70647878279083,
        lng: 12.539072995657223
    },

    // --- Københavns Universitet ---
    {
        school: "KU - Københavns Universitet",
        city: "Østerbro",
        lat: 55.70226093893173,
        lng: 12.561792855100343
    },
    {
        school: "KU - Københavns Universitet",
        city: "Amager",
        lat: 55.66324768638058,
        lng: 12.588781082161965
    },

    // --- Professionshøjskolen UCN ---
    {
        school: "UCN - Professionshøjskolen University College Nordjylland",
        city: "Aalborg",
        lat: 57.01620229999196,
        lng: 9.993466084097674
    },

    // --- VIA University College ---
    {
        school: "VIA - Professionshøjskolen VIA University College",
        city: "Horsens",
        lat: 55.863872751684994,
        lng: 9.837567222878219
    },
    {
        school: "VIA - Professionshøjskolen VIA University College",
        city: "Viborg",
        lat: 56.45907728189973,
        lng: 9.403241715515584
    },

    // --- SDU ---
    {
        school: "SDU - Syddansk Universitet",
        city: "Sønderborg",
        lat: 54.913473901533834,
        lng: 9.779204970754785
    },
    {
        school: "SDU - Syddansk Universitet",
        city: "Odense M",
        lat: 55.36937379599715,
        lng: 10.42839503025809
    },
    {
        school: "SDU - Syddansk Universitet",
        city: "Kolding",
        lat: 55.48731738431188,
        lng: 9.482977100244918
    },

    // --- UCL ---
    {
        school: "UCL - Erhvervsakademi og Professionshøjskole",
        city: "Fredericia",
        lat: 55.57804017007545,
        lng: 9.766829343402126
    },
    {
        school: "UCL - Erhvervsakademi og Professionshøjskole",
        city: "Odense",
        lat: 55.40720474169332,
        lng: 10.379445346748525
    },
    {
        school: "UCL - Erhvervsakademi og Professionshøjskole",
        city: "Vejle",
        lat: 55.70719945147074,
        lng: 9.52291731386794
    },

    // --- Zealand ---
    {
        school: "Zealand Sjællands Erhvervsakademi",
        city: "Næstved",
        lat: 55.228472777321066,
        lng: 11.756570916895132
    },
    {
        school: "Zealand Sjællands Erhvervsakademi",
        city: "Roskilde",
        lat: 55.642204571197254,
        lng: 12.075565888970091
    },
    {
        school: "Zealand Sjællands Erhvervsakademi",
        city: "Køge",
        lat: 55.51021733202933,
        lng: 12.147431897174986
    },
    {
        school: "Zealand Sjællands Erhvervsakademi",
        city: "Nykøbing F",
        lat: 54.76542933272632,
        lng: 11.879811951130913
    },
    {
        school: "Zealand Sjællands Erhvervsakademi",
        city: "Slagelse",
        lat: 55.40390729626897,
        lng: 11.336279775182978
    },

    // --- Aalborg Universitet ---
    {
        school: "Aalborg Universitet",
        city: "København",
        lat: 55.65604278129239,
        lng: 12.541180416608112
    },
    {
        school: "Aalborg Universitet",
        city: "Aalborg",
        lat: 57.02079293966852,
        lng: 9.98543491400179
    },

    // --- Aarhus Universitet ---
    {
        school: "Aarhus Universitet",
        city: "Aarhus",
        lat: 56.22503257795542,
        lng: 10.221855833717155
    }
];
