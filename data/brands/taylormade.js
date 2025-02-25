// Initialize golfData object if it doesn't exist
if (!window.golfData) {
    window.golfData = {};
}

// TaylorMade golf clubs data
window.golfData.taylormade = [
    // Qi35 Driver Series
    {
        brand: "TaylorMade",
        model: "Qi35 Max Driver",
        type: "Drivers",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-Max-Driver/DW-TC375.html",
        description: "Revolutionary driver with AI-designed face for maximum distance and forgiveness",
        reviews: "5/5",
        price: "€599.99"
    },
    {
        brand: "TaylorMade",
        model: "Qi35 Driver",
        type: "Drivers",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-Driver/DW-TC370.html",
        description: "Tour-level driver with advanced aerodynamics for premium performance",
        reviews: "4.5/5",
        price: "€579.99"
    },
    {
        brand: "TaylorMade",
        model: "Qi35 LS Driver",
        type: "Drivers",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-LS-Driver/DW-TC366.html",
        description: "Low-spin driver designed for skilled players seeking workability",
        reviews: "4.5/5",
        price: "€579.99"
    },
    {
        brand: "TaylorMade",
        model: "Qi35 Max Lite Driver",
        type: "Drivers",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-Max-Lite-Driver/DW-TC377.html",
        description: "Ultra-lightweight design for players with moderate swing speeds",
        reviews: "5/5",
        price: "€599.99"
    },
    {
        brand: "TaylorMade",
        model: "Qi35 Max Designer Series Driver",
        type: "Drivers",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-Max-Designer-Series-Driver/DW-TC425-UK.html",
        description: "Limited edition driver with premium aesthetics and performance",
        reviews: "4.5/5",
        price: "€649.99"
    },
    {
        brand: "TaylorMade",
        model: "Qi35 Designer Series Driver",
        type: "Drivers",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-Designer-Series-Driver/DW-TC424-UK.html",
        description: "Exclusive designer finish with tour-level performance",
        reviews: "4.5/5",
        price: "€629.99"
    },
    {
        brand: "TaylorMade",
        model: "Qi35 LS Designer Series Driver",
        type: "Drivers",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-LS-Designer-Series-Driver/DW-TC372-UK.html",
        description: "Premium low-spin driver with special edition finishes",
        reviews: "4.5/5",
        price: "€629.99"
    },
    {
        brand: "TaylorMade",
        model: "Kalea Gold Driver",
        type: "Drivers",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Kalea-Gold-Driver/DW-TC347.html",
        description: "Women's driver with elegant gold accents and optimized performance",
        reviews: "5/5",
        price: "€499.99"
    },

    // Fairway Woods
    {
        brand: "TaylorMade",
        model: "Qi35 Max Fairway",
        type: "Fairway Woods",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-Max-Fairway/DW-TC379.html",
        description: "Revolutionary fairway wood with maximum forgiveness and distance",
        reviews: "5/5",
        price: "€399.99"
    },
    {
        brand: "TaylorMade",
        model: "Qi35 Fairway",
        type: "Fairway Woods",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-Fairway/DW-TC373.html",
        description: "Tour-level fairway wood with advanced control and versatility",
        reviews: "4.5/5",
        price: "€379.99"
    },
    {
        brand: "TaylorMade",
        model: "Qi35 Tour Ti Fairway",
        type: "Fairway Woods",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-Tour-Ti-Fairway/DW-TC368.html",
        description: "Premium titanium fairway wood for elite performance",
        reviews: "5/5",
        price: "€449.99"
    },
    {
        brand: "TaylorMade",
        model: "Qi35 Max Lite Fairway",
        type: "Fairway Woods",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-Max-Lite-Fairway/DW-TC380.html",
        description: "Ultra-lightweight fairway wood for moderate swing speeds",
        reviews: "4.5/5",
        price: "€399.99"
    },
    {
        brand: "TaylorMade",
        model: "Kalea Gold Fairway",
        type: "Fairway Woods",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Kalea-Gold-Fairway/DW-TC348.html",
        description: "Women's fairway wood with elegant gold accents and optimal launch",
        reviews: "5/5",
        price: "€299.99"
    },

    // Hybrids/Rescues
    {
        brand: "TaylorMade",
        model: "Qi35 Max Rescue",
        type: "Hybrids",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-Max-Rescue/DW-TC382.html",
        description: "High-performing hybrid with maximum forgiveness and versatility",
        reviews: "5/5",
        price: "€299.99"
    },
    {
        brand: "TaylorMade",
        model: "Qi35 Rescue",
        type: "Hybrids",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-Rescue/DW-TC374.html",
        description: "Tour-level rescue club with controlled trajectory and workability",
        reviews: "4.5/5",
        price: "€279.99"
    },
    {
        brand: "TaylorMade",
        model: "Qi35 Max Lite Rescue",
        type: "Hybrids",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi35-Max-Lite-Rescue/DW-TC383.html",
        description: "Lightweight rescue designed for moderate swing speeds",
        reviews: "4.5/5",
        price: "€299.99"
    },
    {
        brand: "TaylorMade",
        model: "Kalea Gold Rescue",
        type: "Hybrids",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Kalea-Gold-Rescue/DW-TC349.html",
        description: "Women's rescue club with elegant gold accents and effortless launch",
        reviews: "5/5",
        price: "€249.99"
    },

    // Irons
    {
        brand: "TaylorMade",
        model: "P•790 Irons",
        type: "Irons",
        year: "2025",
        url: "https://www.taylormadegolf.eu/P%E2%88%99790-Irons/DW-TC635.html",
        description: "Individual Irons From €185.71 Sets From €1299.99",
        reviews: "5/5",
        price: "€1299.99"
    },
    {
        brand: "TaylorMade",
        model: "Qi Gunmetal Edition Irons",
        type: "Irons",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Qi-Gunmetal-Edition-Irons/DW-TC665.html",
        description: "Individual Irons From €171.43 Sets From €1199.99",
        reviews: "4.5/5",
        price: "€1199.99"
    },
    {
        brand: "TaylorMade",
        model: "P•770 Irons",
        type: "Irons",
        year: "2025",
        url: "https://www.taylormadegolf.eu/P%E2%88%99770-Irons/DW-TC567.html",
        description: "Individual Irons From €199.99 Sets From €1399.99",
        reviews: "5/5",
        price: "€1399.99"
    },
    {
        brand: "TaylorMade",
        model: "P•7CB Irons",
        type: "Irons",
        year: "2025",
        url: "https://www.taylormadegolf.eu/P%E2%88%997CB-Irons/DW-TC566.html",
        description: "Individual Irons From €214.28 Sets From €1499.99",
        reviews: "5/5",
        price: "€1499.99"
    },
    {
        brand: "TaylorMade",
        model: "P790 Aged Copper Irons",
        type: "Irons",
        year: "2025",
        url: "https://www.taylormadegolf.eu/P790-Aged-Copper/DW-TC622-UK.html",
        description: "Individual Irons From €199.99 Sets From €1399.99",
        reviews: "5/5",
        price: "€1399.99"
    },

    // Wedges
    {
        brand: "TaylorMade",
        model: "Milled Grind 4 Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Milled-Grind-4-Wedge/DW-TC518.html",
        description: "Precision milled wedge with advanced bounce options",
        reviews: "5/5",
        price: "€179.99"
    },
    {
        brand: "TaylorMade",
        model: "Hi Toe 4 Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Hi-Toe-4-Wedge/DW-TC587.html",
        description: "Versatile wedge with full-face grooves for enhanced spin",
        reviews: "5/5",
        price: "€199.99"
    },
    {
        brand: "TaylorMade",
        model: "Milled Grind 4 Black Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Milled-Grind-4-Black-Wedge/DW-TC517.html",
        description: "Premium black finish wedge with raw face technology",
        reviews: "4.5/5",
        price: "€189.99"
    },
    {
        brand: "TaylorMade",
        model: "MyMG4 Wedge",
        type: "Wedges",
        year: "2025",
        url: "https://www.taylormadegolf.eu/MyMG4-Wedge/DW-TC520.html",
        description: "Customizable wedge with personalized options",
        reviews: "5/5",
        price: "€219.99"
    },

    // Putters
    {
        brand: "TaylorMade",
        model: "Spider Tour X Putter",
        type: "Putters",
        year: "2025",
        url: "https://www.taylormadegolf.eu/Spider-Tour-X/N7548826.html",
        description: "High MOI mallet putter with advanced alignment features",
        reviews: "5/5",
        price: "€379.99"
    },
    {
        brand: "TaylorMade",
        model: "TP Black Juno Putter",
        type: "Putters",
        year: "2025",
        url: "https://www.taylormadegolf.eu/TP-Black-Juno/DW-TC856.html",
        description: "Classic blade putter with premium black finish",
        reviews: "4.5/5",
        price: "€299.99"
    },
    {
        brand: "TaylorMade",
        model: "TP Black Soto Putter",
        type: "Putters",
        year: "2025",
        url: "https://www.taylormadegolf.eu/TP-Black-Soto/DW-TC858.html",
        description: "Tour-inspired blade putter with optimized weight distribution",
        reviews: "4.5/5",
        price: "€299.99"
    }
];

// Add debug logging
console.log('TaylorMade data loaded:', window.golfData.taylormade);
