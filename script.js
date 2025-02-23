document.addEventListener('DOMContentLoaded', function() {
    // Global error handler
    window.onerror = function(message, source, lineno, colno, error) {
        console.error('Global error:', message, 'at', source, ':', lineno);
        return false;
    };

    // Initialize window.golfData if it doesn't exist
    window.golfData = window.golfData || {};
    
    function initializeApp() {
        const allClubs = getAllClubs();
        console.log('Total clubs found:', allClubs.length);
        
        updateFilters(allClubs);
        renderBrandCards(allClubs);
        
        // Add event listeners to filters
        document.getElementById('brandFilter').addEventListener('change', handleFilters);
        document.getElementById('clubTypeFilter').addEventListener('change', handleFilters);
    }
    
    function getAllClubs() {
        let allClubs = [];
        for (const brand in window.golfData) {
            if (window.golfData.hasOwnProperty(brand) && Array.isArray(window.golfData[brand])) {
                allClubs = allClubs.concat(window.golfData[brand]);
            }
        }
        return allClubs;
    }
    
    function updateFilters(clubs) {
        const brandFilter = document.getElementById('brandFilter');
        const clubTypeFilter = document.getElementById('clubTypeFilter');
        
        // Get unique brands and types
        const brands = [...new Set(clubs.map(club => club.brand))];
        const types = [...new Set(clubs.map(club => club.type))];
        
        // Clear existing options
        brandFilter.innerHTML = '<option value="">All Brands</option>';
        clubTypeFilter.innerHTML = '<option value="">All Club Types</option>';
        
        // Add options
        brands.sort().forEach(brand => {
            const option = document.createElement('option');
            option.value = brand;
            option.textContent = brand;
            brandFilter.appendChild(option);
        });
        
        types.sort().forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            clubTypeFilter.appendChild(option);
        });
    }
    
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
        
        renderBrandCards(filteredClubs);
    }
    
    function renderBrandCards(clubs) {
        const container = document.getElementById('brandsContainer');
        container.innerHTML = '';
        
        // Group clubs by brand
        const groupedByBrand = {};
        clubs.forEach(club => {
            if (!groupedByBrand[club.brand]) {
                groupedByBrand[club.brand] = [];
            }
            groupedByBrand[club.brand].push(club);
        });
        
        // Create brand cards
        Object.keys(groupedByBrand).sort().forEach(brand => {
            const brandClubs = groupedByBrand[brand];
            
            // Group clubs by type
            const clubsByType = {};
            brandClubs.forEach(club => {
                if (!clubsByType[club.type]) {
                    clubsByType[club.type] = [];
                }
                clubsByType[club.type].push(club);
            });
            
            // Create brand card
            const card = document.createElement('div');
            card.className = 'brand-card';
            
            // Calculate statistics
            const totalModels = brandClubs.length;
            const totalCategories = Object.keys(clubsByType).length;
            const newModels = brandClubs.filter(club => club.year === '2024' || club.year === '2025').length;
            
            // Create card content
            card.innerHTML = `
                <div class="brand-header">
                    <h2>${brand}</h2>
                </div>
                <div class="brand-stats">
                    <div class="stat-item">
                        <div class="stat-number">${totalModels}</div>
                        <div class="stat-label">Models</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${totalCategories}</div>
                        <div class="stat-label">Categories</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">${newModels}</div>
                        <div class="stat-label">New Models</div>
                    </div>
                </div>
                <div class="brand-content">
                    ${Object.keys(clubsByType).slice(0, 3).map(type => `
                        <div class="club-type">
                            <h3>${type}</h3>
                            <ul class="club-list">
                                ${clubsByType[type].slice(0, 3).map(club => `
                                    <li class="club-item">
                                        <div class="club-name">${club.model}</div>
                                        <div class="club-description">${club.description}</div>
                                        <div class="club-meta">
                                            ${club.price ? `Price: ${club.price} • ` : ''}
                                            ${club.reviews}
                                        </div>
                                    </li>
                                `).join('')}
                            </ul>
                            ${clubsByType[type].length > 3 ? 
                                `<a href="#" class="view-all">View all ${clubsByType[type].length} ${type}</a>` : 
                                ''}
                        </div>
                    `).join('')}
                    ${Object.keys(clubsByType).length > 3 ? 
                        `<a href="#" class="view-all">View all categories</a>` : 
                        ''}
                </div>
            `;
            
            container.appendChild(card);
        });
    }
    
    // Initialize after a short delay to ensure scripts are loaded
    setTimeout(initializeApp, 100);
});
