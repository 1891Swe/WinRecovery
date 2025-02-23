document.addEventListener('DOMContentLoaded', function() {
    // Debug: Log initial state
    console.log('Initial window.golfData:', window.golfData);

    // Ensure window.golfData is initialized
    window.golfData = window.golfData || {};

    // Function to get all clubs from all brands
    function getAllClubs() {
        let allClubs = [];
        
        // Debug: Log brands in golfData
        console.log('Brands in golfData:', Object.keys(window.golfData));

        for (const brand in window.golfData) {
            console.log(`Processing brand: ${brand}`);
            
            if (window.golfData.hasOwnProperty(brand) && Array.isArray(window.golfData[brand])) {
                console.log(`Clubs for ${brand}:`, window.golfData[brand].length);
                allClubs = allClubs.concat(window.golfData[brand]);
            }
        }
        
        console.log('Total clubs found:', allClubs.length);
        return allClubs;
    }
    
    // Function to update filter options
    function updateFilters(clubs) {
        const brandFilter = document.getElementById('brandFilter');
        const clubTypeFilter = document.getElementById('clubTypeFilter');
        
        // Get unique brands and types
        const brands = [...new Set(clubs.map(club => club.brand))];
        const types = [...new Set(clubs.map(club => club.type))];
        
        console.log('Unique brands:', brands);
        console.log('Unique types:', types);
        
        // Clear existing options
        brandFilter.innerHTML = '<option value="">All Brands</option>';
        clubTypeFilter.innerHTML = '<option value="">All Club Types</option>';
        
        // Add brand options
        brands.sort().forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilter.appendChild(option);
        });
        
        // Add type options
        types.sort().forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            clubTypeFilter.appendChild(option);
        });
    }
    
    // Function to handle filter changes
    function handleFilters() {
        const selectedBrand = document.getElementById('brandFilter').value;
        const selectedType = document.getElementById('clubTypeFilter').value;
        
        let filteredClubs = getAllClubs();
        
        // Apply brand filter
        if (selectedBrand) {
            filteredClubs = filteredClubs.filter(club => club.brand === selectedBrand);
        }
        
        // Apply type filter
        if (selectedType) {
            filteredClubs = filteredClubs.filter(club => club.type === selectedType);
        }
        
        renderClubs(filteredClubs);
    }
    
    // Function to render clubs
    function renderClubs(clubs) {
        const container = document.getElementById('brandsContainer');
        container.innerHTML = '';
        
        console.log('Rendering clubs:', clubs.length);
        
        // Group clubs by brand
        const groupedClubs = {};
        clubs.forEach(club => {
            if (!groupedClubs[club.brand]) {
                groupedClubs[club.brand] = [];
            }
            groupedClubs[club.brand].push(club);
        });
        
        // Render each brand's clubs
        Object.keys(groupedClubs).sort().forEach(brand => {
            const brandClubs = groupedClubs[brand];
            const brandCard = document.createElement('div');
            brandCard.className = 'brand-card';
            
            brandCard.innerHTML = `
                <h2>${brand}</h2>
                <ul class="club-list">
                    ${brandClubs.map(club => `
                        <li>
                            <strong>${club.model}</strong> - ${club.type}
                            <br>
                            <small>${club.description}</small>
                            ${club.price ? `<br><small>Price: ${club.price}</small>` : ''}
                            <br>
                            <small>${club.reviews}</small>
                        </li>
                    `).join('')}
                </ul>
            `;
            
            container.appendChild(brandCard);
        });
    }
    
    // Add event listeners to filters
    document.getElementById('brandFilter').addEventListener('change', handleFilters);
    document.getElementById('clubTypeFilter').addEventListener('change', handleFilters);
    
    // Delay initialization to ensure scripts are loaded
    setTimeout(() => {
        try {
            const allClubs = getAllClubs();
            updateFilters(allClubs);
            renderClubs(allClubs);
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }, 100);
});
