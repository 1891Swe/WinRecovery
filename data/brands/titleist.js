// Initialize golfData object if it doesn't exist
if (!window.golfData) {
    window.golfData = {};
}

// Titleist golf clubs data
window.golfData.titleist = [
    // T-Series Irons
    {
        brand: "Titleist",
        model: "T100 Irons",
        type: "Irons",
        year: "2024",
        url: "https://www.titleist.com/product/t100/554C%3ARH%3A3-GW.html",
        description: "Tour-proven performance irons with precise control and versatility",
        reviews: "5/5",
        price: "$1,399.99"
    },
    {
        brand: "Titleist",
        model: "T100 Black Irons",
        type: "Irons",
        year: "2024",
        url: "https://www.titleist.com/product/t100-black/554BC%3ARH%3A3-GW.html",
        description: "Tour-proven performance with premium black finish for reduced glare",
        reviews: "5/5",
        price: "$1,499.99"
    },
    {
        brand: "Titleist",
        model: "T150 Irons",
        type: "Irons",
        year: "2024",
        url: "https://www.titleist.com/product/t150/555C%3ARH%3A3-GW.html",
        description: "Players distance irons with tour-inspired look and feel",
        reviews: "4.5/5",
        price: "$1,399.99"
    },
    {
        brand: "Titleist",
        model: "T150 Black Irons",
        type: "Irons",
        year: "2024",
        url: "https://www.titleist.com/product/t150-black/555BC%3ARH%3A3-GW.html",
        description: "Players distance irons with sleek black finish and enhanced performance",
        reviews: "4.5/5",
        price: "$1,499.99"
    },
    {
        brand: "Titleist",
        model: "T200 Irons",
        type: "Irons",
        year: "2024",
        url: "https://www.titleist.com/product/t200/556C%3ARH%3A4-W48.html",
        description: "Technology-packed mid-size irons with exceptional distance and forgiveness",
        reviews: "5/5",
        price: "$1,299.99"
    },
    {
        brand: "Titleist",
        model: "T200 Black Irons",
        type: "Irons",
        year: "2024",
        url: "https://www.titleist.com/product/t200-black/556BC%3ARH%3A4-W48.html",
        description: "Technology-packed mid-size irons with premium black finish",
        reviews: "5/5",
        price: "$1,399.99"
    },
    {
        brand: "Titleist",
        model: "T200 Utility Build",
        type: "Utility Irons",
        year: "2024",
        url: "https://www.titleist.com/product/t200-%28utility-build%29/556UC.html",
        description: "Specialized utility iron with enhanced forgiveness and distance",
        reviews: "4.5/5",
        price: "$249.99"
    },
    {
        brand: "Titleist",
        model: "T350 Irons",
        type: "Irons",
        year: "2024",
        url: "https://www.titleist.com/product/t350/557C%3ARH%3A4-W53.html",
        description: "Game improvement irons with maximum forgiveness and distance",
        reviews: "5/5",
        price: "$1,199.99"
    },
    {
        brand: "Titleist",
        model: "T350 Black Irons",
        type: "Irons",
        year: "2024",
        url: "https://www.titleist.com/product/t350-black/557BC%3ARH%3A4-W53.html",
        description: "Game improvement irons with black finish for reduced glare",
        reviews: "5/5",
        price: "$1,299.99"
    },
    {
        brand: "Titleist",
        model: "T400 Irons",
        type: "Irons",
        year: "2024",
        url: "https://www.titleist.com/product/t400/544C%3ARH%3A5-S55.html",
        description: "Super game improvement irons with maximum distance and launch",
        reviews: "4.5/5",
        price: "$1,199.99"
    },
    
    // 620 Series Irons
    {
        brand: "Titleist",
        model: "620 MB Irons",
        type: "Irons",
        year: "2023",
        url: "https://www.titleist.com/product/620-mb/541C%3ARH%3A3-PW.html",
        description: "Classic muscle back design for ultimate shot-making precision",
        reviews: "5/5",
        price: "$1,299.99"
    },
    {
        brand: "Titleist",
        model: "620 CB Irons",
        type: "Irons",
        year: "2023",
        url: "https://www.titleist.com/product/620-cb/540C%3ARH%3A3-PW.html",
        description: "Traditional cavity back design for enhanced forgiveness with control",
        reviews: "5/5",
        price: "$1,299.99"
    },
    
    // Vokey Wedges
    {
        brand: "Titleist",
        model: "Vokey SM10 Wedge (Tour Chrome)",
        type: "Wedges",
        year: "2024",
        url: "https://www.titleist.com/product/vokey-sm10/852C%3ACA-RH%3ACBW-4610.html",
        description: "Precision milled wedge with tour-proven performance and chrome finish",
        reviews: "5/5",
        price: "$179.99"
    },
    {
        brand: "Titleist",
        model: "Vokey SM10 Wedge (Brushed Steel)",
        type: "Wedges",
        year: "2024",
        url: "https://www.titleist.com/product/vokey-sm10/853C%3ACA-RH%3ACBW-4610.html",
        description: "Precision milled wedge with brushed steel finish for reduced glare",
        reviews: "5/5",
        price: "$179.99"
    },
    {
        brand: "Titleist",
        model: "Vokey SM10 Wedge (Jet Black)",
        type: "Wedges",
        year: "2024",
        url: "https://www.titleist.com/product/vokey-sm10/854C%3ACA-RH%3ACBW-4610.html",
        description: "Precision milled wedge with premium black finish for enhanced durability",
        reviews: "5/5",
        price: "$199.99"
    },
    {
        brand: "Titleist",
        model: "Vokey SM10 WedgeWorks Custom Wedge",
        type: "Wedges",
        year: "2024",
        url: "https://www.titleist.com/product/vokey-sm10/883EC%3ACA-RH%3ACBW-4610.html",
        description: "Fully customizable Vokey wedge with personalized options",
        reviews: "5/5",
        price: "$219.99"
    },
    
    // Studio Style Putters
    {
        brand: "Titleist",
        model: "Studio Style Catalina Putter",
        type: "Putters",
        year: "2024",
        url: "https://www.titleist.com/product/studio-style-catalina/753C%3ACP-H753.html",
        description: "High-performance mallet putter with Catalina design",
        reviews: "4.5/5",
        price: "$399.99"
    },
    {
        brand: "Titleist",
        model: "Studio Style Newport Putter",
        type: "Putters",
        year: "2024",
        url: "https://www.titleist.com/product/studio-style-newport/753C%3ACP-A753.html",
        description: "Classic blade putter with Newport head design",
        reviews: "5/5",
        price: "$399.99"
    },
    {
        brand: "Titleist",
        model: "Studio Style Newport Plus Putter",
        type: "Putters",
        year: "2024",
        url: "https://www.titleist.com/product/studio-style-newport-plus/753C%3ACP-B753.html",
        description: "Enhanced Newport design with improved stability",
        reviews: "5/5",
        price: "$399.99"
    },
    {
        brand: "Titleist",
        model: "Studio Style Newport 2 Putter",
        type: "Putters",
        year: "2024",
        url: "https://www.titleist.com/product/studio-style-newport-2/753C%3ACP-C753.html",
        description: "Tour-proven Newport 2 blade putter with precision milled face",
        reviews: "5/5",
        price: "$399.99"
    },
    {
        brand: "Titleist",
        model: "Studio Style Fastback Putter",
        type: "Putters",
        year: "2024",
        url: "https://www.titleist.com/product/studio-style-fastback/753C%3ACP-F753.html",
        description: "Mid-mallet putter with Fastback head design for enhanced stability",
        reviews: "4.5/5",
        price: "$399.99"
    },
    
    // Phantom Putters
    {
        brand: "Titleist",
        model: "Phantom 5 Putter",
        type: "Putters",
        year: "2024",
        url: "https://www.titleist.com/product/phantom-5/748C%3ACP-A748.html",
        description: "High MOI mallet putter with advanced stability and alignment",
        reviews: "5/5",
        price: "$449.99"
    },
    {
        brand: "Titleist",
        model: "Phantom 7 Putter",
        type: "Putters",
        year: "2024",
        url: "https://www.titleist.com/product/phantom-7/748C%3ACP-C748.html",
        description: "Winged mallet putter with exceptional forgiveness and roll",
        reviews: "5/5",
        price: "$449.99"
    },
    {
        brand: "Titleist",
        model: "Phantom 9 Putter",
        type: "Putters",
        year: "2024",
        url: "https://www.titleist.com/product/phantom-9/748C%3ACP-E748.html",
        description: "High-performance alignment mallet with optimized weight distribution",
        reviews: "4.5/5",
        price: "$449.99"
    },
    {
        brand: "Titleist",
        model: "Phantom 11 Putter",
        type: "Putters",
        year: "2024",
        url: "https://www.titleist.com/product/phantom-11/748C%3ACP-G748.html",
        description: "Maximum stability mallet putter with enhanced alignment features",
        reviews: "5/5",
        price: "$449.99"
    },
    
    // GT Series Hybrids
    {
        brand: "Titleist",
        model: "GT1 Hybrid",
        type: "Hybrids",
        year: "2024",
        url: "https://www.titleist.com/product/gt1-hybrid/674C.html",
        description: "Tour-inspired hybrid with workability and compact profile",
        reviews: "4.5/5",
        price: "$299.99"
    },
    {
        brand: "Titleist",
        model: "GT2 Hybrid",
        type: "Hybrids",
        year: "2024",
        url: "https://www.titleist.com/product/gt2-hybrid/675C.html",
        description: "Mid-sized hybrid with balanced forgiveness and control",
        reviews: "5/5",
        price: "$299.99"
    },
    {
        brand: "Titleist",
        model: "GT3 Hybrid",
        type: "Hybrids",
        year: "2024",
        url: "https://www.titleist.com/product/gt3-hybrid/676C.html",
        description: "Maximum forgiveness hybrid with high launch characteristics",
        reviews: "5/5",
        price: "$299.99"
    },
    
    // GT Series Fairway Woods
    {
        brand: "Titleist",
        model: "GT1 Fairway Wood",
        type: "Fairway Woods",
        year: "2024",
        url: "https://www.titleist.com/product/gt1-fairway/673C.html",
        description: "Tour-inspired fairway wood with workability and low spin",
        reviews: "4.5/5",
        price: "$349.99"
    },
    {
        brand: "Titleist",
        model: "GT2 Fairway Wood",
        type: "Fairway Woods",
        year: "2024",
        url: "https://www.titleist.com/product/gt2-fairway/670C.html",
        description: "Versatile fairway wood with balanced performance",
        reviews: "5/5",
        price: "$349.99"
    },
    {
        brand: "Titleist",
        model: "GT3 Fairway Wood",
        type: "Fairway Woods",
        year: "2024",
        url: "https://www.titleist.com/product/gt3-fairway/671C.html",
        description: "Maximum forgiveness fairway wood with high launch and forgiveness",
        reviews: "5/5",
        price: "$349.99"
    },
    
    // GT Series Drivers
    {
        brand: "Titleist",
        model: "GT1 Driver",
        type: "Drivers",
        year: "2024",
        url: "https://www.titleist.com/product/gt1-driver/672C.html",
        description: "Low spin driver with tour-inspired shape and workability",
        reviews: "4.5/5",
        price: "$599.99"
    },
    {
        brand: "Titleist",
        model: "GT2 Driver",
        type: "Drivers",
        year: "2024",
        url: "https://www.titleist.com/product/gt2-driver/667C.html",
        description: "Mid-spin driver with balanced performance for most players",
        reviews: "5/5",
        price: "$599.99"
    },
    {
        brand: "Titleist",
        model: "GT3 Driver",
        type: "Drivers",
        year: "2024",
        url: "https://www.titleist.com/product/gt3-driver/668C.html",
        description: "High MOI driver with maximum stability and forgiveness",
        reviews: "5/5",
        price: "$599.99"
    },
    {
        brand: "Titleist",
        model: "GT4 Driver",
        type: "Drivers",
        year: "2024",
        url: "https://www.titleist.com/product/gt4-driver/669C.html",
        description: "Draw-biased driver designed to reduce slice and promote a draw",
        reviews: "5/5",
        price: "$599.99"
    },
    
    // U-Series Utility Iron
    {
        brand: "Titleist",
        model: "U•505 Utility Iron",
        type: "Utility Irons",
        year: "2024",
        url: "https://www.titleist.com/product/u%E2%80%A2505/558C.html",
        description: "High-launching utility iron with exceptional forgiveness and distance",
        reviews: "5/5",
        price: "$249.99"
    }
];

// Add debug logging
console.log('Titleist data loaded:', window.golfData.titleist);
