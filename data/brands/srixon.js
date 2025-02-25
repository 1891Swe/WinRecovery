// Initialize golfData object if it doesn't exist
if (!window.golfData) {
    window.golfData = {};
}

// Srixon golf clubs data
window.golfData.srixon = [
    // Drivers
    {
        brand: "Cleveland Golf",
        model: "HiBore XL Driver",
        type: "Drivers",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/drivers/hibore-xl-driver/hibore-xl-driver/MHBXLDRV.html",
        description: "Large oversized head for greater forgiveness and higher launch angle",
        reviews: "4.5/5",
        price: "€299.99"
    },
    {
        brand: "Cleveland Golf",
        model: "HiBore XL Lite Driver",
        type: "Drivers",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/drivers/hibore-xl-lite-driver/hibore-xl-lite-driver/MHBXLLTDRV.html",
        description: "Lightweight design for increased swing speed with aerodynamic crown",
        reviews: "4/5",
        price: "€279.99"
    },
    {
        brand: "Cleveland Golf",
        model: "Women's HiBore XL Lite Driver",
        type: "Drivers",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/drivers/women%27s-drivers/women%27s-hibore-xl-lite-driver/MWHBXLLTDRV.html",
        description: "Lightweight design specifically for women golfers with higher loft options",
        reviews: "4.5/5",
        price: "€279.99"
    },
    {
        brand: "Cleveland Golf",
        model: "Launcher XL 2 Driver",
        type: "Drivers",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/drivers/launcher-xl-2-drivers/launcher-xl-2-drivers/MLXL2D.html",
        description: "Rebound Frame for enhanced ball speed with maximum forgiveness",
        reviews: "5/5",
        price: "€399.99"
    },
    {
        brand: "Cleveland Golf",
        model: "Launcher XL 2 Draw Driver",
        type: "Drivers",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/drivers/launcher-xl-2-draw-drivers/launcher-xl-2-draw-drivers/MLXL2DD.html",
        description: "Draw bias design to help reduce slice with maximum forgiveness",
        reviews: "4.5/5",
        price: "€399.99"
    },
    {
        brand: "Cleveland Golf",
        model: "Women's Launcher XL 2 Draw Driver",
        type: "Drivers",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/drivers/women%27s-drivers/women%27s-launcher-xl-2-draw-drivers/MWLXL2D.html",
        description: "Draw bias design specifically tuned for women golfers with higher loft options",
        reviews: "4.5/5",
        price: "€399.99"
    },
    
    // Wedges
    {
        brand: "Cleveland Golf",
        model: "RTX Full Face 2 Tour Satin Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/wedges/rtx-full-face-2/rtx-full-face-2-tour-satin-wedge/MRTXFF2-TS.html",
        description: "Full-face grooves for maximum spin on open-face shots",
        reviews: "5/5",
        price: "€159.99"
    },
    {
        brand: "Cleveland Golf",
        model: "RTX Full Face 2 Tour Rack (Raw) Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/wedges/rtx-full-face-2/rtx-full-face-2-tour-rack-%28raw%29-wedge/MRTXFF2-TR.html",
        description: "Raw face finish for maximum spin and rust patina over time",
        reviews: "5/5",
        price: "€169.99"
    },
    {
        brand: "Cleveland Golf",
        model: "Smart Sole Full Face Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/wedges/smart-sole-full-face/smart-sole-full-face-wedge/MSMARTSOLEFF.html",
        description: "Three-tiered sole design for enhanced forgiveness in the short game",
        reviews: "4.5/5",
        price: "€149.99"
    },
    {
        brand: "Cleveland Golf",
        model: "Women's Smart Sole Full Face Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/wedges/women%27s-wedges/women%27s-smart-sole-full-face-wedge/MWSMARTSOLEFF.html",
        description: "Three-tiered sole design optimized for women's swing speeds",
        reviews: "4.5/5",
        price: "€149.99"
    },
    {
        brand: "Cleveland Golf",
        model: "RTX 6 ZipCore Tour Satin Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/wedges/rtx-6-zipcore/rtx-6-zipcore-tour-satin-wedge/MRTX6ZCTS.html",
        description: "ZipCore technology for improved consistency with UltiZip grooves",
        reviews: "5/5",
        price: "€159.99"
    },
    {
        brand: "Cleveland Golf",
        model: "CBX Full Face 2 Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/wedges/cbx-full-face-2/cbx-full-face-2-wedge/MCBXFF2TS.html",
        description: "Cavity back design with full-face grooves for forgiveness and versatility",
        reviews: "4.5/5",
        price: "€149.99"
    },
    {
        brand: "Cleveland Golf",
        model: "Women's CBX 4 ZipCore Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/wedges/women%27s-wedges/women%27s-cbx-4-zipcore-wedge/MWCBX4ZC.html",
        description: "Cavity back design with ZipCore technology optimized for women golfers",
        reviews: "4.5/5",
        price: "€139.99"
    },
    {
        brand: "Cleveland Golf",
        model: "RTX 6 ZipCore Tour Rack (Raw) Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/wedges/rtx-6-zipcore/rtx-6-zipcore-tour-rack-%28raw%29-wedge/MRTX6ZCTR.html",
        description: "Raw finish with ZipCore technology for tour-level performance",
        reviews: "5/5",
        price: "€169.99"
    },
    {
        brand: "Cleveland Golf",
        model: "RTX 6 ZipCore Black Satin Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/wedges/rtx-6-zipcore/rtx-6-zipcore-black-satin-wedge/MRTX6ZCBKS.html",
        description: "Black Satin finish with ZipCore technology and UltiZip grooves",
        reviews: "4.5/5",
        price: "€169.99"
    },
    {
        brand: "Cleveland Golf",
        model: "RTZ Black Satin Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/wedges/rtz-wedge/rtz-black-satin-wedge/MRTZBKS.html",
        description: "Black Satin finish with progressive sole design for versatility",
        reviews: "4/5",
        price: "€129.99"
    },
    {
        brand: "Cleveland Golf",
        model: "CBX 4 ZipCore Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/wedges/cbx-4-zipcore/cbx-4-zipcore-wedge/MCBX4ZC.html",
        description: "Cavity back design with ZipCore technology and Gelback TPU insert",
        reviews: "4.5/5",
        price: "€139.99"
    },
    {
        brand: "Cleveland Golf",
        model: "RTZ Tour Rack (Raw) Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://eu.dunlopsports.com/cleveland-golf/clubs/wedges/rtz-wedge/rtz-tour-rack-%28raw%29-wedge/MRTZTR.html",
        description: "Raw finish with progressive sole design for tour-level performance",
        reviews: "4.5/5",
        price: "€139.99"
    }
];

// Add debug logging
console.log('Srixon/Cleveland Golf data loaded:', window.golfData.srixon);
