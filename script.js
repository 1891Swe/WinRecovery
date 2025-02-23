// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Global error handler
    window.onerror = function(message, source, lineno, colno, error) {
        console.error('Global error:', message, 'at', source, ':', lineno);
        return false;
    };
    
    // Initialize window.golfData if it doesn't exist
    window.golfData = window.golfData || {};
    
    // Function to initialize the application
    function initializeApp() {
        console.log('Initializing app with brands:', Object.keys(window.golfData));
        
        const allClubs = getAllClubs();
        console.log('Total clubs found:', allClubs.length);
        
        updateFilters(allClubs);
        renderClubs(allClubs);
        
        // Add event listeners to filters
        document.getElementById('brandFilter').addEventListener('change', handleFilters);
        document.getElementById('clubTypeFilter').addEventListener('change', handleFilters);
    }
    
    // Function to get all clubs from all brands
    function getAllClubs() {
        let allClubs = [];
        for (const brand in window.golfData) {
            if (window.golfData.hasOwnProperty(brand) && Array.isArray(window.golfData[brand])) {
                allClubs = allClubs.concat(window.golfData[brand]);
            }
        }
        return allClubs;
    }
    
    // Function to update filter options
    function updateFilters(clubs) {
        const brandFilter = document.getElementById('brandFilter');
        const clubTypeFilter = document.getElementById('clubTypeFilter');
        
        // Get unique brands and types
        const brands = [...new Set(clubs.map(club => club.brand))];
        const types = [...new Set(clubs.map(club => club.type))];
        
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
        
        if (selectedBrand) {
            filteredClubs = filteredClubs.filter(club => club.brand === selectedBrand);
        }
        
        if (selectedType) {
            filteredClubs = filteredClubs.filter(club => club.type === selectedType);
        }
        
        renderClubs(filteredClubs);
    }
    
    // Function to render clubs
    function renderClubs(clubs) {
        const container = document.getElementById('brandsContainer');
        container.innerHTML = '';
        
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
                            <a href="${club.url}" class="club-link" target="_blank" rel="noopener noreferrer">
                                <strong>${club.model}</strong> - ${club.type}
                            </a>
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
    
    // Initialize the app with a slight delay to ensure scripts are loaded
    setTimeout(initializeApp, 100);
});
