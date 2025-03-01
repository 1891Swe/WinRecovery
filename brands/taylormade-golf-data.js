// Initialize golfData object if it doesn't exist
if (!window.golfData) {
    window.golfData = {};
}

// taylormade golf clubs data with updated model names from CSV and corrected US URLs
window.golfData.taylormade = [
    {
        "brand": "TaylorMade",
        "model": "BRNR Driver",
        "type": "Drivers",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-Max-Driver/DW-TC375.html?lang=en_US",
        "description": "Drivers designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "BRNR Tour Rescue",
        "type": "Drivers",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-Driver/DW-TC370.html?lang=en_US",
        "description": "Drivers designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "BRNR LS Driver",
        "type": "Drivers",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-LS-Driver/DW-TC366.html?lang=en_US",
        "description": "Drivers designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "BRNR Mini Driver",
        "type": "Drivers",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-Max-Lite-Driver/DW-TC377.html?lang=en_US",
        "description": "Drivers designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Qi10 Driver",
        "type": "Drivers",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-Max-Designer-Series-Driver/DW-TC425-UK.html?lang=en_US",
        "description": "Drivers designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Qi10 LS Driver",
        "type": "Drivers",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-Designer-Series-Driver/DW-TC424-UK.html?lang=en_US",
        "description": "Drivers designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Qi10 Max Driver",
        "type": "Drivers",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-LS-Designer-Series-Driver/DW-TC372-UK.html?lang=en_US",
        "description": "Drivers designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Kalea Gold Driver",
        "type": "Drivers",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Kalea-Gold-Driver/DW-TC347.html?lang=en_US",
        "description": "Drivers designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Qi10 Max Fairway",
        "type": "Fairway Woods",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-Max-Fairway/DW-TC379.html?lang=en_US",
        "description": "Fairway Woods designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Qi10 Fairway",
        "type": "Fairway Woods",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-Fairway/DW-TC373.html?lang=en_US",
        "description": "Fairway Woods designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "BRNR Tour Fairway",
        "type": "Fairway Woods",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-Tour-Ti-Fairway/DW-TC368.html?lang=en_US",
        "description": "Fairway Woods designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Qi10 Max Lite Fairway",
        "type": "Fairway Woods",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-Max-Lite-Fairway/DW-TC380.html?lang=en_US",
        "description": "Fairway Woods designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Kalea Gold Fairway",
        "type": "Fairway Woods",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Kalea-Gold-Fairway/DW-TC348.html?lang=en_US",
        "description": "Fairway Woods designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Qi10 Max Rescue",
        "type": "Rescue",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-Max-Rescue/DW-TC382.html?lang=en_US",
        "description": "Other designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Qi10 Rescue",
        "type": "Rescue",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-Rescue/DW-TC374.html?lang=en_US",
        "description": "Other designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Qi10 Max Lite Rescue",
        "type": "Rescue",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi35-Max-Lite-Rescue/DW-TC383.html?lang=en_US",
        "description": "Other designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Kalea Gold Rescue",
        "type": "Rescue",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Kalea-Gold-Rescue/DW-TC349.html?lang=en_US",
        "description": "Other designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "P·790 Irons",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/P%E2%88%99790-Irons/DW-TC635.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Qi Gunmetal Edition Irons",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi-Gunmetal-Edition-Irons/DW-TC665.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "P·770 Irons",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/P%E2%88%99770-Irons/DW-TC567.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "P·7CB Irons",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/P%E2%88%997CB-Irons/DW-TC566.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "P790 Aged Copper",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/P790-Aged-Copper/DW-TC622-UK.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Qi Irons",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi-Irons/DW-TC557.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Qi HL Irons",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Qi-HL-Irons/DW-TC625.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Kalea Gold Irons",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Kalea-Gold-Irons/DW-TC585.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "P·7MC RAW",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/P%C2%B77MC-RAW/DW-TA156-UK.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "P7MC Irons",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/P7MC-Irons/DW-TA239.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "P7MB Irons",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/P7MB-IRONS/DW-TA238.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "P·UDI",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/P%E2%88%99UDI/DW-TC563.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "P·DHY",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/P%E2%88%99DHY/DW-TC564.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Stealth Black Irons",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Stealth-Black-Irons/DW-TC522.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "P·790 Black Irons",
        "type": "Irons",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/P%E2%88%99790-Irons/DW-TC649.html?lang=en_US",
        "description": "Irons designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "MyMG4 Wedge",
        "type": "Wedges",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/MyMG4-Wedge/DW-TC520.html?lang=en_US",
        "description": "Wedges designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "MyHi-Toe 4 Wedge",
        "type": "Wedges",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/MyHi-Toe-4-Wedge/DW-TC634.html?lang=en_US",
        "description": "Wedges designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Hi-Toe 4 Wedge",
        "type": "Wedges",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Hi-Toe-4-Wedge/DW-TC587.html?lang=en_US",
        "description": "Wedges designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Milled Grind 4 Wedge",
        "type": "Wedges",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Milled-Grind-4-Wedge/DW-TC518.html?lang=en_US",
        "description": "Wedges designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Milled Grind 4 Black Wedge",
        "type": "Wedges",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Milled-Grind-4-Black-Wedge/DW-TC517.html?lang=en_US",
        "description": "Wedges designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Milled Grind 4 Wedge Set",
        "type": "Wedges",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Milled-Grind-4-Wedge-Set/DW-TC648.html?lang=en_US",
        "description": "Wedges designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour S Long",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-S-Long/DW-TC966.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour X Proto L Neck",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-X-Proto-L-Neck/DW-TC912.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour X Proto Short Slant",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-X-Proto-Short-Slant/DW-TC981.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour DB (NO TRUE PATH)",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-DB-%28NO-TRUE-PATH%29/DW-TC855.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "MySpider Tour X L Neck",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/MySpider-Tour-X-L-Neck/DW-TC900-SS.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "MySpider Tour",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/MySpider-Tour/DW-TC906.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "MySpider Tour X",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/MySpider-Tour-X/DW-TC900.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour X",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-X/DW-TC846.html?lang=en_US&dwvar_DW-TC846_color=N75488",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour X L Neck",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-X-L-Neck/DW-TC928.html?lang=en_US&dwvar_DW-TC928_color=N75492",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour/DW-TC844.html?lang=en_US&dwvar_DW-TC844_color=N75503",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour Putter",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-Putter/DW-TC927.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour Z Counter Balance",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-Z-Counter-Balance/DW-TC917.html?lang=en_US&dwvar_DW-TC917_color=N75391",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour/DW-TC844.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour Double Bend",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-Double-Bend/DW-TC845.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour X",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-X/DW-TC846.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour X Double Bend",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-X-Double-Bend/DW-TC847.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour Z",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-Z/DW-TC848.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour Z Double Bend",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-Z-Double-Bend/DW-TC849.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour V",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-V/DW-TC850.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "Spider Tour V Double Bend",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/Spider-Tour-V-Double-Bend/DW-TC851.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "TP Black Juno",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/TP-Black-Juno/DW-TC856.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "TP Black Soto",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/TP-Black-Soto/DW-TC858.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "TP Black Del Monte",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/TP-Black-Del-Monte/DW-TC859.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    },
    {
        "brand": "TaylorMade",
        "model": "TP Black Balboa",
        "type": "Putters",
        "year": "2025",
        "url": "https://www.taylormadegolf.com/TP-Black-Balboa/DW-TC896.html?lang=en_US",
        "description": "Putters designed for performance and accuracy"
    }
];

// Add debug logging
console.log('taylormade Golf data loaded with updated model names:', window.golfData.taylormade);
